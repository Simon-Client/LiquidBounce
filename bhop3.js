var scriptName = "BHop #3"; 
var scriptVersion = 1.0; 
var scriptAuthor = "soulplexis";

var exampleModule = new ExampleModule();
var exampleModuleClient;
var Strafe = moduleManager.getModule("Strafe");

function ExampleModule() {
    this.getName = function() {
        return "BHop3";
    };

    this.getDescription = function() {
        return "BHop speed #3 - Big TimerHop";
    };

    this.getCategory = function() {
        return "Movement";
    };

    this.onMotion = function() {
    	mc.thePlayer.jumpMovementFactor = 0.03;
    	Strafe.setState(true);
        if (mc.gameSettings.keyBindForward.isKeyDown() || mc.gameSettings.keyBindLeft.isKeyDown() || mc.gameSettings.keyBindRight.isKeyDown() || mc.gameSettings.keyBindBack.isKeyDown()) {
            mc.thePlayer.speedInAir = mc.thePlayer.speedInAir * 1.0025
            if(mc.thePlayer.speedInAir >= 0.03) {
            	mc.thePlayer.speedInAir = 0.045; 
            }
            if(mc.thePlayer.onGround == false) {
            mc.timer.timerSpeed = 1.08;
            }
            if(mc.thePlayer.onGround == true) {
            	mc.thePlayer.jump();
            	mc.timer.timerSpeed = 18
            }	
            	mc.thePlayer.setSprinting(true);
        } else {
        	mc.thePlayer.motionX = 0.0;
        	mc.thePlayer.motionZ = 0.0;
        	mc.thePlayer.speedInAir = mc.thePlayer.speedInAir - 0.00015;
        }
        if(mc.thePlayer.speedInAir < 0.02) {
        	mc.thePlayer.speedInAir = 0.02;
        } 
    }
    this.onDisable = function() {
    	mc.timer.timerSpeed = 1.0;
    	Strafe.setState(false);
    	mc.thePlayer.speedInAir = 0.02;
    }
}

function onLoad() {
};

function onEnable() {
    exampleModuleClient = moduleManager.registerModule(exampleModule);
};

function onDisable() {
    moduleManager.unregisterModule(exampleModuleClient);
};