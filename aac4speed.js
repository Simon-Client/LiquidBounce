var scriptName = "AACHop4"; // The name of your script
var scriptVersion = 2.0; // The version of your script 
var scriptAuthor = "VisionFX"; // The author of your script (eg. your username)

var AAC4hop = new AAC4hop();
var Client;

function AAC4hop() {
    this.getName = function() {
        return "AAC4Hop";
    };

    this.getDescription = function() {
        return "Test Speed";
    };

    this.getCategory = function() {
        return "Misc";
    };
   
    this.onUpdate = function() {
        if(mc.thePlayer.moveForward > 0) {
            if(mc.thePlayer.onGround) {
	    			mc.thePlayer.jump();
                                mc.timer.timerSpeed = 1.6105;
            		        mc.thePlayer.motionX *= 1.0708;
	    			mc.thePlayer.motionZ *= 1.0708;
            }else if(mc.thePlayer.fallDistance > 0){
	    			mc.timer.timerSpeed =0.6;
            }				
	}    		
            		
	
      	
    }
}

function onLoad() {
    //i recommend you should setting timer 1.0
};

function onEnable() {
    exampleModuleClient = moduleManager.registerModule(AAC4hop);
};

function onDisable() {
    moduleManager.unregisterModule(Client);
    
};