var scriptName = "CleanBHop";
var scriptVersion = 1.0;
var scriptAuthor = "yorik100";
var Potion = Java.type('net.minecraft.potion.Potion');
var sprintModule = moduleManager.getModule("Sprint");
var S12PacketEntityVelocity = Java.type('net.minecraft.network.play.server.S12PacketEntityVelocity');
var S27PacketExplosion = Java.type('net.minecraft.network.play.server.S27PacketExplosion');
var S08PacketPlayerPosLook = Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");
// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};

function getSpeedPotion() {
    return (mc.thePlayer.isPotionActive(Potion.moveSpeed) ? mc.thePlayer.getActivePotionEffect(Potion.moveSpeed).getAmplifier() + 1 : 0)
}

function getMoveYaw() {
    var moveYaw = mc.thePlayer.rotationYaw;
    if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing == 0) {
        moveYaw += mc.thePlayer.moveForward > 0 ? 0 : 180;
    } else if (mc.thePlayer.moveForward != 0 && mc.thePlayer.moveStrafing != 0) {
        if (mc.thePlayer.moveForward > 0)
            moveYaw += mc.thePlayer.moveStrafing > 0 ? -45 : 45;
        else
            moveYaw -= mc.thePlayer.moveStrafing > 0 ? -45 : 45;

        moveYaw += mc.thePlayer.moveForward > 0 ? 0 : 180;
    } else if (mc.thePlayer.moveStrafing != 0 && mc.thePlayer.moveForward == 0) {
        moveYaw += mc.thePlayer.moveStrafing > 0 ? -90 : 90;
    }
    return moveYaw;
}

function setMoveSpeed(speed) {
    var yaw = getMoveYaw();
    if (mc.thePlayer.moveForward != 0 || mc.thePlayer.moveStrafing != 0) {
        mc.thePlayer.motionX = -Math.sin(Math.radians(yaw)) * speed;
        mc.thePlayer.motionZ = Math.cos(Math.radians(yaw)) * speed;
    }
}

function getSpeed(entity) {
    if (entity == null || entity == undefined) entity = mc.thePlayer;
    return Math.sqrt(entity.motionX * entity.motionX + entity.motionZ * entity.motionZ);
}

var cleanBHop = new CleanBHop();

var client;

function CleanBHop() {
    var FastFall = value.createBoolean("FastFall", true);
    var SmallJump = value.createBoolean("SmallJump", false);
	var Timer = value.createBoolean("Timer", false);
    var DisableOnFlag = value.createBoolean("DisableOnFlag", false);
    this.getName = function() {
        return "NCPBhop";
    };

    this.getDescription = function() {
        return "Bhop";
    };

    this.getCategory = function() {
        return "Movement";
    };
    this.onEnable = function() {
		cancelJump = true;
		Timering = false;
		stop = false;
		SprintState = sprintModule.getState();
		OmniSprint = sprintModule.getValue("AllDirections").get();
		BlindSprint = sprintModule.getValue("Blindness").get();
		FoodSprint = sprintModule.getValue("Food").get();
		ServerSprint = sprintModule.getValue("CheckServerSide").get();
    };
    this.addValues = function(values) {
        values.add(Timer);
        values.add(SmallJump);
        values.add(FastFall);
        values.add(DisableOnFlag);
    };
    this.onJump = function(event) {
        if (cancelJump && (mc.thePlayer.movementInput.moveForward || mc.thePlayer.movementInput.moveStrafe))
            event.cancelEvent()
    }
    this.onStrafe = function(event) {
		sprintModule.setState(true);
		sprintModule.getValue("AllDirections").set(true);
		sprintModule.getValue("Blindness").set(false);
		sprintModule.getValue("Food").set(false);
		sprintModule.getValue("CheckServerSide").set(false);
		if (Timer.get()) {
			Timering = true;
			mc.timer.timerSpeed = 1.0866;
		} else if (Timering) {
			Timering = false;
			mc.timer.timerSpeed = 1;
		}
        if ((!mc.thePlayer.movementInput.moveForward && !mc.thePlayer.movementInput.moveStrafe) || mc.thePlayer.isCollidedHorizontally || mc.thePlayer.isInWater() || mc.thePlayer.isInLava() || mc.thePlayer.isOnLadder() || mc.thePlayer.isInWeb || mc.thePlayer.ridingEntity != null || mc.thePlayer.isOnLadder() || mc.thePlayer.fallDistance > 5)
			stop = true;
		mc.thePlayer.speedInAir = (stop ? (0.02 * (1 + getSpeedPotion() * (0.16 + getSpeedPotion() * 0.01))) : (0.022151 * (1 + getSpeedPotion() * (0.16 + getSpeedPotion() * 0.01))));
        if (mc.thePlayer.onGround && (mc.thePlayer.movementInput.moveForward || mc.thePlayer.movementInput.moveStrafe) && !mc.thePlayer.isOnLadder() && !mc.thePlayer.isInWeb && !mc.thePlayer.isInWater() && !mc.thePlayer.isInLava() && mc.thePlayer.ridingEntity == null) {
			stop = false;
			cancelJump = false;
            mc.thePlayer.jump();
			if (SmallJump.get())
				mc.thePlayer.motionY *= 0.975
            cancelJump = true;
            if (getSpeed() < (0.49 * (1 + getSpeedPotion() * (0.16 + getSpeedPotion() * 0.01)) * ((mc.thePlayer.movementInput.moveForward && mc.thePlayer.movementInput.moveStrafe) ? 0.9825 : 1)))
                setMoveSpeed(0.49 * (1 + getSpeedPotion() * (0.16 + getSpeedPotion() * 0.01)) * ((mc.thePlayer.movementInput.moveForward && mc.thePlayer.movementInput.moveStrafe) ? 0.9825 : 1));
        }
		if (FastFall.get())
			mc.thePlayer.motionY -= 0.00099999
        setMoveSpeed(getSpeed());
    };
    this.onPacket = function(event) {
		if (mc.theWorld == null || mc.thePlayer == null)
			return;
        var packet = event.getPacket();
		if (packet instanceof S08PacketPlayerPosLook) {
			if (DisableOnFlag.get()) {
                var autoDisableModule = moduleManager.getModule("NCPBhop");
                autoDisableModule.setState(false);
			}
			stop = true;
		}
            if (packet instanceof S12PacketEntityVelocity) {
                if (packet.getEntityID() == mc.thePlayer.getEntityId()) {
                    event.cancelEvent()
                }
            }
            if (packet instanceof S27PacketExplosion) {
                event.cancelEvent()
            }
    }
    this.onDisable = function() {
		sprintModule.setState(SprintState);
		sprintModule.getValue("AllDirections").set(OmniSprint);
		sprintModule.getValue("Blindness").set(BlindSprint);
		sprintModule.getValue("Food").set(FoodSprint);
		sprintModule.getValue("CheckServerSide").set(ServerSprint);
        mc.thePlayer.speedInAir = 0.02;
		if (Timering) {
			Timering = false;
			mc.timer.timerSpeed = 1;
		}
    };
}

function onLoad() {}

function onEnable() {
    client = moduleManager.registerModule(cleanBHop);
}

function onDisable() {
    moduleManager.unregisterModule(client);
}