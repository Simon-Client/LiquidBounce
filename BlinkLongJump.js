var scriptName = "BlinkLongJump";
var scriptVersion = 1.1;
var scriptAuthor = "暗狼"
var BlinkModule = moduleManager.getModule("Blink");
var BlinkLongJump = new BlinkLongJump();
var client;

script.import('lib/minecraftUtils.js');
script.import('lib/timingFunctions.js');
script.import('lib/glFunctions.js');
script.import('lib/systemFunctions.js');
var S02PacketChat = Java.type('net.minecraft.network.play.server.S02PacketChat')
var File = Java.type('java.io.File');
var FileReader = Java.type('java.io.FileReader');
var BufferedReader = Java.type('java.io.BufferedReader');
var FileWriter = Java.type('java.io.FileWriter');
var BufferedWriter = Java.type('java.io.BufferedWriter');
var Timer = Java.type('java.util.Timer');
var MovementUtils = Java.type('net.ccbluex.liquidbounce.utils.MovementUtils')

var C07PacketPlayerDigging = Java.type('net.minecraft.network.play.client.C07PacketPlayerDigging');
var C08PacketPlayerBlockPlacement = Java.type('net.minecraft.network.play.client.C08PacketPlayerBlockPlacement');
var BlockPos = Java.type('net.minecraft.util.BlockPos');
var EnumFacing = Java.type('net.minecraft.util.EnumFacing');

function BlinkLongJump() {
	var MotionF = value.createFloat("CustomMotionSpike", 5, 1, 30);
	var MotionY = value.createFloat("CustomMotionY", 5, 1, 30);
	
    this.getName = function() {
        return "BlinkLongJump";
    };
    this.getDescription = function() {
        return "BlinkLongJump";
    };
    this.getCategory = function() {
        return "Fun";
    };
    this.onEnable = function() {
		BlinkModule.setState(true);
				                               mc.thePlayer.motionY = MotionY.get();
		                               mc.thePlayer.motionX *= MotionF.get();
									   		                               mc.thePlayer.motionZ *= MotionF.get();
    };
    this.onDisable = function() {
		BlinkModule.setState(false);
    }
		this.addValues = function(values) {
		values.add(MotionF);
		values.add(MotionY);
    };
	this.onUpdate = function() {
        	if(mc.thePlayer.onGround || isOnGround(0.5))
				mc.thePlayer.sendQueue.addToSendQueue(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.RELEASE_USE_ITEM, BlockPos.ORIGIN, EnumFacing.DOWN));
        	if(mc.thePlayer.isBlocking() && MovementUtil.isMoving() && isOnGround(0.42) && ( Aura.curTarget == null)){
    			if(timer.delay(65)){	
    				mc.thePlayer.sendQueue.addToSendQueue(new C08PacketPlayerBlockPlacement(mc.thePlayer.inventory.getCurrentItem()));
    				timer.reset();
				}
			}
				
	};
}

function onLoad() {}

function onEnable() {
   BlinkLongJumpClient = moduleManager.registerModule(BlinkLongJump)
}

function onDisable() {
    moduleManager.unregisterModule(client)
}