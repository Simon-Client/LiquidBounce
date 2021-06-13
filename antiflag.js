var scriptName = "AntiFlag";
var scriptVersion = 1.1;
var scriptAuthor = "By NoLegit";

var S02PacketChat = Java.type("net.minecraft.network.play.server.S02PacketChat");
var Pattern = Java.type("java.util.regex.Pattern");
var Matcher = Java.type("java.util.regex.Matcher");

var msgs = [
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"."
];

function Module1() {
    this.getName = function() {
        return "AntiFlag";
    };
	this.getTag = function() {
		return "Slow";
	};
    this.getDescription = function() {
        return "Fake";
    };
    this.getCategory = function() {
        return "Fun";
    };
	var killer = Pattern.compile("§r§a([^§ ]*)");
	var victim = Pattern.compile("§r§c([^§ ]*)");
	var curMsg = 0;
	
	this.onPacket = function(event) {
		var packet = event.getPacket();
		if (packet instanceof S02PacketChat) {
			var msg = packet.getChatComponent().getFormattedText();
			if (msg.startsWith("§r§7[§r§e§lSkywars§r§7] ")) {
				var m0 = killer.matcher(msg), m1 = victim.matcher(msg);
				
				if (!m0.find() || !m1.find()) return;
				var a = m0.group(1), b = m1.group(1);
				if (a.equalsIgnoreCase(mc.thePlayer.getName())) {
					if (curMsg >= msgs.length - 1) curMsg = 0;
					mc.thePlayer.sendChatMessage(msgs[curMsg].replaceAll("%name%", b));
					curMsg++;
				}
			}
		}
	};
}

var modules = [
	new Module1()
];
function onEnable() {
	for (var i = 0; i < modules.length; i++) moduleManager.registerModule(modules[i]);
};
function onDisable() {
	for (var i = 0; i < modules.length; i++) moduleManager.unregisterModule(modules[i]);
};