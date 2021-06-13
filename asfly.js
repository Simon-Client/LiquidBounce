var script = registerScript({
    name: "AsFly",
    version: "2.0",
    authors: ["As丶One"]
});
var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce")
var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils")
var classProvider = LiquidBounce.INSTANCE.getWrapper().getClassProvider();
var packets = []
var doAsFly = false
var stage = 0
var maxStage = 5
var jump = false
var timer = 0
var motionY = Setting.float({
    name: "MotionY",
    default: 0.5,
    min: 0.42,
    max: 6
})
var motionXZ = Setting.float({
    name: "MotionXZ",
    default: 1.0,
    min: 0,
    max: 10
})
var Bob = Setting.float({
    name: "Bob",
    default: 0.5,
    min: 0,
    max: 2
})
var delay = Setting.integer({
    name: "Delay",
    default: 2,
    min: 0,
    max: 10
})
var Timer = Setting.integer({
    name: "Timer",
    default: 1.0,
    min: 0.1,
    max: 2
})
var y = 0
function move() {
	mc.thePlayer.cameraYaw = Bob.get()
	mc.timer.timerSpeed = Timer.get()
    if (mc.thePlayer.posY<=y) {
        mc.thePlayer.motionY = motionY.get()
    } else {
        var dir = mc.thePlayer.rotationYaw / 180 * Math.PI
        if (mc.thePlayer.motionY < 0) mc.thePlayer.motionY = -0.05
        mc.thePlayer.motionX = -Math.sin(dir) * motionXZ.get()
        mc.thePlayer.motionZ = Math.cos(dir) * motionXZ.get()
    }
}
script.registerModule({
    name: "AsFly",
    description: "AsFly By As丶One",
    category: "Fun",
    settings: {
        motionY: motionY,
        motionXZ: motionXZ,
        delay: delay,
        Timer: Timer,
	Bob: Bob
    }
}, function (module) {
    module.on("enable", function () {
        y = mc.thePlayer.posY
        timer = 999
    });
    module.on("disable", function () {
        mc.timer.timerSpeed = 1;
        packets.forEach(function () {
            mc.netHandler.networkManager.sendPacket(packets.shift())
        })
    });
    module.on("update", function () {
        if(!doAsFly)timer++
        if(timer>delay.get()){
            timer = 0
            doAsFly = true
            stage = 0
            move()
        }
        if (stage >= 1) {
            doAsFly = false
            packets.forEach(function () {
                mc.netHandler.networkManager.sendPacket(packets.shift())
            })
        }
    });
    module.on("packet", function (event) {
        if (!doAsFly) return
        var packet = event.packet
        if (classProvider.isCPacketPlayer(packet)) event.cancelEvent()
        if (classProvider.isCPacketPlayerPosition(packet) || classProvider.isCPacketPlayerPosLook(packet) ||
            classProvider.isCPacketPlayerBlockPlacement(packet) ||
            classProvider.isCPacketAnimation(packet) ||
            classProvider.isCPacketEntityAction(packet) || classProvider.isCPacketUseEntity(packet)) {
            event.cancelEvent()
            packets.push(packet)
            stage++
        }
    });
});
 0