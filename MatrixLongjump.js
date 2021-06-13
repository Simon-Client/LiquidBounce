Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
}
function isMoving() {
    return (mc.thePlayer.movementInput.moveForward != 0 || mc.thePlayer.movementInput.moveStrafe != 0) ? 1 : 0;
}
var ticks = 0;
var script = registerScript({
    name: 'MatrixLong',
    version: '0.0.0',
    authors: ['Shurpe']
});
script.registerModule({
    name: 'MatrixLong',
    description: '',
    category: 'Fun'

}, function (module) {
    module.on('disable', function () {
        mc.timer.timerSpeed = 1, ticks = 0, mc.thePlayer.motionX = 0, mc.thePlayer.motionZ = 0;
    });
    module.on('update', function () {
        if (!mc.thePlayer.isInWater() && !mc.thePlayer.isInLava() && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb) {
            mc.timer.timerSpeed = 0.2;
            ticks++;
            if (mc.thePlayer.onGround) {
                wasOnGround = true;
            }
            if (!isMoving()) {
                if (ticks == 1 && wasOnGround) {
                    yaw = Math.radians(mc.thePlayer.rotationYaw);
                    mc.thePlayer.motionX = 6 * -Math.sin(yaw);
                    mc.thePlayer.motionZ = 6 * Math.cos(yaw);
                    mc.thePlayer.jump();
                }
                if (ticks == 2 && wasOnGround) {
                    yaw = Math.radians(mc.thePlayer.rotationYaw);
                    mc.thePlayer.motionX = 5 * -Math.sin(yaw);
                    mc.thePlayer.motionZ = 5 * Math.cos(yaw);
                    mc.thePlayer.jump();
                    wasOnGround = false;
                }
            } else {
                module.setState(false);
            }
            if ((mc.thePlayer.onGround || mc.thePlayer.isCollidedHorizontally) && ticks > 2) {
                module.setState(false);
            }
        } else {
            module.setState(false);
        }
    });
});