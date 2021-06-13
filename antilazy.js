var scriptName = "AntiLazy"; 
var scriptVersion = 1.0; 
var scriptAuthor = "soulplexis";

var antiLazy = new AntiLazy();
var antiLazyClient;

function AntiLazy() {
	
    this.getName = function() {
        return "AntiLazy";
    };

    this.getDescription = function() {
        return "Reminds Marco to not be lazy.";
    };

    this.getCategory = function() {
        return "Movement";
    };

    this.onUpdate = function() {
		chat.print("§4§lLiquidBounce needs updated!");
		chat.print("§6§lLiquidBounce needs updated!");
		chat.print("§e§lLiquidBounce needs updated!");
		chat.print("§b§lLiquidBounce needs updated!");
		chat.print("§a§lLiquidBounce needs updated!");
		chat.print("§9§lLiquidBounce needs updated!");
		chat.print("§d§lLiquidBounce needs updated!");
	}
	this.onDisable = function() {
	}
}

function onLoad() {
};

function onEnable() {
    antiLazyClient = moduleManager.registerModule(antiLazy);
};

function onDisable() {
    moduleManager.unregisterModule(antiLazyClient);
};