var scriptName = "AsTimer";
var scriptVersion = 1.0;
var scriptAuthor = "As丶One";

script.import("lib/systemFunctions.js")
script.import("lib/timingFunctions.js");

var Interval;
var AsSec = 0
var AsHour = 0
var AsMin = 0

Interval = setInterval(function () {
	if(AsSec < 59) {
		AsSec = AsSec +1
	}else {
		AsSec = 0
		if(AsMin < 59) {
			AsMin = AsMin + 1
		}else {
			AsMin = 0
			AsHour = AsHour + 1
		 }
	 }
}, 1000 * 1);

function AsTimer() {
    this.getName = function () {
        return "AsTimer";
    };
    this.getDescription = function () {
        return "Timer By As丶One";
    };
    this.getCategory = function () {
        return "Fun";
    };
    this.onEnable = function () {
	   AsSec = 0
	   AsHour = 0
	   AsMin = 0
    }

    this.onUpdate = function () {
    }
    this.onRender2D = function () {
            var mcHeight = getScaledHeight();
            var mcWidth = getScaledWidth();
            mc.fontRendererObj.drawStringWithShadow(AsHour+' Hour '+AsMin+' Min '+AsSec+' Sec ', mcWidth / 2 -20, 20 , 0x0078FF);
            

    }
}


var AsTimer = new AsTimer();
var AsTimerClient;

function onEnable() {
    AsTimerClient = moduleManager.registerModule(AsTimer);
};

function onDisable() {
    moduleManager.unregisterModule(AsTimerClient);
};