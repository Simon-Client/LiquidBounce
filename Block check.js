function isAboveVoid() {
    for (var i = ~~mc.thePlayer.posY; i >= 0; i--) {
        if (!mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX, i, mc.thePlayer.posZ))) {
            return false
        }
    }
    return true
}

