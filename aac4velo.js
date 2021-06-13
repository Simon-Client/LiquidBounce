var scriptName = "AntiKnockback AAC"; 
var scriptVersion = 1.0; 
var scriptAuthor = "soulplexis";
var velocity = moduleManager.getModule("Velocity");

var exampleModule = new ExampleModule();
var exampleModuleClient;

function ExampleModule() {
	var ticks = 0;
    this.getName = function() {
        return "AACVelocity2";
    };

    this.getDescription = function() {
        return "AAC Velocity remake (spams chat)";
    };

    this.getCategory = function() {
        return "Combat";
    };
	this.onEnable = function() {
		commandManager.executeCommand(".velocity mode Simple");
		commandManager.executeCommand(".velocity horizontal 0.0");
		commandManager.executeCommand(".velocity vertical 0.0");
	};

	this.onUpdate = function() {
		if (mc.thePlayer.onGround == true); {
			ticks = 2;
			velocity.setState(true);
		} if(mc.thePlayer.onGround == false) {
			ticks = 4;
			velocity.setState(true);
		} if(mc.thePlayer.onGround == false && mc.gameSettings.keyBindJump.isKeyDown()) {
			ticks = 5;
		} 
		if(ticks == 2) {
			commandManager.executeCommand(".velocity mode AACPush");
			ticks = 0;
		} if(ticks == 4) {
			commandManager.executeCommand(".velocity mode Simple");
			ticks = 0;
		} if(ticks == 5) {
			commandManager.executeCommand(".velocity mode AAC");
			ticks = 0;
		}
	}
    this.onDisable = function() {
		velocity.setState(false);
    }
}

function onLoad() {
};

function onEnable() {
    exampleModuleClient = moduleManager.registerModule(exampleModule);
};

function onDisable() {
    moduleManager.unregisterModule(exampleModuleClient);
};