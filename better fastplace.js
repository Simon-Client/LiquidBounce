var scriptName = 'BetterFastPlace'
var scriptAuthor = 'As丶One'
var scriptVersion = 1.0

function BetterFastPlace() {
    var ItemBlock = Java.type("net.minecraft.item.ItemBlock")
    var Speed = value.createInteger("Speed", 9, 0, 9)
    var tick = 0
    this.getName = function () {
        return 'BetterFastPlace'
    }

    this.getDescription = function () {
        return 'BetterFastPlace By As丶One'
    }

    this.getCategory = function () {
        return 'Fun'
    }

    this.addValues = function (values) {
        values.add(Speed)
    }

    this.onUpdate = function () {
        if (mc.thePlayer.getHeldItem() != null && mc.thePlayer.getHeldItem().getItem() instanceof ItemBlock) {
            mc.rightClickDelayTimer = (tick++ % (10-Speed.get()))+1
        }else{
            tick = 0
        }
    }
}



var BetterFastPlace = new BetterFastPlace()
var BetterFastPlaceClient

function onEnable() {
    BetterFastPlaceClient = moduleManager.registerModule(BetterFastPlace)
}

function onDisable() {
    moduleManager.unregisterModule(BetterFastPlaceClient)
}