var script = registerScript({
	name: "AutoREG",
	version: "1.1",
	authors: ["liulihaocai"]
}); 
var Timer = Java.type("java.util.Timer");
var S02 = Java.type('net.minecraft.network.play.server.S02PacketChat'),S45 = Java.type('net.minecraft.network.play.server.S45PacketTitle')
function setTimeout(func, milliseconds) {
    var timer = new Timer("setTimeout", true);
    timer.schedule(function() { 
        func();
    }, milliseconds);
    return timer;
}
script.registerModule({
	name: "AutoREG",
	description: "Register/Login with one key",
    category: "Fun",
	settings: {
		RegisterMessage: Setting.text({
			name: "RegisterMode",
			default: "/register"
		}),
		LoginMessage: Setting.text({
			name: "LoginMode",
			default: "/login"
		}),
		Password: Setting.text({
			name: "Password",
			default: "23333333"
		}),
		message: Setting.boolean({
			name: "MessageListen",
			default: true
		}),
		title: Setting.boolean({
			name: "TitleListen",
			default: true
		})
	}
}, function (module) {
	var cd=0;
	function reg(message){
		if((t()-cd)<1000){
			return;
		}
		cd=t();
		if(message.indexOf(module.settings.LoginMessage.get())>-1){
			mc.thePlayer.sendChatMessage(module.settings.LoginMessage.get()+" "+module.settings.Password.get());
		}
		if(message.indexOf(module.settings.RegisterMessage.get())>-1){
			mc.thePlayer.sendChatMessage(module.settings.RegisterMessage.get()+" "+module.settings.Password.get()+" "+module.settings.Password.get());
		}
	}
	function t() {
		return new Date().getTime();
	}
	module.on("packet",function(event){
		var packet = event.packet;
		if(module.settings.message.get()&&(packet instanceof S02)){
			reg(packet.getChatComponent().getUnformattedText());
		}
		if(module.settings.title.get()&&(packet instanceof S45)){
			reg(packet.getMessage().getUnformattedText())
		}
	})
})