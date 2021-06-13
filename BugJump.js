var scriptName = "BugJump";
var scriptVersion = 1.1;
var scriptAuthor = "暗狼"
var BlinkModule = moduleManager.getModule("Blink");
var NoFallModule = moduleManager.getModule("NoFall");
var ClipModule = moduleManager.getModule("Clip");
var BugJump = new BugJump();
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

function BugJump() {
	var Mode = value.createList("Mode", ["Motion", "Clip", "Ground"], "Motion");
	var MotionY = value.createFloat("CustomMotionY", 5, 1, 8);
	
    this.getName = function() {
        return "BugJump";
    };
    this.getDescription = function() {
        return "BugJump";
    };
    this.getCategory = function() {
        return "Fun";
    };
    this.onEnable = function() {
				    switch(Mode.get()) {
			    case "Motion":	 
				commandManager.executeCommand(".t NofallPlus");
		BlinkModule.setState(true);
				NoFallModule.setState(true);
		                               mc.thePlayer.motionY = MotionY.get();
		setTimeout(function() {
		BlinkModule.setState(false);
		commandManager.executeCommand(".t BugJump");
				commandManager.executeCommand(".t NofallPlus");
		}, 100)
		break;
					    case "Clip":	 
										commandManager.executeCommand(".t NofallPlus");
		BlinkModule.setState(true);
				NoFallModule.setState(true);
								ClipModule.setState(true);
		setTimeout(function() {
		BlinkModule.setState(false);
										ClipModule.setState(false);
		commandManager.executeCommand(".t BugJump");
				commandManager.executeCommand(".t NofallPlus");
		}, 100)
		break;
					}
    };
    this.onDisable = function() {
		BlinkModule.setState(false);
    }
		this.addValues = function(values) {
					values.add(Mode);
		values.add(MotionY);
    }
	this.onPacket = function(event) {
	var packet = event.getPacket();
	if(packet instanceof S02PacketChat) {	
					if(packet.getChatComponent().getUnformattedText().contains("BugJump")){
				event.cancelEvent();
	            }
			}
	}
	this.onUpdate = function() {
        	if(mc.thePlayer.onGround || isOnGround(0.5))
				mc.thePlayer.sendQueue.addToSendQueue(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.RELEASE_USE_ITEM, BlockPos.ORIGIN, EnumFacing.DOWN));
        	if(mc.thePlayer.isBlocking() && MovementUtil.isMoving() && isOnGround(0.42) && ( Aura.curTarget == null)){
    			if(timer.delay(65)){	
    				mc.thePlayer.sendQueue.addToSendQueue(new C08PacketPlayerBlockPlacement(mc.thePlayer.inventory.getCurrentItem()));
    				timer.reset();
				}
			}
				    switch(Mode.get()) {
			    case "Ground":	 
				        	if(mc.thePlayer.onGround || isOnGround(0.5)){
										        	if(mc.gameSettings.keyBindForward.pressed == true){
												mc.gameSettings.keyBindJump.pressed = true					
													}												
							}
							break;
					}
    };
}

function onLoad() {}

function onEnable() {
   BugJumpClient = moduleManager.registerModule(BugJump)
}

function onDisable() {
    moduleManager.unregisterModule(client)
}