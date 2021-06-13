var scriptName = "BodyRotations"; // The name of your script
var scriptVersion = 1.1; // The version of your script 
var scriptAuthor = "Mum I can be a great skidder"; // The author of your script (eg. your username)

var C04PacketPlayerPosition = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition');
var C06PacketPlayerPosLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var C05PacketPlayerLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');

var headRotationsModule = moduleManager.getModule("HeadRotations");
var killAuraModule = moduleManager.getModule("KillAura");
var scaffoldModule = moduleManager.getModule("Scaffold");
var towerModule = moduleManager.getModule("Tower");
var derpModule = moduleManager.getModule("Derp");

var rotations = new Rotations();
var rotationsClient;
function Rotations() {
    this.getName = function() {
        return "BodyRotations";
    };
    this.getDescription = function() {
        return headRotationsModule.getDescription();
    };
    this.getCategory = function() {
        return "Render";
    };
	var playeryaw;
	var hrState;
	var player = null;
	this.onEnable = function() {
		playeryaw = null;
		hrState = headRotationsModule.getState();
	}
	this.onDisable = function() {
		playeryaw = null;
		headRotationsModule.setState(hrState);
		player = null;
	}
	this.onUpdate = function() {
		if(!headRotationsModule.getState())
			headRotationsModule.setState(true);
		if(player != null)
		if(mc.thePlayer.getDistanceToEntity(player) > killAuraModule.getValue("Range").get() || player.isDead || mc.thePlayer.isDead)
			player = null;
	}
	this.onAttack = function(event) {
		 player = event.getTargetEntity();
	}
        this.onPacket = function(event) {
		var packet = event.getPacket();
		if(scaffoldModule.getState() || towerModule.getState() || (player != null && killAuraModule.getState()) || derpModule.getState())
		if(packet instanceof C06PacketPlayerPosLook || packet instanceof C05PacketPlayerLook || packet instanceof S08PacketPlayerPosLook){
			playeryaw = packet.getYaw();
			mc.thePlayer.renderYawOffset = packet.getYaw();
			mc.thePlayer.rotationYawHead = packet.getYaw();
		}
		else if(scaffoldModule.getState() || towerModule.getState() || killAuraModule.getState() || derpModule.getState()){
			mc.thePlayer.renderYawOffset = playeryaw;
			mc.thePlayer.rotationYawHead = mc.thePlayer.renderYawOffset;
		}
       }
}
function onLoad() {}
function onEnable() {
       rotationsClient = moduleManager.registerModule(rotations);
};
function onDisable() {
       moduleManager.unregisterModule(rotationsClient);
};