var script = registerScript({
	name: "AutoReport",
	version: "1.0",
	authors: ["liulihaocai"]
}); 
var EntityPlayer = Java.type('net.minecraft.entity.player.EntityPlayer');
var reportedPlayers=[];
script.registerModule({
	name: "AutoReport",
	description: "Makes Mods Busy :D",
    category: "Fun",
    tag:" ",
	settings: {
		Mode: Setting.list({
			name: "Mode",
			default: "Hypixel",
			values: ["Hypixel","Redesky","/report"]
        }),
		mes: Setting.boolean({
			name: "Message",
			default: true
		})
	}
}, function (module) {
	module.on("enable", function () {
		reportedPlayers=[];
    })
	module.on("attack", function (event) {
        module.tag=module.settings.Mode.get();
		if(event.getTargetEntity() instanceof EntityPlayer){
            var name = event.getTargetEntity().getName();
            if(reportedPlayers.indexOf(name)>=0){
                return;
            }else{
                reportedPlayers.push(name);
            }
            switch(module.settings.Mode.get()){
                case "Hypixel":{
                    mc.thePlayer.sendChatMessage("/wdr "+name+" killaura speed fly");
                    break;
                }
                case "Redesky":{
                    mc.thePlayer.sendChatMessage("/reportar "+name);
                    break;
                }
                case "/report":{
                    mc.thePlayer.sendChatMessage("/report "+name+" killaura speed fly");
                    break;
                }
            }
            if(module.settings.mes.get()) {
                mc.thePlayer.sendChatMessage("Hi "+name+" u got reported by LiquidBounce!")
            }
            Chat.print("§6§l[AutoReport] §f§l"+name+"§a§l Reported!§f§l")
		}
    })
	module.on("update", function () {
        module.tag=module.settings.Mode.get();
    })
})