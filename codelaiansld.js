var scriptName = "AACVelocfix";
var scriptVersion = 1.0;
var scriptAuthor = "Fix"; 

var AACv4Velocity = new AACv4Velocity();
var Client;

function AACv4Velocity() {
    this.getName = function() {
        return "NewVelocityAACv4";
    };

    this.getDescription = function() {
        return "fix velocity";
    };

    this.getTag = function() {
        return "Gaymc";
    };
   
    this.getCategory = function() {
        return "Fun";
    };
    

     if(mc.thePlayer.hurtTime > 0 & mc.thePlayer.hurtTime <= 7) { mc.thePlayer.motionX *= 0.5 mc.thePlayer.motionZ *= 0.5 } if(mc.thePlayer.hurtTime > 0 & mc.thePlayer.hurtTime < 6) { mc.thePlayer.motionX = 0.0; mc.thePlayer.motionZ = 0.0 ;       
        }
    }
}8

function onLoad() {
     
};

function onEnable() {
    exampleModuleClient = moduleManager.registerModule(AACv4Velocity);
};

function onDisable() {
    moduleManager.unregisterModule(Client);
}
