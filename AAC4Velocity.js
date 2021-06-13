var script = registerScript({
    name: "AAC4Velocity",
    version: "2.0",
    authors: ["AquaVit"]
});

var S06PacketUpdateHealth = Java.type('net.minecraft.network.play.server.S06PacketUpdateHealth')
var S12PacketEntityVelocity = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity')
var S27PacketExplosion = Java.type('net.minecraft.network.play.server.S27PacketExplosion')
var MathHelper = Java.type("net.minecraft.util.MathHelper")
var MSTimer = Java.type("net.ccbluex.liquidbounce.utils.timer.MSTimer")
var timer = new MSTimer()
var hurt = false

script.registerModule({
    name: "AAC4Velocity",
    description: ":/",
    category: "Combat",
    tag: ">3",
    settings: {
		mode: Setting.list({
            name: "Mode",
            values: ["AAC4"],
            default: "AAC4"
        })
    }
}, function (module) {
	module.on("update", function () {
		if (module.settings.mode.get() == "AAC4"){
			if (!mc.thePlayer.onGround) {
				if (mc.thePlayer.hurtTime != 0){
                if (hurt) {
					mc.gameSettings.keyBindForward.isKeyDown() == true
                    mc.thePlayer.speedInAir = 0.02
                    mc.thePlayer.motionX *= 0.6
                    mc.thePlayer.motionZ *= 0.6
                }
			}
			} else{
			if (timer.hasTimePassed(80)) {
                hurt = false
                mc.thePlayer.speedInAir = 0.02
				}
			}
		}
	});
    module.on("packet", function (event) {
        var packet = event.getPacket()
		if (packet instanceof S12PacketEntityVelocity) {
			if (mc.thePlayer == null){
				return
			}
            timer.reset()
			hurt = true
		}
		if (packet instanceof S06PacketUpdateHealth) {
            event.cancelEvent()
        }

        if (packet instanceof S27PacketExplosion) {
            event.cancelEvent()
        }
    });
});