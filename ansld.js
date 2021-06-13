var scriptName = "AACv4Velocity";
var scriptVersion = 1.0;
var scriptAuthor = "VisionFX"; 

var AACv4Velocity = new AACv4Velocity();
var Client;

function AACv4Velocity() {
    this.getName = function() {
        return "NewVelocity";
    };

    this.getDescription = function() {
        return "weird velocity";
    };

    this.getTag = function() {
        return "AACv4";
    };
   
    this.getCategory = function() {
        return "Fun";
    };
    
    this.onUpdate = function() { 
        if(mc.thePlayer.hurtTime > 0 && mc.thePlayer.hurtTime <= 6) {
           mc.thePlayer.motionX *= 0.6;
           mc.thePlayer.motionZ *= 0.6;
             
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
}