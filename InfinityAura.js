var scriptName = "TPAura"; // The name of your script
var scriptVersion = 0.1; // The version of your script 
var scriptAuthor = "6Sence"; // The author of your script

var TPAura = new TPAura();
var Test3Client;

Killaura = moduleManager.getModule("Killaura");
//Function by Scorpion3013
var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
	function getClosestEntity(){
	var filteredEntites = []
	for (var i in mc.theWorld.loadedEntityList){
		var entity = mc.theWorld.loadedEntityList[i]

		if (entity instanceof EntityPlayer && entity !=mc.thePlayer){
			filteredEntites.push(entity)
		}
	}
	filteredEntites.sort(function(a, b){
		var distanceA = mc.thePlayer.getDistanceToEntity(a)
		var distanceB = mc.thePlayer.getDistanceToEntity(b)

		return distanceB - distanceA;
	})
	return filteredEntites[filteredEntites.length - 1]
}
function TPAura() {
    this.getName = function() {
        return "InfiniteAura";
    };

    this.getDescription = function() {
        return "TPAura";
    };

    this.getCategory = function() {
        return "Combat";
    };
    this.onUpdate = function() {
	
	afterTick += 1;	
	var player = getClosestEntity();
	mc.thePlayer.onGround = true;
	
	if (afterTick == 1){
		
		OPosX = mc.thePlayer.posX;
		OPosY = mc.thePlayer.posY;
		OPosZ = mc.thePlayer.posZ;
		
		middleX = mc.thePlayer.posX + player.posX;
		middleY = mc.thePlayer.posY + player.posY;
		middleZ = mc.thePlayer.posZ + player.posZ;
		
		middleX2 = middleX / 2;
		middleY2 = middleY / 2;
		middleZ2 = middleZ / 2;	
		

		mc.thePlayer.setPosition(middleX2, middleY2 + 1, middleZ2);
		Killaura.setState(true);
		
		
		
	}
	
	
	if (afterTick == 2){
		
		mc.thePlayer.setPosition(player.posX, player.posY + 2, player.posZ);
		mc.thePlayer.motionY = 0;
		
		
	}
	
	if (afterTick == 6){
		mc.thePlayer.setPosition(middleX2, middleY2 + 1, middleZ2);
		
	}	
	
	if (afterTick == 7){
		
		mc.thePlayer.setPosition(OPosX, OPosY, OPosZ);
		Killaura.setState(false);	
	}
	
	if (afterTick == 12){
		afterTick = 0;
		
	}
	
	
	}
	this.onDisable = function() {
               //Activates on disabling module
	       mc.timer.timerSpeed = 1.0;
		   Killaura.setState(false);
		   
        }
 	this.onEnable = function() {
	//Activates on Enabling module

		afterTick = 0;
	
        }
 }
function onLoad() {
    // Currently this event has to be in every script even if it is not directly needed.
};

function onEnable() {
    Test3Client = moduleManager.registerModule(TPAura);
};
function onDisable() {
    moduleManager.unregisterModule(Test3Client);
};