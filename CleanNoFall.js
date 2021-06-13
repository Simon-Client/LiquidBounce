var scriptName = "CleanNoFall";
var scriptVersion = 1.0;
var scriptAuthor = "yorik100";
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition')
var C05PacketPlayerLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C06PacketPlayerPosLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");
var BlockPos = Java.type("net.minecraft.util.BlockPos");
var blinkModule = moduleManager.getModule("Blink");
// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

var cleanNoFall = new CleanNoFall();

var client;

function CleanNoFall() {
    var Mode = value.createList("Mode", ["Packet", "PacketAAC", "AAC", "AAC2", "Matrix", "Verus", "Spigot"], "Packet");
    var NoVoidSpoof = value.createBoolean("NoVoidSpoof", false);
    var MinFallenBlocksToSpoof = value.createInteger("MinFallenBlocksToSpoof", 16, 1, 30);
    this.getName = function() {
        return "BetterNoFall";
    };

    this.getDescription = function() {
        return "NoFall";
    };

    this.getCategory = function() {
        return "Player";
    };
    this.addValues = function(values) {
        values.add(NoVoidSpoof);
        values.add(MinFallenBlocksToSpoof);
        values.add(Mode);
    };
    this.getTag = function() {
        return Mode.get();
    }
    this.onEnable = function() {
        posY = mc.thePlayer.posY
    };
    this.onUpdate = function() {
        if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 0, 0).expand(0, 0, 0)).isEmpty() && mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, -10002.25, 0).expand(0, -10003.75, 0)).isEmpty()) {
            this.inVoid = true
        } else {
            this.inVoid = false
        }
        if (mc.thePlayer.onGround && Mode.get() != "Packet" && Mode.get() != "AAC2" && Mode.get() != "Verus" && Mode.get() != "PacketAAC") {
            if (Mode.get() == "AAC") {
                this.one = 0
            }
            if (Mode.get() == "Matrix" || Mode.get() == "Spigot") {
                this.one = 6
            }
        } else if (mc.thePlayer.onGround) {
            this.mario = 0
        }
        if (mc.thePlayer.onGround || mc.thePlayer.isInWater() || mc.thePlayer.isInLava() || mc.thePlayer.isOnLadder() || mc.thePlayer.isInWeb) {
            this.mario = mc.thePlayer.fallDistance - 0.25
        }
        if (mc.thePlayer.motionY <= -0.32 && Mode.get() == "PacketAAC" && mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset((mc.thePlayer.motionX * 2), -0.8, (mc.thePlayer.motionZ * 2)).expand(0, 0, 0)).isEmpty() && !(mc.thePlayer.motionY >= 0 || mc.thePlayer.isInWater() || mc.thePlayer.isInLava() || mc.thePlayer.isOnLadder() || mc.thePlayer.isInWeb)) {
            blinkModule.setState(true);
            this.isFalling = true
        }
        if (this.isFalling == true && (mc.thePlayer.motionY >= 0 || mc.thePlayer.onGround || mc.thePlayer.isInWater() || mc.thePlayer.isInLava() || mc.thePlayer.isOnLadder() || mc.thePlayer.isInWeb)) {
            blinkModule.setState(false);
            this.isFalling = false
        }
    }
    this.onPacket = function(event) {
        var packet = event.getPacket();
        if (mc.theWorld != null) {
            if (packet instanceof S08PacketPlayerPosLook) {
                this.mario = mc.thePlayer.fallDistance - 0.25
            }
            if (Mode.get() == "Packet" && (packet instanceof C04PacketPlayerPosition || packet instanceof C06PacketPlayerPosLook)) {
                if ((posY - packet.y > 2.7) && !mc.thePlayer.onGround) {
                    packet.onGround = true
                }
                if (posY != packet.y) {
                    posY = packet.y
                }
            }
            if (this.inVoid == false || !NoVoidSpoof.get() || mc.thePlayer.fallDistance <= MinFallenBlocksToSpoof.get()) {
                if (packet instanceof C03PacketPlayer && mc.thePlayer.fallDistance >= 3.34 && Mode.get() != "Packet" && Mode.get() != "AAC2" && Mode.get() != "Verus" && Mode.get() != "PacketAAC" && Mode.get() != "Spigot") {
                    if (!(mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, mc.thePlayer.motionY - 1, 0).expand(0, 0, 0)).isEmpty()) && this.one < 7 && !mc.thePlayer.onGround) {
                        this.one += 1
                        if (mc.thePlayer.motionY <= -1) {
                            packet.y -= 2
                        } else {
                            packet.y -= mc.thePlayer.motionY - 1
                        }
                    }
                } else if (packet instanceof C03PacketPlayer && ((mc.thePlayer.fallDistance >= (this.mario + 2.6) && (Mode.get() == "AAC2")) || (mc.thePlayer.fallDistance >= (this.mario + 3.2) && (Mode.get() != "AAC2"))) && Mode.get() != "Spigot") {
                    if (Mode.get() == "AAC2") {
                        this.mario += 2.9
                    } else {
                        if (mc.thePlayer.motionY < -0.9) {
                            this.mario += 3
                        } else {
                            this.mario += 3.2
                        }
                    }
                    packet.onGround = true;
                    if (Mode.get() == "AAC2" || Mode.get() == "Verus") {
                        mc.thePlayer.motionY = 0
                    }
                }
                if (packet instanceof C03PacketPlayer && Mode.get() == "Spigot" && mc.thePlayer.fallDistance >= (this.mario + 3.2) && !(mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, mc.thePlayer.motionY - 1, 0).expand(0, 0, 0)).isEmpty()) && this.one < 7 && !mc.thePlayer.onGround) {
                    packet.y -= 11
                }
            }
        }
    }
    this.onMove = function(event) {}
    this.onDisable = function() {
        this.mario = 0
    }
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(cleanNoFall);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}