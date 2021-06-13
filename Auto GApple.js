var scriptName = "AutoGapple";
var scriptAuthor = "By Virus";
var scriptVersion = 1.0;

var ItemAppleGold = Java.type('net.minecraft.item.ItemAppleGold');

function ExampleModule() {
    this.getName = function() {
        return "AutoGapple";
    }
    this.getDescription = function() {
        return ".";
    }
    this.getCategory = function() {
        return "Combat"; 
    }
    this.onEnable = function() {
       
    }
    this.onDisable = function() {
        
    }
    this.onUpdate = function() {
    	if (mc.thePlayer.getHeldItem().getItem() instanceof ItemAppleGold) {
    		if(mc.thePlayer.getHealth() <= 9) {
    			mc.gameSettings.keyBindUseItem.pressed = true;
    		}else{
    			mc.gameSettings.keyBindUseItem.pressed = false;

    		}

    	}
      
    }
}
var exampleModule = new ExampleModule();
var exampleModuleClient;

function onLoad() {}

function onEnable() {
    exampleModuleClient = moduleManager.registerModule(exampleModule);
}

function onDisable() {
    moduleManager.unregisterModule(exampleModuleClient);
}