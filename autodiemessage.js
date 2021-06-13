var scriptName = "AutodieMessage";
var scriptVersion = 1.2;
var scriptAuthor = "MCIronRealYT edited by PhuPhamChannel";

var S02PacketChat = Java.type("net.minecraft.network.play.server.S02PacketChat");
var Pattern = Java.type("java.util.regex.Pattern");
var Matcher = Java.type("java.util.regex.Matcher");

var msgs = [
	"Hey, %name% ur mom said to me you failed an IQ test yesterday.",
	"The f*ck, why r u stupid like a dog, %name%.",
	"Hey %name%. You r so trash.",
	"狗皮屑 %name%.",
	"Sorry %name%, I dont want to fight with u but hit me and autodie said u need to die.",
	"Dont blame me, %name%. I have a good LiquidBounce config.",
	"R U hate me, %name%, buy autodie premium on PhuPham#2857.",
	"Hey %name%, dont forget to sub for Phu Pham Channel",
	"你只是个垃圾 %name%.",
	"where did u buy ur config, its so trash.",
	"Ur are 100% chicken, %name%, u can better if u use Autodie.",
	"Ты просто хлам %name% да",
	"%name% Μην πικάντικη, απλά θα σε σκοτώσω για διασκέδαση."          
];

function Module1() {
    this.getName = function() {
        return "AutodieMessage";
    };
	this.getTag = function() {
		return "CàKhịa";
	};
    this.getDescription = function() {
        return "Cà Khịa + Quảng Cáo";
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
