var script = registerScript({
    name: "AAC4Script",
    version: "1.2.0",
    authors: ["TheMossYT","liulihaocai"]
});

var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils");
var C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");

function strafe(speed) {
    var a = mc.thePlayer.rotationYaw * 0.017453292;
    var l = mc.thePlayer.rotationYaw * 0.017453292 - Math.PI * 1.5;
    var r = mc.thePlayer.rotationYaw * 0.017453292 + Math.PI * 1.5;
    var rf = mc.thePlayer.rotationYaw * 0.017453292 + Math.PI * 0.19;
    var lf = mc.thePlayer.rotationYaw * 0.017453292 + Math.PI * -0.19;
    var lb = mc.thePlayer.rotationYaw * 0.017453292 - Math.PI * 0.76;
    var rb = mc.thePlayer.rotationYaw * 0.017453292 - Math.PI * -0.76;
    if (mc.gameSettings.keyBindForward.pressed) {
        if (mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindRight.pressed) {
            mc.thePlayer.motionX -= (Math.sin(lf) * speed);
            mc.thePlayer.motionZ += (Math.cos(lf) * speed);
        } else if (mc.gameSettings.keyBindRight.pressed && !mc.gameSettings.keyBindLeft.pressed) {
            mc.thePlayer.motionX -= (Math.sin(rf) * speed);
            mc.thePlayer.motionZ += (Math.cos(rf) * speed);
        } else {
            mc.thePlayer.motionX -= (Math.sin(a) * speed);
            mc.thePlayer.motionZ += (Math.cos(a) * speed);
        }
    } else if (mc.gameSettings.keyBindBack.pressed) {
        if (mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindRight.pressed) {
            mc.thePlayer.motionX -= (Math.sin(lb) * speed);
            mc.thePlayer.motionZ += (Math.cos(lb) * speed);
        } else if (mc.gameSettings.keyBindRight.pressed && !mc.gameSettings.keyBindLeft.pressed) {
            mc.thePlayer.motionX -= (Math.sin(rb) * speed);
            mc.thePlayer.motionZ += (Math.cos(rb) * speed);
        } else {
            mc.thePlayer.motionX += (Math.sin(a) * speed);
            mc.thePlayer.motionZ -= (Math.cos(a) * speed);
        }
    } else if (mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindRight.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindBack.pressed) {
        mc.thePlayer.motionX += (Math.sin(l) * speed);
        mc.thePlayer.motionZ -= (Math.cos(l) * speed);
    } else if (mc.gameSettings.keyBindRight.pressed && !mc.gameSettings.keyBindLeft.pressed && !mc.gameSettings.keyBindForward.pressed && !mc.gameSettings.keyBindBack.pressed) {
        mc.thePlayer.motionX += (Math.sin(r) * speed);
        mc.thePlayer.motionZ -= (Math.cos(r) * speed);
    }
}

var boosted = false;

script.registerModule({
    name: "AAC4Speed",
    category: "Fun",
    description: "AAC4 Speed",
    settings: {
        speedMode: Setting.list({
            name: "Mode",
            default: "Fast",
            values: ["Long", "Fast"]
        })
    }
}, function (module) {
    module.on("update", function () {
        module.tag = module.settings.speedMode.get();
        switch (module.settings.speedMode.get()) {
            case "Long":
                if (!MovementUtils.isMoving())
                    return;
                if (mc.thePlayer.onGround) {
                    mc.gameSettings.keyBindJump.pressed = false;
                    mc.thePlayer.jump();
                }
                if (!mc.thePlayer.onGround && mc.thePlayer.fallDistance <= 0.1) {
                    mc.thePlayer.speedInAir = 0.02;
                    mc.timer.timerSpeed = 1.5;
                }
                if (mc.thePlayer.fallDistance > 0.1 && mc.thePlayer.fallDistance < 1.3) {
                    mc.timer.timerSpeed = 0.7;
                }
                if (mc.thePlayer.fallDistance >= 1.3) {
                    mc.timer.timerSpeed = 1;
                    mc.thePlayer.speedInAir = 0.02;
                }
                break;
            case "Fast":
                if (!MovementUtils.isMoving())
                    return;
                if (mc.thePlayer.onGround) {
                    mc.thePlayer.jump();
                    mc.thePlayer.speedInAir = 0.0201;
                    mc.timer.timerSpeed = 0.94;
                }
                if (mc.thePlayer.fallDistance > 0.7 && mc.thePlayer.fallDistance < 1.3) {
                    mc.thePlayer.speedInAir = 0.02;
                    mc.timer.timerSpeed = 1.8;
                }
                break;
        }
    });
    module.on("disable", function () {
        mc.timer.timerSpeed = 1;
        mc.thePlayer.speedInAir = 0.02
    });
});

//-----------------------------------------------------------------------------------------------------------
var MovementUtils = Java.type("net.ccbluex.liquidbounce.utils.MovementUtils");
var C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
var fakespoof = false;
var packetmodify = false;
var AxisAlignedBB = Java.type("net.minecraft.util.AxisAlignedBB");
var packets = [];
script.registerModule({
    name: "AAC4NoFall",
    category: "Fun",
    description: "Allows you to avoid fall damage on AAC4.",
}, function(module) {
    module.on("enable", function() {
        fakelag = false;
        packetmodify = false;
    });
    module.on("motion", function(event) {
        var state = event.getEventState();
        if (state == "PRE") {
            if (!inVoid()) {
                if (fakelag) {
                    fakelag = false;
                    if (packets.length > 0) {
                        for (var i = 0; i < packets.length; i++) {
                            var packet = packets[i];
                            mc.thePlayer.sendQueue.addToSendQueue(packet);
                        }
                        packets = [];
                    }
                }
                return;
            }
            if (mc.thePlayer.onGround && fakelag) {
                fakelag = false;
                if (packets.length > 0) {
                    for (var i = 0; i < packets.length; i++) {
                        var packet = packets[i];
                        mc.thePlayer.sendQueue.addToSendQueue(packet);
                    }
                    packets = [];
                }
                return;
            }
            if (mc.thePlayer.fallDistance > 3 && fakelag) {
                packetmodify = true;
                mc.thePlayer.fallDistance = 0;
            }
            if (inAir(4.0, 1.0)) {
                return;
            }
            if (!fakelag) {
                fakelag = true;
            }
        }
    });
    module.on("packet", function(event) {
        var packet = event.getPacket();
        if (packet instanceof C03PacketPlayer && fakelag) {
            event.cancelEvent();
            if (packetmodify) {
                packet.onGround = true;
                packetmodify = false;
            }
            packets.push(packet);
        }
    });
});

function inVoid() {
    if (mc.thePlayer.posY < 0) {
        return false;
    }
    for (var off = 0; off < mc.thePlayer.posY + 2; off += 2) {
        var bb = new AxisAlignedBB(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, mc.thePlayer.posX, off, mc.thePlayer.posZ);
        if (!mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, bb).isEmpty()) {
            return true;
        }
    }
    return false;
}

function inAir(height, plus) {
    if (mc.thePlayer.posY < 0)
        return false;
    for (var off = 0; off < height; off += plus) {
        var bb = new AxisAlignedBB(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ, mc.thePlayer.posX, mc.thePlayer.posY - off, mc.thePlayer.posZ);
        if (!mc.theWorld.getCollidingBoundingBoxes(mc.thePlayer, bb).isEmpty()) {
            return true;
        }
    }
    return false;
}
//-----------------------------------------------------------------------------------------------------------
var lastHP=20;
var velHurt = false,velTimer=t();

function t() {
    return new Date().getTime();
}
script.registerModule({
    name: "AAC4Velocity",
    category: "Fun",
    description: "AAC4 Velocity"
}, function (module) {
    module.on("update", function () {
        if(mc.thePlayer.getHealth()<lastHP){
            lastHP=mc.thePlayer.getHealth();
            velTimer=t();
            velHurt = true
        }
        if (!mc.thePlayer.onGround) {
            if (velHurt) {
                mc.thePlayer.speedInAir = 0.02
                mc.thePlayer.motionX *= 0.6
                mc.thePlayer.motionZ *= 0.6
            }
        } else if((t()-velTimer)>100) {
            velHurt = false
        }
    });
});