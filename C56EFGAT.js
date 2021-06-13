var scriptName = "§eĐã được bảo vệ bởi team Light Z"; 
var scriptVersion = 1.0; 
var scriptAuthor = "đã bị bảo vệ bởi Light Z";

var blockHit = new BlockHit();
var blockHitClient;

function BlockHit() {
	var ticks = 1;
    this.getName = function() {
        return "OldAnimation-1.7";
    };

    this.getDescription = function() {
        return "Old Autoblock 1.7";
    };

    this.getCategory = function() {
        return "Render";
    };

    this.onUpdate = function() {
    	ticks++
    	if(ticks == 20 || ticks == 25 || ticks == 30 || ticks == 35 || ticks == 40 || ticks == 45 || ticks == 50 || ticks == 20 || ticks == 30 || ticks == 40) {
		if (mc.thePlayer.isUsingItem() == true) {
	    mc.thePlayer.UsingItem();
    }
  } if(ticks == 20) {
	  ticks = 1;
  }
}
}

function onLoad() {
};

function onEnable() {
    blockHitClient = moduleManager.registerModule(blockHit);
};

function onDisable() {
    moduleManager.unregisterModule(blockHitClient);
};