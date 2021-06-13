this.onUpdate = function() {

if (mc.thePlayer.isCollidedHorizontally) {
		if (mc.thePlayer.onGround) {
			mc.thePlayer.motionY = 0.4322;
		} else {
		mc.thePlayer.motionY += 0.0122;
		}
	}
}