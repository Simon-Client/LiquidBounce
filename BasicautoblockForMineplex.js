var scriptName = "AutoBlock";
var scriptVersion = 1.0;
var scriptAuthor = "Etho";

var Renderer = new Renderer();
var RendererClient;

var Timer = Java.type("java.util.Timer");
var BlockPos = Java.type('net.minecraft.util.BlockPos');
var C05PacketPlayerLook= Java.type('net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook');
var C08PacketPlayerBlockPlacement = Java.type('net.minecraft.network.play.client.C08PacketPlayerBlockPlacement');
var KeyBinding = Java.type('net.minecraft.client.settings.KeyBinding');

function setTimeout(func, milliseconds) {
    var timer = new Timer("setTimeout", true);
    timer.schedule(function () {
        func();
    }, milliseconds);

    return timer;
}

function setInterval(func, milliseconds) {
    var timer = new Timer("setInterval", true);

    timer.schedule(function () {
        func();
    }, milliseconds, milliseconds);

    return timer;
}

function Renderer() {

    var BlockRate = value.createInteger("BlockRate", 1, 1, 20);
    var Attack = value.createBoolean("OnAttack", true)
    var Interact = value.createBoolean("Interact", false)
    var BypassBlock = value.createList("Mode", ["Basic", "Mineplex"], "Basic");

    this.getName = function () {
        return "AutoBlock";
    };

    this.getDescription = function () {
        return "AutoBlock Bypasses";
    };

    this.getCategory = function () {
        return "fun";
    };

    this.onUpdate = function () {
        if(Attack.get() == false) {
            if (BypassBlock.get() == "Basic") {
                if(mc.gameSettings.keyBindAttack.pressed == true) {
                    Ticks++
                    if(Ticks == BlockRate.get()) {
                        Ticks = 0
                        stack = mc.thePlayer.getHeldItem();
                        stackName = stack.getItem();
                        if(stack != null) {
                            KeyBinding.setKeyBindState(mc.gameSettings.keyBindUseItem.getKeyCode(), true);
                            setTimeout(function () {
                                KeyBinding.setKeyBindState(mc.gameSettings.keyBindUseItem.getKeyCode(), false);
                            }, 120)
                        }

                        if(Interact.get() == true) {
                            blockigePosition = new BlockPos(mc.thePlayer.posX, Math.floor(mc.thePlayer.getEntityBoundingBox().minY), mc.thePlayer.posZ);
                            mc.thePlayer.sendQueue.addToSendQueue(new C05PacketPlayerLook(mc.thePlayer.rotationPitch, 0, true));
                            mc.thePlayer.sendQueue.addToSendQueue(new C08PacketPlayerBlockPlacement(blockigePosition, 1, mc.thePlayer.inventory.getCurrentItem(), 8, 16, 10));
                        }
                    }
                }
            }

        }
    }

    this.onAttack = function () {
        if(Attack.get() == true) {
            if (BypassBlock.get() == "Basic") {
                setTimeout(function () {
                    stack = mc.thePlayer.getHeldItem();
                    stackName = stack.getItem();
                    if(stack != null) {
                        KeyBinding.setKeyBindState(mc.gameSettings.keyBindUseItem.getKeyCode(), true);
                        setTimeout(function () {
                            KeyBinding.setKeyBindState(mc.gameSettings.keyBindUseItem.getKeyCode(), false);
                        }, 120)
                    }

                    if(Interact.get() == true) {
                        blockigePosition = new BlockPos(mc.thePlayer.posX, Math.floor(mc.thePlayer.getEntityBoundingBox().minY), mc.thePlayer.posZ);
                        mc.thePlayer.sendQueue.addToSendQueue(new C05PacketPlayerLook(mc.thePlayer.rotationPitch, 0, true));
                        mc.thePlayer.sendQueue.addToSendQueue(new C08PacketPlayerBlockPlacement(blockigePosition, 1, mc.thePlayer.inventory.getCurrentItem(), 8, 16, 10));
                    }
                }, BlockRate.get() + 20)
            }

            if(BypassBlock.get() == "Mineplex") {
                setTimeout(function () {
                    stack = mc.thePlayer.getHeldItem();
                    stackName = stack.getItem();
                    if(stack != null) {
                        KeyBinding.setKeyBindState(mc.gameSettings.keyBindUseItem.getKeyCode(), true);
                        setTimeout(function () {
                            KeyBinding.setKeyBindState(mc.gameSettings.keyBindUseItem.getKeyCode(), false);
                        }, 120)
                    }

                    if(Interact.get() == true) {
                        blockigePosition = new BlockPos(mc.thePlayer.posX, Math.floor(mc.thePlayer.getEntityBoundingBox().minY), mc.thePlayer.posZ);
                        mc.thePlayer.sendQueue.addToSendQueue(new C05PacketPlayerLook(mc.thePlayer.rotationPitch, 0, true));
                        mc.thePlayer.sendQueue.addToSendQueue(new C08PacketPlayerBlockPlacement(blockigePosition, 1, mc.thePlayer.inventory.getCurrentItem(), 8, 16, 10));
                    }
                }, BlockRate.get())
            }


        }
    }
    
    this.onDisable = function() {
        //KeyBinding.setKeyBindState(mc.gameSettings.keyBindUseItem.getKeyCode(), false);
    }
    
    this.onEnable = function() {
        Ticks = 0
    }

    this.addValues = function(values) {
        values.add(BlockRate);
        values.add(Attack);
        values.add(Interact);
        values.add(BypassBlock);
    }
}

function onEnable() {
    RendererClient = moduleManager.registerModule(Renderer);
};

function onDisable() {
    moduleManager.unregisterModule(RendererClient);
};