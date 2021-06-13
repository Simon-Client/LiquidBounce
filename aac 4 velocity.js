var hurt = false
var velocityTimer = MSTimer()
module.on("update", function () {
    if (mc.thePlayer.isInWater || mc.thePlayer.isInLava || mc.thePlayer.isInWeb){
        return
	}
	if (!mc.thePlayer.onGround) {
        if (hurt) {
            mc.thePlayer.speedInAir = 0.02f
            mc.thePlayer.motionX *= 0.6
            mc.thePlayer.motionZ *= 0.6
        }
    } else if (velocityTimer.hasTimePassed(80L)) {
        hurt = false
        mc.thePlayer.speedInAir = 0.02f
    }
});
module.on("packet", function (event) {
    var packet = event.packet
	if (classProvider.isSPacketEntityVelocity(packet)) {
		if (mc.thePlayer == null || (mc.theWorld?.getEntityByID(packet.entityID) ?: return) != mc.thePlayer)return
		velocityTimer.reset()
		hurt = true
	}
});