var scriptName = "AutoGapple";
var scriptAuthor = "By Virus";
var scriptVersion = 1.0;

var killauraModule = moduleManager.getModule("Killaura");
var Potion = Java.type('net.minecraft.potion.Potion');
var Item = Java.type('net.minecraft.item.Item');

function ExampleModule() {
  var Health = value.createInteger("Health", 0.5, 0.5, 20);
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
               if (mc.thePlayer.getHealth() <= Health.get()) {
                  if (!mc.thePlayer.isPotionActive(Potion.regeneration)) { 
                       for (var n = 0; n <= 8; n++) {
			if (mc.thePlayer.inventoryContainer.getSlot(n+36).getStack() ? Item.getIdFromItem(mc.thePlayer.inventoryContainer.getSlot(n+36).getStack().getItem()) == 322 : false) {
                                mc.thePlayer.inventory.currentItem = n;
    			        mc.gameSettings.keyBindUseItem.pressed = true;
                        }
                        }
                        }
                        }
                        if (mc.thePlayer.isPotionActive(Potion.regeneration)) { 
                         mc.thePlayer.inventory.currentItem = 0;
                         killauraModule.setState(true)
                        }
                        if (mc.thePlayer.isUsingItem() == true) {
    		        killauraModule.setState(true)
    			}
                        }
                        this.addValues = function(values) {
                           values.add(Health);
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