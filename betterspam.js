var scriptName = "BetterSpammer";
var scriptVersion = 1.0;
var scriptAuthor = "GKing";
script.import('lib/timingFunctions.js');
script.import('lib/minecraftUtils.js');
script.import('lib/glFunctions.js');
script.import('lib/systemFunctions.js');
var Time = 0;
var RestTime1 = 0;
var say = true;
var ticks = 0;
var flag = false;
var Rest = false;

function BetterSpammer() {
	var Tick = value.createInteger("Tick", 10, 10, 1000);
    var AutoRest = value.createBoolean("AutoRest", false);
	var RestTime = value.createInteger("RestTime", 10, 10, 100);
	var RestMax = value.createInteger("RestMax", 10, 10, 100);
    var Message = value.createText("Message", "Buy SpaceKing at 3528872365 QQ");
	
	this.getName = function() {
		return 'BetterSpammer'
	};
	this.getCategory = function() {
		return 'Fun'
	};
	this.getDescription = function() {
		return 'BetterSpammer'
	};
    this.getTag = function() {
        return "" + ticks.toString();
	};
	this.onEnable = function() {

	};
	this.onPacket = function(event) {
	var packet = event.getPacket();
	
    };
	this.onUpdate = function() {
			if(say == true && flag == false && Rest == false){
			mc.thePlayer.sendChatMessage(Message.get())	
											flag = true;
											say = false;
						if(AutoRest.get() == true) {
                           RestTime1 = RestTime1 + 1;
						}							
		}
			if(flag == true && say == false && ticks >= Tick.get() && Rest == false){
											flag = false;
											say = true;
											ticks = 0;
		}
		if (flag == true && Rest == false) {
			ticks = ticks + 1;
		}
	if(AutoRest.get() == true) {
				if (RestTime1 >= RestMax.get()) {
					Rest = true;
				}
						if (Rest == true) {	
                   			RestTime1 = RestTime1 + 1;
							ticks = 0;
						}	
		if (RestTime1 >= RestTime.get()) {
			Rest = false;
			RestTime1 = 0;
		}						
	}
	};
	this.addValues = function(values) {
		values.add(Tick);
		values.add(AutoRest);
		values.add(RestTime);
		values.add(RestMax);
		values.add(Message);
	}
}
var BetterSpammerModule = new BetterSpammer();
var BetterSpammerModuleClient;

function onLoad() {}

function onEnable() {
    BetterSpammerModuleClient = moduleManager.registerModule(BetterSpammerModule);
}

function onDisable() {
    moduleManager.unregisterModule(BetterSpammerModuleClient);
}