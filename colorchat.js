var scriptName = "ColorChat";
var scriptAuthor = "Senk Ju";
var scriptVersion = 1.0;

var colorIndex = 0;

function printMessage(message) {
    var availableColors = ["§4", "§c", "§6", "§e", "§a", "§b", "§1", "§5"];

    var color = availableColors[colorIndex];
    
    colorIndex += 1;
    if (colorIndex >= availableColors.length) {
        colorIndex = 0;
    }

    chat.print(color + message + "§r");

}

function ColorChatModule() {

    var ticks = 0;

    this.getName = function() {
        return "ColorChat";
    }

    this.getCategory = function() {
        return "Misc";   
    }

    this.getDescription = function() {
        return "Chooses a random color for every chat message.";
    }

    this.onUpdate = function() {
        ticks++;

        if (ticks >= 1) {
            ticks = 0;

            printMessage("§k~~~~~~~~~~~~~~~~~~~~");
        }
    }
}

var colorChatModule = new ColorChatModule();
var colorChatModuleClient;

function onEnable() {
    colorChatModuleClient = moduleManager.registerModule(colorChatModule);
}

function onDisable() {
    moduleManager.unregisterModule(colorChatModuleClient);
}