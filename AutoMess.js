var scriptName = "AutoMessage";
var scriptVersion = 6.6
var scriptAuthor = "soulplexis,reset by cookie";

var mobs = Java.type("net.minecraft.entity.EntityCreature");
var players = Java.type("net.minecraft.entity.player.EntityPlayer");
var S02PacketChat = Java.type('net.minecraft.network.play.server.S02PacketChat')
var scaffoldModule = moduleManager.getModule("Scaffold");
var Fly = moduleManager.getModule("Fly");
var Killaura = moduleManager.getModule("Killaura");
var Speed = moduleManager.getModule("Speed");
var Color = Java.type('java.awt.Color')
var Fonts = Java.type("net.ccbluex.liquidbounce.ui.font.Fonts");
script.import('lib/glFunctions.js');
script.import("lib/systemFunctions.js")
script.import('lib/timingFunctions.js');

var RenderUtils = Java.type('net.ccbluex.liquidbounce.utils.render.RenderUtils')

var autoMessage = new autoMessage();
var autoMessageClient;

function autoMessage() {
    var ticks = 0;
    var a = false;
    var b = 0;
    var Mode = value.createList("Mode", ["Before", "After",], "Before");
    var AutoL = value.createBoolean("AutoL", true);
    var Mob = value.createBoolean("Mob", false);
    var Player = value.createBoolean("Player", true);
    var Instant = value.createBoolean("Instant", false);
    var GG = value.createBoolean("GG", true);
    var Wdr = value.createBoolean("Wdr", true);
    var Message = value.createText("Message", "L");
    var WdrMessage = value.createText("WdrMessage", "Killaura");
    var Wdrtext = value.createText("Wdrtext", "/wdr");
    var Lname = value.createText("Lname", "Cookie");
    var GGname = value.createText("GGname", "Cookie");
    var GGNameT = value.createBoolean("GGNameT", true);
    var StartSpammer = value.createBoolean("StartSpammer", true);
    var AutoRejoin = value.createBoolean("AutoRejoin", true);
    var AutoPlay = value.createBoolean("AutoPlay", true);
    var CheckPlayer = value.createText("CheckPlayer", ":");
    var AutoPlayTick = value.createInteger("AutoPlayTick", 80, 5, 100);
    var RejoinTick = value.createInteger("RejoinTick", 40, 5, 100);
    var AutoLName = value.createBoolean("AutoLName", true);
    var nameBefore = value.createText("nameBefore", "[");
    var nameAfter = value.createText("nameAfter", "]");
    var GGCheck = value.createText("GGCheck", "win");
    var AutoPlayCheck = value.createText("AutoPlayCheck", "win");
    var AutoRejoinCheck1 = value.createText("AutoRejoinCheck1", "connect");
    var AutoRejoinCheck2 = value.createText("AutoRejoinCheck2", "kick");
    var GGText = value.createText("GGText", "GG");
    var StartSpammerChecks = value.createText("StartSpammerChecks", "start");
    var Autodisable = value.createBoolean("Autodisable", true);
    var AutodisableChecks1 = value.createText("AutodisableChecks1", "win");
    var AutodisableChecks2 = value.createText("AutodisableChecks2", "died");
    var AutodisableKillaura = value.createBoolean("AutodisableKillaura", true);
    var AutodisableSpeed = value.createBoolean("AutodisableSpeed", true);
    var AutodisableFly = value.createBoolean("AutodisableFly", true);
    var AutodisableScaffold = value.createBoolean("AutodisableScaffold", true);
    var AutoRejoinText = value.createText("AutoRejoinText", "/rejoin");
    var AutoPlayMode = value.createList("HypixelAutoPlayMode", ["BedWars_1v1", "BedWars_2v2", "BedWars_3v3", "BedWars_4v4", "SkyWars_Solo", "SkyWars_Solo_Insane", "SkyWars_Solo_LuckyBlock", "SkyWars_Team", "SkyWars_Team_Insane", "SkyWars_Team_LuckyBlock", "SurivialGames_Solo", "SurivialGames_Team", "MiniWalls",], "SkyWars_Solo");
    var GGAfterText = value.createText("GGAfterText", "Pls use Cookie Config");
    var StartSpammerText = value.createText("StartSpammerText", "Pls use Liquidbounce Config");

    this.getName = function () {
        return "AutoMessage";
    };

    this.getDescription = function () {
        return "Mentions the target with a message when you kill them.";
    };

    this.getCategory = function () {
        return "Fun";
    };
    this.onEnable = function () {
        target = null;
        a == false;
        b = 0;
    }
    this.onPacket = function (event) {
        var packet = event.getPacket();
        if (packet instanceof S02PacketChat) {
            if (GG.get() == true) {
                if (packet.getChatComponent().getUnformattedText().contains(GGCheck.get())) {
                    if (!packet.getChatComponent().getUnformattedText().contains(CheckPlayer.get())) {
                        if (GGNameT.get() == true) {
                            mc.thePlayer.sendChatMessage(nameBefore.get() + GGname.get() + nameAfter.get() + " " + GGText.get() + " " + GGAfterText.get())
                        } else {
                            mc.thePlayer.sendChatMessage(GGText.get())
                        }
                    }
                }
            }
            if (AutoRejoin.get() == true) {
                if (packet.getChatComponent().getUnformattedText().contains(AutoRejoinCheck1.get())) {
                    if (!packet.getChatComponent().getUnformattedText().contains(CheckPlayer.get())) {
                        setTimeout(function () {
                            mc.thePlayer.sendChatMessage(AutoRejoinText.get())
                        }, RejoinTick.get() * 50)
                    }
                }
                if (packet.getChatComponent().getUnformattedText().contains(AutoRejoinCheck2.get())) {
                    if (!packet.getChatComponent().getUnformattedText().contains(CheckPlayer.get())) {
                        setTimeout(function () {
                            mc.thePlayer.sendChatMessage(AutoRejoinText.get())
                        }, RejoinTick.get() * 50)
                    }
                }
            }
            if (Autodisable.get() == true) {
                if (packet.getChatComponent().getUnformattedText().contains(AutodisableChecks1.get())) {
                    if (!packet.getChatComponent().getUnformattedText().contains(CheckPlayer.get())) {
                        if (AutodisableKillaura.get() == true) {
                            Killaura.setState(false)
                        }
                        if (AutodisableScaffold.get() == true) {
                            scaffoldModule.setState(false)
                        }
                        if (AutodisableFly.get() == true) {
                            Fly.setState(false)
                        }
                        if (AutodisableSpeed.get() == true) {
                            Speed.setState(false)
                        }
                    }
                }
                if (packet.getChatComponent().getUnformattedText().contains(AutodisableChecks2.get())) {
                    if (!packet.getChatComponent().getUnformattedText().contains(CheckPlayer.get())) {
                        if (AutodisableKillaura.get() == true) {
                            Killaura.setState(false)
                        }
                        if (AutodisableScaffold.get() == true) {
                            scaffoldModule.setState(false)
                        }
                        if (AutodisableFly.get() == true) {
                            Fly.setState(false)
                        }
                        if (AutodisableSpeed.get() == true) {
                            Speed.setState(false)
                        }
                    }
                }
            }
            if (StartSpammer.get() == true) {
                if (packet.getChatComponent().getUnformattedText().contains(StartSpammerChecks.get())) {
                    if (!packet.getChatComponent().getUnformattedText().contains(CheckPlayer.get())) {
                        mc.thePlayer.sendChatMessage(nameBefore.get() + GGname.get() + nameAfter.get() + " " + StartSpammerText.get())
                    }
                }
            }
            if (AutoPlay.get() == true) {
                if (packet.getChatComponent().getUnformattedText().contains(AutoPlayCheck.get())) {
                    if (!packet.getChatComponent().getUnformattedText().contains(CheckPlayer.get())) {
                        a = true;
                        switch (HypixelAutoPlayMode.get()) {
                            case "BedWars_1v1":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play bedwars_eight_one");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "BedWars_2v2":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play bedwars_eight_two");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "BedWars_3v3":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play bedwars_four_three");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "BedWars_4v4":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play bedwars_four_four");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "SkyWars_Solo":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play solo_normal");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "SkyWars_Solo_Insane":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play solo_insane");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "SkyWars_Solo_LuckyBlock":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play solo_insane_lucky");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "SkyWars_Team":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play teams_normal");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "SkyWars_Team_Insane":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play teams_insane");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "SkyWars_Team_LuckyBlock":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play teams_insane_lucky");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "SurivialGames_Solo":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play blitz_solo_normal");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "SurivialGames_Team":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play blitz_teams_normal");
                                }, AutoPlayTick.get() * 50)
                                break;
                            case "MiniWalls":
                                setTimeout(function () {
                                    mc.thePlayer.sendChatMessage("/play arcade_mini_walls");
                                }, AutoPlayTick.get() * 50)
                                break;
                        }
                    }
                }

            }
        }
    }

    this.onMotion = function () {
        if (target != null && (((target instanceof mobs && Mob.get() == true) || Mob.get() == false && !(target instanceof mobs)) || ((target instanceof players && Player.get() == true) || Player.get() == false && !(target instanceof players))) && ((Instant.get() == true && target.getHealth() == 0) || Instant.get() == false && target.isDead == true)) {
            switch (Mode.get()) {
                case "After":
                    if (Wdr.get() == true) {
                        mc.thePlayer.sendChatMessage(Wdrtext.get() + " " + target.getName() + " " + WdrMessage.get());
                    }
                    if (AutoL.get() == true) {
                        if (AutoLName.get() == true) {
                            mc.thePlayer.sendChatMessage(nameBefore.get() + Lname.get() + nameAfter.get() + target.getName() + " " + Message.get());
                        } else {
                            mc.thePlayer.sendChatMessage(target.getName() + " " + Message.get());
                        }
                    }
                    break;
                case "Before":
                    if (AutoL.get() == true) {
                        if (AutoLName.get() == true) {
                            mc.thePlayer.sendChatMessage(nameBefore.get() + Lname.get() + nameAfter.get() + " " + Message.get() + " " + target.getName());
                        } else {
                            mc.thePlayer.sendChatMessage(target.getName() + " " + Message.get());
                        }
                    }
                    if (Wdr.get() == true) {
                        mc.thePlayer.sendChatMessage(Wdrtext.get() + " " + target.getName() + " " + WdrMessage.get());
                    }
                    break;
            }
            target = null;
        }
    }
    this.onDisable = function () {
    }
    this.onUpdate = function () {
        if (a == true) {
            ticks++;
        }
        if (ticks != 0 && ticks < AutoPlayTick.get()) {
            if (b != 7) {
                b++;
            }
        }
        if (ticks > AutoPlayTick.get()) {
            ticks = 0;
            a = false;
            b = 0;
        }
    }
    this.onRender2D = function () {
        var mcWidth = getScaledWidth();
        //RenderUtils.drawBorderedRect(mcWidth / 2 - 92 , 3, mcWidth / 2 + 92, 23, 3, new Color(0, 0, 0, 150).getRGB(), new Color(0, 0, 0, 150).getRGB());
        if (a == true) {
            RenderUtils.drawBorderedRect(mcWidth / 2 - 92, b, mcWidth / 2 + 92, b + 25, 3, new Color(255, 255, 255, 90).getRGB(), new Color(255, 255, 255, 90).getRGB());
            Fonts.font40.drawCenteredString("Auto  Play", mcWidth / 2 + 3, b + 5, 0xffffff);
            Fonts.font35.drawCenteredString("next game in " + (4 - parseInt(ticks / 20)) + 's', mcWidth / 2 + 3, b + 16, 0xffffff);
        }
    }
    this.addValues = function (values) {
        values.add(Mode);
        values.add(Mob);
        values.add(Player);
        values.add(Instant);
        values.add(Message);
        values.add(GG);
        values.add(Wdr);
        values.add(WdrMessage);
        values.add(Wdrtext);
        values.add(Lname);
        values.add(GGname);
        values.add(GGNameT);
        values.add(StartSpammer);
        values.add(AutoRejoin);
        values.add(AutoPlay);
        values.add(HypixelAutoPlayMode);
        values.add(GGAfterText);
        values.add(AutoL);
        values.add(CheckPlayer);
        values.add(AutoPlayTick);
        values.add(AutoLName);
        values.add(RejoinTick);
        values.add(nameAfter);
        values.add(nameBefore);
        values.add(GGCheck);
        values.add(AutoPlayCheck);
        values.add(AutoRejoinCheck1);
        values.add(AutoRejoinCheck2);
        values.add(GGText);
        values.add(StartSpammerChecks);
        values.add(Autodisable);
        values.add(AutodisableChecks1);
        values.add(AutodisableChecks2);
        values.add(AutodisableFly);
        values.add(AutodisableKillaura);
        values.add(AutodisableScaffold);
        values.add(AutodisableSpeed);
        values.add(AutoRejoinText);
        values.add(StartSpammerText);
    }
    var target;
    var EntityUtils = Java.type("net.ccbluex.liquidbounce.utils.EntityUtils")
    this.onAttack = function (event) {
        if (EntityUtils.isSelected(event.getTargetEntity(), true)) target = event.getTargetEntity();
    }
}

function onLoad() {
};

function onEnable() {
    autoMessageClient = moduleManager.registerModule(autoMessage);
};

function onDisable() {
    moduleManager.unregisterModule(autoMessageClient);
};