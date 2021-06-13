var scriptName = "AntiBanPackets";
var scriptVersion = 1.0;
var scriptAuthor = "Prah"; 
var packetMotior = new PacketMotior();
var Client;
var C03PacketPlayer = Java.type('net.minecraft.network.play.client.C03PacketPlayer');

function PacketMotior() {
	var ticks = 0;
	var packets = 0;
    this.getName = function() {
        return "AntiBanPackets";
    };

    this.getDescription = function() {
        return "Alerta cada vez que envies muchos packets.";
    };
   
    this.getCategory = function() {
        return "Misc";
    };
	
	this.getTag = function() {
		if(ticks == 20) {
			return "PPS:" + tag;
		} else {
			return "PPS:" + tag;
		}
	};
    var tag = 0;
    this.onUpdate = function() {
		ticks+=1;
		if(ticks == 20) {
			tag = packets;
			if(packets > 60) {
				chat.print("Packets: " + tag)
			}
			packets = 0;
			ticks = 0;
		}
	}
	
	this.onPacket = function(event) {
		if(event.getPacket() instanceof C03PacketPlayer && !moduleManager.getModule("Fly").getState()) {
			++packets;
		}
	}
	
	this.onDisable = function() {
		ticks = 0;
		packets = 0;
	}
}

function onLoad() {
     
};

function onEnable() {
    Client = moduleManager.registerModule(packetMotior);
};

function onDisable() {
    moduleManager.unregisterModule(Client);
};