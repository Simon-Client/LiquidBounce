var scriptName = "CleanKeepSprint";
var scriptVersion = 1.0;
var scriptAuthor = "yorik100";
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');

var cleanKeepSprint = new CleanKeepSprint();

var client;

function CleanKeepSprint() {
    var OnlyGround = value.createBoolean("OnlyGround", true);
    this.addValues = function(values) {
        values.add(OnlyGround);

    }
    this.getName = function() {
        return "CleanKeepSprint";
    };

    this.getDescription = function() {
        return "CleanKeepSprint";
    };

    this.getCategory = function() {
        return "Combat";
    };
    this.onEnable = function() {
        this.hasattackedfortnite = false;
    }
    this.onUpdate = function() {
        if (this.hasattackedfortnite) {
            mc.thePlayer.motionX = this.fortnite;
            mc.thePlayer.motionZ = this.fortnite2;
            mc.thePlayer.setSprinting(true);
            this.hasattackedfortnite = false;
        }
    }
    this.onAttack = function(event) {
        if (mc.thePlayer.isSprinting() && (mc.thePlayer.onGround || !OnlyGround.get())) {
            this.hasattackedfortnite = true;
            this.fortnite = mc.thePlayer.motionX;
            this.fortnite2 = mc.thePlayer.motionZ;
        }
    }
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(pseudoKeepSprint);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}