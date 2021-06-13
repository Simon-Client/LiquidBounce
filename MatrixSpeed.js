/// api_version=2
var script = registerScript({
    name: "Matrix Speed Script",
    version: "1.0",
    authors: ["FaaatPotato"]
});

var thePlayer = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils");

function generateRandomSexNumbers(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

Math.rad = function(deg) {
    return deg * Math.PI / 180;
}

script.registerModule({
    name: "SexSpeedz",
    description: "makes you fast af",
    category: "Fun",
    settings: {}

}, function (module) {
    module.on("enable", function () {

    });
    module.on("disable", function () {
    mc.timer.timerSpeed = 1;
    mc.thePlayer.speedInAir = 0.02;
    });
    module.on("update", function () {

    if (mc.thePlayer.onGround && thePlayer.isMoving()) {
    mc.thePlayer.speedInAir = 0.02;	
    mc.timer.timerSpeed = 0.65;		
    mc.gameSettings.keyBindJump.pressed = true;
    } else {
    mc.gameSettings.keyBindJump.pressed = false;
    }
    	
    if (mc.thePlayer.fallDistance < 0.1) {
    mc.timer.timerSpeed = 1.8;
    }
    if (mc.thePlayer.fallDistance > 0.2) {
    mc.timer.timerSpeed = 0.42;
    }
    if (mc.thePlayer.fallDistance > 0.6) {
    mc.timer.timerSpeed = 1.05;	
    mc.thePlayer.speedInAir = 0.02019
    }
    });
});