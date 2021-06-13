/// api_version=2
var script = registerScript({
    name: "AntibotYAVAXYEE",
    version: "2.0",
    authors: ["Anonzme"]
});

var EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer");

var currentEntity;
var playerList;
var index;
var next;

var oldPosX;
var oldPosZ;

var notAlwaysInRaduis;

function isBot(entity, speed) {
    return entity != mc.thePlayer && 
    !notAlwaysInRaduis.containsKey(entity) &&
    speed > 8.0 && 
    mc.thePlayer.getDistanceToEntity(entity) <= 5.0 &&
    within(entity.posY, mc.thePlayer.posY - 1.5, mc.thePlayer.posY + 1.5);
}

function within(n, mi, ma) {
    return n <= ma && n >= mi;
}

script.registerModule({
    name: "AntibotYAVAXYEE",
    description: "Remove the bots made by Matrix AntiCheat.",
    category: "Misc",
}, function(module) {
    module.on("enable", function() {
        next = false;
        index = oldPosX = oldPosZ = 0;
    });

    module.on("update", function() {
        playerList = [];
        var j = 0;
        for (var i in mc.theWorld.getLoadedEntityList())
            if (mc.theWorld.getLoadedEntityList()[i] instanceof EntityPlayer)
                playerList[j++] = mc.theWorld.getLoadedEntityList()[i];
        
        if (index >= playerList.length) {
            index = 0;
            return;
        }
        
        if (!next) {
            currentEntity = playerList[index];
            
            oldPosX = currentEntity.posX;
            oldPosZ = currentEntity.posZ;
            
            next = true;
            
            return;
        }
        
        var xDiff = oldPosX - currentEntity.posX;
        var zDiff = oldPosZ - currentEntity.posZ;

        var speed = Math.sqrt(xDiff * xDiff + zDiff * zDiff) * 10;
        
        if (isBot(currentEntity, speed)) {
            mc.theWorld.removeEntity(currentEntity);
            Chat.print("§8[§9§lAntibotYAVAXYEE§8] §3Remove §a" + currentEntity.getName() + "§3.");
        }
        
        ++index;

        next = false;
    });
});