var scriptName = "CleanAutoBlock";
var scriptVersion = 1.0;
var scriptAuthor = "yorik100";
var C07PacketPlayerDigging = Java.type('net.minecraft.network.play.client.C07PacketPlayerDigging');
var C08PacketPlayerBlockPlacement = Java.type('net.minecraft.network.play.client.C08PacketPlayerBlockPlacement')
var BlockPos = Java.type('net.minecraft.util.BlockPos')
var EnumFacing = Java.type('net.minecraft.util.EnumFacing')
var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var KillAura = Java.type("net.ccbluex.liquidbounce.features.module.modules.combat.KillAura");
var noSlowModule = moduleManager.getModule("NoSlow");

var cleanAutoBlock = new CleanAutoBlock();

var client;

function CleanAutoBlock() {
    this.addValues = function(values) {}
    this.getName = function() {
        return "VanillaAutoBlock";
    };

    this.getDescription = function() {
        return "Vanilla AutoBlock";
    };

    this.getCategory = function() {
        return "Movement";
    };
    this.onPacket = function(event) {
        var packet = event.getPacket();
        if ((LiquidBounce.moduleManager.getModule(KillAura.class)).blockingStatus && ((packet instanceof C07PacketPlayerDigging && packet.getStatus() == C07PacketPlayerDigging.Action.RELEASE_USE_ITEM) || packet instanceof C08PacketPlayerBlockPlacement) && packetCancel && !(noSlowModule.getState() && noSlowModule.getValue("Packet").get() && (mc.thePlayer.movementInput.moveForward || mc.thePlayer.movementInput.moveStrafe))) {
            event.cancelEvent();
        }
    }
    this.onEnable = function() {
        isBlocking = false;
        packetCancel = true;
    }
    this.onUpdate = function() {
        if ((LiquidBounce.moduleManager.getModule(KillAura.class)).blockingStatus && !isBlocking && !mc.thePlayer.isBlocking() && !(noSlowModule.getState() && noSlowModule.getValue("Packet").get() && (mc.thePlayer.movementInput.moveForward || mc.thePlayer.movementInput.moveStrafe))) {
            isBlocking = true;
        }
		if (mc.thePlayer.isBlocking()){
		isBlocking = false;
		}
        if (!((LiquidBounce.moduleManager.getModule(KillAura.class)).blockingStatus) && isBlocking && !(noSlowModule.getState() && noSlowModule.getValue("Packet").get() && (mc.thePlayer.movementInput.moveForward || mc.thePlayer.movementInput.moveStrafe))) {
            packetCancel = false;
            isBlocking = false;
            mc.thePlayer.sendQueue.addToSendQueue(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.RELEASE_USE_ITEM, BlockPos.ORIGIN, EnumFacing.DOWN))
            packetCancel = true;
        }
    }
    this.onDisable = function() {
        if (isBlocking && !mc.thePlayer.isBlocking()) {
            packetCancel = false;
            mc.thePlayer.sendQueue.addToSendQueue(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.RELEASE_USE_ITEM, BlockPos.ORIGIN, EnumFacing.DOWN))
        }
    }
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(cleanAutoBlock);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}