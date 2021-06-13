var scriptName = "LongJump";
var scriptAuthor = "NoLegit"; 
var scriptVersion = 1.0;


function Module() {
        var Mode = value.createList("Mode", ["MineFC", "MineFCFar", "MineFCBoost"], "MineFC");
        this.addValues = function (values) {
        values.add(Mode);
    }
    this.getName = function() {
        return "LongJumps";
    }
    this.getCategory = function() {
        return "Fun";   
    }
    this.getTag = function() {
        return Mode.get();
    }
    this.getDescription = function() {
        return ".";
    }
    
    this.onPacket = function() {
        switch (Mode.get()) {
            case "MineFC":
        mc.timer.timerSpeed = 0.80;
        mc.thePlayer.speedInAir = 0.10;
            break;
            case "MineFCBoost":
        mc.timer.timerSpeed = 1.15;
        mc.thePlayer.speedInAir = 0.12;
            break;
            case "MineFCFar":
            mc.thePlayer.speedInAir = 0.15;
            break;
        }
    }
    this.onUpdate = function() {
        if(mc.thePlayer.moveForward > 0) {
            if(mc.thePlayer.onGround) {
                    mc.thePlayer.jump();
                }
            }
        }
    this.onDisable = function() {
        mc.thePlayer.speedInAir = 0.02;
        mc.timer.timerSpeed = 1.00;
    }
    this.onMotion = function() {
        
    }
    
}

var module = new Module();
var moduleClient;

function onEnable() {
    moduleClient = moduleManager.registerModule(module);
}

function onDisable() {
    moduleManager.unregisterModule(moduleClient);
}