///api_version=2
(script = registerScript({
    name: "BridgeAssist",
    authors: ["CzechHek"],
    version: "1.3"
})).import("Core.lib");

module = {
    category: "Misc",
    values: [
        safewalk = value.createBoolean("SafeWalk", true),
        sprint = value.createBoolean("Sprint", false),
        selectblock = value.createBoolean("SelectBlock", true),
        sneakonplace = value.createBoolean("SneakOnPlace", true),
        delay = value.createInteger("Delay", 0, 0, 1000),
        pitch = new (Java.extend(FloatValue)) ("Pitch", 79.5, 75, 85) {
            onChanged: function () {
                BridgeAssistModule.state && updatePitch();
            }
        },
        speedpercentage = value.createInteger("Speed%", 80, 1, 100),
        jumppercentage = value.createInteger("Jump%", 80, 1, 100),
        timer = value.createFloat("Timer", 1, 0.1, 1),
        togglemodules = new (Java.extend(TextValue)) ("ToggleModules", "KillAura, InventoryManager") {
            onChanged: function () {
                updateModules();
            }
        }
    ],
    onClickGuiLoaded: function () {
        updateModules();
    },
    onEnable: function () {
        updatePitch();
        for each (module in modulesList) {
            modulesStates.push(module.state);
            module.state = false;
        }
    },
    onPacket: function (e) {
        if (sneakonplace.get() && e.getPacket() instanceof C08PacketPlayerBlockPlacement && mc.objectMouseOver.typeOfHit == "BLOCK" && mc.objectMouseOver.sideHit != "up") {
            e.cancelEvent();
            sendPacket(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.START_SNEAKING));
            sendPacket(e.getPacket());
            sendPacket(new C0BPacketEntityAction(mc.thePlayer, C0BPacketEntityAction.Action.STOP_SNEAKING));
        }
    },
    onMove: function (e) {
        e.setSafeWalk(safewalk.get());

        mc.thePlayer.rotationPitch = targetPitch;

        mc.thePlayer.setSprinting(sprint.get());
        
        if (selectblock.get()) {
            slot = InventoryUtils.findAutoBlockBlock();
            if (~slot && (mc.thePlayer.inventory.currentItem != slot - 36)) {
                mc.thePlayer.inventory.currentItem = slot - 36;
                mc.playerController.updateController();
            }
        }

        if (delaytimer.hasTimePassed(delay.get())) {
            mc.rightClickDelayTimer = 0;
            delaytimer.reset();
        } else mc.rightClickDelayTimer = 20;

        e.setX(e.getX() * (mc.thePlayer.movementInput.jump ? jumppercentage : speedpercentage).get() / 100);
        e.setZ(e.getZ() * (mc.thePlayer.movementInput.jump ? jumppercentage : speedpercentage).get() / 100);
        mc.timer.timerSpeed = timer.get();
    },
    onDisable: function () {
        mc.timer.timerSpeed = 1;
        mc.thePlayer.rotationPitch = 0;
        modulesList.forEach(function (module, i) module.state = modulesStates[i]);
        modulesStates = [];
    }
}

delaytimer = new MSTimer();
modulesStates = [];

function updatePitch() targetPitch = pitch.get() + rand(0.01, 0.1);

function updateModules() modulesList = togglemodules.get().replaceAll(" ", "").split(",").map(function (name) moduleManager.getModule(name)).filter(Boolean);