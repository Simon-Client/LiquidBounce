script.import("script.base")
var scriptName = "AntiSpammer";
var scriptAuthor = "As丶One";
var scriptVersion = 2.0;
var KeyWord
var keyWords
var counter = 0
var S02PacketChat = Java.type('net.minecraft.network.play.server.S02PacketChat')
var defaultKeyWords = "点击右侧链接|t.cn|.xyz|smg520|加q|q群|企鹅|企鹅群|要开挂的|免费外挂|点击链接|anfaka.com|jq.qq.com|不空刀|加群|稳定奔放|免费获取|杀戮不空刀|内部|包教包会|外部群|小卖部|扣群|欢迎加入|群文件|群号|maikama|扣扣|花雨庭配置|交流群|flame|开挂加群|工具箱|购买|小号机|liquidbounce|一件套|吊打低配|脑瘫配置|不跑路|暴打看门狗|稳定不狗|粉丝群|rabbit"

function reset() {
	keyWords = keyWord.get().split("|")
}

function getString(args, length) {
	if (args.length < length) return null
	var str = ""
	var i = Math.floor(length)
	while (i <= args.length) {
		str = str + (i == length ? "" : " ") + args[i - 1].toString()
		i++
	}
	return str
}

createModule({
	name: "AntiSpammer",
	values: [
		keyWord = value.createText("KeyWord", defaultKeyWords)
	],
	tag:function(){
		return counter.toString()
	},
	onEnable: function () {
		reset()
	},
	onPacket: function (event) {
		var packet = event.getPacket()
		if (packet instanceof S02PacketChat) {
			var message = packet.getChatComponent().getUnformattedText().toLowerCase()
			if (message.match(mc.thePlayer.getName().toLowerCase())) return
			keyWords.forEach(function (ele) {
				if (message.match(ele)) {
					counter++
					event.cancelEvent()
				}
			});
		}
	}
})
reset()
createCommand({
	commands: ["KeyWords"],
	onExecute: function (args) {
		if (args.length != 1) {
			switch (args[1].toLowerCase()) {
				case "add":
					if (args.length < 3) {
						chat.print("§8[§9§lAntiSpammer§8] §3Syntax: §7.KeyWords add <Value>")
						return
					}
					var str = getString(args, 3)
					keyWord.get().split("|").indexOf(str.toLowerCase()) == -1 && keyWord.set(keyWord.get() + (keyWord.get() ? "|" : "") + str.toLowerCase())
					chat.print("§8[§9§lAntiSpammer§8] §3Added keyword §a§l" + str + "§3 to AntiSpammer")
					reset()
					break;
				case "remove":
					if (args.length < 3) {
						chat.print("§8[§9§lAntiSpammer§8] §3Syntax: §7.KeyWords remove <Value>")
						return
					}
					var str = getString(args, 3)
					if (keyWord.get().split("|").indexOf(str.toLowerCase()) != -1) {
						chat.print("§8[§9§lAntiSpammer§8] §3Removed keyword §a§l" + str + "§3 from AntiSpammer")
						keyWord.set(keyWord.get().replace("|" + str, "").replace(str + "|", ""))
						reset()
					} else {
						chat.print("§8[§9§lAntiSpammer§8] §3Keyword §a§l" + str + "§3 no found")
					}
					break;
				case "list":
					chat.print("§8[§9§lAntiSpammer§8] §3Keyword List >>")
					keyWords.forEach(function (ele) {
						chat.print("§8[§9§lKeyword§8] > §3" + ele)
					});
					break;
				case "reset":
					chat.print("§8[§9§lAntiSpammer§8] §3Reset keywords §a§l" + "§3 of AntiSpammer")
					keyWord.set(defaultKeyWords)
					reset()
					break;
				case "clear":
					chat.print("§8[§9§lAntiSpammer§8] §3Cleared keywords §a§l" + "§3 of AntiSpammer")
					keyWord.set("")
					reset()
					break;
				default:
					chat.print("§8[§9§lAntiSpammer§8] §3Syntax: §7.KeyWords <add/remove/list/reset/clear>")
					break;
			}
		} else {
			chat.print("§8[§9§lAntiSpammer§8] §3Syntax: §7.KeyWords <add/remove/list/reset/clear>")
		}
	}
})