var scriptName = "AntiBots";
var scriptVersion = 1.0;
var scriptAuthor = "Soulplexis";

var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
/* var serverlist = Java.type("net.minecraft.server.management.ServerConfigurationManager");
  .getAllUsernames(); 
^ canot figure out how to get the tablist of players. I will figure it out soon

idk how Liquidbounce marks bots within the client, but here's my imagination how they can add it, easily: 
var RemoveBots = value.createBoolean("RemoveBots", false);
if(RemoveBots.get() && player.isBot()) {
	mc.theWorld.removeEntity(player);
}
*/
function FastPlace2() {
    var Mode = value.createList("Mode", ["Basic", "Mineplex", "Hypixel", "BrokenID"], "Basic");
    this.getName = function () {
        return "AntiBots";
    };

    this.getDescription = function () {
        return "Removes anticheat bots.";
    };

    this.getCategory = function () {
        return "World";
    };
    this.onPacket = function () {
	 for (var x in mc.theWorld.loadedEntityList) {
		var entities = mc.theWorld.loadedEntityList[x];
		if(entities != null && entities != mc.thePlayer && entities instanceof EntityPlayer) {
			switch(Mode.get()) {
				case "Basic": // Checks for dead entities and removes them, and moves entities away while they exist for under 6 seconds - not super good, but it's the best way I have found.
				if(entities.getHealth <= 0 || entities.hurtTime < 0 || entities.hurtTime > 10) {
					mc.theWorld.removeEntity(entities);
				}
				if(entities.ticksExisted <= 120) {
					entities.posY = mc.thePlayer.posY + 256;
				}
				break;
				case "Mineplex": // Checks if the player has more than no health. 
				if(entities.getHealth() > 0) {
					mc.theWorld.removeEntity(entities);
				} 
				break;
				case "Hypixel": // Removes all invisible players and does the ticksExisted check (moves bots away from you), When I figure out how to get the tablist of players I will update this mode. It should be mostly alright for Hypixel. 
				if(entities.isInvisible() || entities.getName().contains(" ")) {
					mc.theWorld.removeEntity(entities);
				}
				if(entities.ticksExisted <= 144) {
					entities.posY = mc.thePlayer.posY + 256;
				}
				break;
				case "BrokenID": // Checks for too high an entity ID or if the player has your name which is redundant, but it's ok to have it there because the config allows this behavior.
			if(entities.getEntityId() >= 1000000000 || entities.getName() == mc.thePlayer.getName()) {
				mc.theWorld.removeEntity(entities);
			}
				break;
			}
		}
		} 
    } 
    this.onDisable = function() {
       
    }
    
    this.onEnable = function() {
    }

    this.addValues = function(values) {
        values.add(Mode);
    }
}
var FastPlace2 = new FastPlace2();
var FastPlace2Client;

function onEnable() {
    FastPlace2Client = moduleManager.registerModule(FastPlace2);
};

function onDisable() {
    moduleManager.unregisterModule(FastPlace2Client);
};