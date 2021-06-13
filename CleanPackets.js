var scriptName = "PacketAntiKnockback";
var scriptVersion = 1.1;
var scriptAuthor = "Soulplexis, yorik100";

var velocity = Java.type("net.minecraft.network.play.server.S12PacketEntityVelocity");
var explode = Java.type("net.minecraft.network.play.server.S27PacketExplosion");
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');
var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition')
var C05PacketPlayerLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C06PacketPlayerPosLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');

function Module() {
	var Explosion = value.createBoolean("ExplosionCancel", true);
	var HorizontalSpoof = value.createBoolean("HorizontalSpoof", true);
	var VerticalSpoof = value.createBoolean("VerticalSpoof", true);
	var HorizontalMotionReset = value.createBoolean("HorizontalMotionReset", false);
	var VerticalMotionReset = value.createBoolean("VerticalMotionReset", false);
	var HorizontalIntensity = value.createInteger("HorizontalIntensity", 100, -100, 100);
	var VerticalIntensity = value.createInteger("VerticalIntensity", 100, 0, 200);
    this.getName = function () {
        return "PacketVelocity";
    };

    this.getDescription = function () {
        return "Silent packet anti velocity that can bypass some AC";
    };

    this.getCategory = function () {
        return "Combat";
    };
	var engaging = false;
	var spoofed = false;
    this.onUpdate = function () {
	if (mc.thePlayer.hurtTime > 8){
	engaging = true;
	this.y = 0
	this.x = 0
	this.z = 0
	if (VerticalMotionReset.get() == true){
	mc.thePlayer.motionY = 0
	}
	if (HorizontalMotionReset.get() == true){
	mc.thePlayer.motionX = 0
	mc.thePlayer.motionZ = 0
	}
	}
    } 
    this.onDisable = function() {
    }
    
    this.onEnable = function() {
    }
	this.onPacket = function(event) {
		var packet = event.getPacket();
            if (packet instanceof velocity && mc.theWorld.getEntityByID(packet.getEntityID()) == mc.thePlayer) {
            this.motionY = (packet.motionY * 0.0001 * (VerticalIntensity.get() * 0.01))
			this.motionX = (packet.motionX * 0.0001 * HorizontalIntensity.get() * 0.01)
			this.motionZ = (packet.motionZ * 0.0001 * HorizontalIntensity.get() * 0.01)
			event.cancelEvent()
            }
			if(Explosion.get() == true && (packet instanceof explode) && mc.theWorld.getEntityByID(packet.getEntityID()) == mc.thePlayer) {
				event.cancelEvent(); // No anticheat detects antiknockback with TNT 
            }
			if (packet instanceof C03PacketPlayer && (engaging == true || spoofed == true) && !(packet instanceof C04PacketPlayerPosition) && !(packet instanceof C06PacketPlayerPosLook){
			spoofed = false;
			if (packet instanceof C05PacketPlayerLook){
			mc.thePlayer.sendQueue.addToSendQueue(new C06PacketPlayerPosLook(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, mc.thePlayer.rotationYaw, mc.thePlayer.rotationPitch, packet.isOnGround()))
			}else{
			mc.thePlayer.sendQueue.addToSendQueue(new C04PacketPlayerPosition(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, packet.isOnGround()))
			}
			event.cancelEvent()
			}else{
			spoofed = false;
			}
			if (packet instanceof C03PacketPlayer && engaging == true){
			if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, this.motionY, 0).expand(0, 0, 0)).isEmpty() && VerticalSpoof.get() == true){
			packet.y += this.motionY
			}
			if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(this.motionX, 0, 0).expand(0, 0, 0)).isEmpty() && HorizontalSpoof.get() == true){
			packet.x += this.motionX
			}
			if (mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, mc.thePlayer.getEntityBoundingBox().offset(0, 0, this.motionZ).expand(0, 0, 0)).isEmpty() && HorizontalSpoof.get() == true){
			packet.z += this.motionZ
			}
			engaging = false;
			spoofed = true;
			}
	}
	this.onMove = function (event) {
	if (mc.thePlayer.hurtTime > 8){
	if (VerticalMotionReset.get() == true){
	event.setY(0)
	}
	if (HorizontalMotionReset.get() == true){
	event.setX(0)
	event.setZ(0)
	}
	}
    this.addValues = function(values) {
		values.add(Explosion);
		values.add(HorizontalSpoof);
		values.add(VerticalSpoof);
		values.add(HorizontalMotionReset);
		values.add(VerticalMotionReset);
		values.add(HorizontalIntensity);
		values.add(VerticalIntensity);
    }
}
var Module = new Module();
var ModuleClient;

function onEnable() {
    ModuleClient = moduleManager.registerModule(Module);
};

function onDisable() {
    moduleManager.unregisterModule(ModuleClient);
};