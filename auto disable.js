var S06PacketUpdateHealth = Java.type('net.minecraft.network.play.server.S06PacketUpdateHealth');
var S01PacketJoinGame = Java.type('net.minecraft.network.play.server.S01PacketJoinGame');
var S07PacketRespawn = Java.type('net.minecraft.network.play.server.S07PacketRespawn');
var KillAura = moduleManager.getModule('KillAura');
var isDead = undefined;
var script = registerScript({
    name: 'AutoDisable',
    version: '1.0.0',
    authors: ['Shurpe']
});
script.registerModule({
    name: 'AutoDisable',
    category: 'Fun', 
    description: 'Automatically turns off KillAura',
    settings: {
        mode1: Setting.boolean({
            name: "OnRespawn",
            default: true
        }),
        mode2: Setting.boolean({
            name: "OnDeath",
            default: true
        }),
        mode3: Setting.boolean({
            name: "OnServerJoin",
            default: true
        })
    }
}, function (module) {
    module.on('packet', function(e) {
        var packet = e.getPacket();
        if (module.settings.mode1.get() == true && packet instanceof S07PacketRespawn) {
            KillAura.setState(false);
        }
        if (module.settings.mode2.get() == true && packet instanceof S06PacketUpdateHealth && packet.getHealth() <= 0) {
            isDead = true;
        }
        if (module.settings.mode3.get() == true && packet instanceof S01PacketJoinGame) {
            KillAura.setState(false);
        }
    });
    module.on('update', function() {
        if (isDead == true) {
            if (mc.thePlayer.getHealth() <= 0) {
                KillAura.setState(false);
                isDead = false;
            }
        }
    });
});

0
