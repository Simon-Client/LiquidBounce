var script = registerScript({
	name: "AutoREG",
	version: "1.7",
	authors: ["Sherry"]
}); 
var Timer = Java.type("java.util.Timer");
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
		RegisterMode: Setting.list({
			name: "RegisterMode",
			default: "/reg",
			values: ["/reg","/register",".reg"]
		}),
		LoginMode: Setting.list({
			name: "LoginMode",
			default: "/l",
			values: ["/l","/login",".login"]
		}),
		Password: Setting.list({
			name: "Password",
			default: "233333",
			values: ["233333","23333333","12345678"]
		}),
		reg: Setting.boolean({
			name: "Register",
			default: true
		}),
		log: Setting.boolean({
			name: "Login",
			default: false
		})
	}
}, function (module) {
	module.on("enable", function () {
        if(module.settings.log.get() == true) {
            mc.thePlayer.sendChatMessage(module.settings.LoginMode.get()+" "+module.settings.Password.get());
		}
        if(module.settings.reg.get() == true) {
            mc.thePlayer.sendChatMessage(module.settings.RegisterMode.get()+" "+module.settings.Password.get()+" "+module.settings.Password.get());
		}
        Chat.print("DONE.")
        setTimeout(function() {
            commandManager.executeCommand(".t AutoREG");
        }, 100)
    })
})