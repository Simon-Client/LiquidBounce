var scriptName = "AACv4Velocity";
var scriptVersion = 1.0;
var scriptAuthor = "VisionFX"; 

var AACv4Velocity = new AACv4Velocity();
var Client;

function AACv4Velocity() {
    this.getName = function() {
        return "AACv4Velocity";
    };

    this.getDescription = function() {
        return "weird velocity";
    };

    this.getTag = function() {
        return "lul";
    };
   
    this.getCategory = function() {
        return "Misc";
    };
    
    this.onUpdate = function() { 
        if(mc.thePlayer.hurtTime > 0 && mc.thePlayer.hurtTime <= 6) {
           mc.thePlayer.motionX *= 0.5;
           mc.thePlayer.motionZ *= 0.5;
             
        }
    }
}

function onLoad() {
     
};

function onEnable() {
    exampleModuleClient = moduleManager.registerModule(AACv4Velocity);
};

function onDisable() {
    moduleManager.unregisterModule(Client);
};