//Core 3.2 - Simple, yet powerful ScriptAPI base

var scriptName, scriptAuthor, scriptVersion, modulelist = [], commandlist = [],
module = Array.isArray(module) ? module : [module || {}], command = Array.isArray(command) ? command : (command = [command || {}]);

scriptName = scriptName || module[0].name || (command[0].commands && command[0].commands[0]) || "Module";
scriptAuthor = scriptAuthor || module[0].author || command[0].author || "Author";
scriptVersion = parseFloat(scriptVersion || module[0].version || command[0].version || 1);

function Module(m) {
    this.getName = function () {return m.name || "Module"};
    this.getDescription = function () {return m.description || ""};
    this.getCategory = function () {return m.category || "Fun"};
    m.tag && (this.getTag = function () {return m.tag});
    m.values && (this.addValues = function (e) {for (i in m.values) e.add(m.values[i])});
    m.onEnable && (this.onEnable = function () {m.onEnable()});
    m.onDisable && (this.onDisable = function () {m.onDisable()});
    m.onUpdate && (this.onUpdate = function () {m.onUpdate()});
    m.onMotion && (this.onMotion = function (e) {m.onMotion(e)});
    m.onRender2D && (this.onRender2D = function (e) {m.onRender2D(e)});
    m.onRender3D && (this.onRender3D = function (e) {m.onRender3D(e)});
    m.onAttack && (this.onAttack = function (e) {m.onAttack(e)});
    m.onJump && (this.onJump = function (e) {m.onJump(e)});
    m.onPacket && (this.onPacket = function (e) {m.onPacket(e)});
    m.onKey && (this.onKey = function (e) {m.onKey(e)});
    m.onMove && (this.onMove = function (e) {m.onMove(e)});
    m.onStep && (this.onStep = function (e) {m.onStep(e)});
    m.onStepConfirm && (this.onStepConfirm = function () {m.onStepConfirm()});
    m.onWorld && (this.onWorld = function (e) {m.onWorld(e)});
    m.onSession && (this.onSession = function () {m.onSession()});
}

function Command(c) {
    !Array.isArray(c.commands) && (c.commands = [c.commands || "Command"]);
    !Array.isArray(c.subcommands) && (c.subcommands = [c.subcommands || ""]);
    this.getName = function () {return c.commands[0]};
    this.getAliases = function () {return c.commands};
    this.execute = function (args) {
        prefix = LiquidBounce.commandManager.prefix;
        args[0] = args[0].replace(prefix, "");
        commands = []; subcommands = [];
        for (i in c.commands) c.commands[i].length && commands.push(c.commands[i].toLowerCase());
        for (i in c.subcommands) c.subcommands[i].length && subcommands.push(c.subcommands[i].toLowerCase());
        for (i in args) args[i] = args[i].toLowerCase();
        if (subcommands.length ? args.length == 1 || !~subcommands.indexOf(args[1]) : args.length > 1) {
            chat.print("");
            chat.print("§8▏ §7§l" + this.getName() + " §8v§l" + (c.version || scriptVersion).toFixed(1) + " §7by §8§l" + (c.author || scriptAuthor));
            chat.print("§8▏ §7Available subcommands§8: (§7§l" + (subcommands ? subcommands.length : 1) + "§8)");
            chat.print("§8▏ §f" + prefix + args[0] + (subcommands.length ? " §8[§f" + subcommands.join("§7, §f") + "§8]" : ""));
            commands.length > 1 && (chat.print("§8▏ §7Available aliases§8: (§7§l" + commands.length + "§8)"), chat.print("§8▏ §f" + prefix + commands.join("§7, §f" + prefix)));
            args.length > 1 && chat.print("§8▏ §c§lSyntax error: " + prefix + args[0] + " " + args[1]);
        } else if (c.onExecute) c.onExecute(args);
    }
}

function onLoad() {
    for (i in module) Object.keys(module[i]).length && (modulelist[i] = moduleManager.registerModule(new Module(module[i])), module[i].onLoad && module[i].onLoad());
    for (i in command) Object.keys(command[i]).length && (commandlist[i] = commandManager.registerCommand(new Command(command[i])), command[i].onLoad && command[i].onLoad());
}

function onDisable() {
    for (i in modulelist) (module[i].onUnload && module[i].onUnload()), moduleManager.unregisterModule(modulelist[i]);
    for (i in commandlist) (command[i].onUnload && command[i].onUnload()), commandManager.unregisterCommand(commandlist[i]);
}

//Movement util

function isMovingHorizontally(entity) {
    return entity && entity != mc.thePlayer ? entity.lastTickPosX != entity.posX || entity.lastTickPosZ != entity.posZ : !!(mc.thePlayer.movementInput.moveForward || mc.thePlayer.movementInput.moveStrafe);
}

function isMovingVertically(entity) {
    return entity && entity != mc.thePlayer ? entity.lastTickPosY != entity.posY : mc.thePlayer.movementInput.jump;
}

function isMoving(entity) {
    return isMovingHorizontally(entity) || isMovingVertically(entity);
}

function isInputHorizontally() {
    return Keyboard.isKeyDown(mc.gameSettings.keyBindForward.getKeyCode()) || Keyboard.isKeyDown(mc.gameSettings.keyBindLeft.getKeyCode()) || Keyboard.isKeyDown(mc.gameSettings.keyBindBack.getKeyCode()) || Keyboard.isKeyDown(mc.gameSettings.keyBindRight.getKeyCode());
}

function isInputVertically() {
    return Keyboard.isKeyDown(mc.gameSettings.keyBindJump.getKeyCode());
}

function getMoveYaw() {
    moveYaw = mc.thePlayer.rotationYaw;
    if (mc.thePlayer.moveForward && !mc.thePlayer.moveStrafing) {
        moveYaw += mc.thePlayer.moveForward > 0 ? 0 : 180;
    } else if (mc.thePlayer.moveForward && mc.thePlayer.moveStrafing) {
        if (mc.thePlayer.moveForward > 0) moveYaw += mc.thePlayer.moveStrafing > 0 ? -45 : 45;
        else moveYaw += mc.thePlayer.moveStrafing > 0 ? 225 : 135;
    } else if (mc.thePlayer.moveStrafing && !mc.thePlayer.moveForward) moveYaw += mc.thePlayer.moveStrafing > 0 ? -90 : 90;
    return moveYaw;
}

function setSpeed(speed, strafe) {
    if (!isMoving()) return;
    if (mc.thePlayer.onGround || (strafe && !mc.thePlayer.onGround)) {
        yaw = getMoveYaw();
        mc.thePlayer.motionX = -Math.sin(Math.PI / 180 * yaw) * speed;
        mc.thePlayer.motionZ = Math.cos(Math.PI / 180 * yaw) * speed;
    }
}

Keyboard = Java.type("org.lwjgl.input.Keyboard");

//Timing util

function interval(ms, func) {
	return timer = new Timer("setInterval", true), timer.schedule(func, 0, ms), timer;
}

function delay(ms, func) {
	return timer = new Timer("setTimeout", true), timer.schedule(func, ms), timer;
}

Timer = Java.type("java.util.Timer");

//Packets
C00Handshake=Java.type("net.minecraft.network.handshake.client.C00Handshake");C00PacketKeepAlive=Java.type("net.minecraft.network.play.client.C00PacketKeepAlive");C00PacketLoginStart=Java.type("net.minecraft.network.login.client.C00PacketLoginStart");C00PacketServerQuery=Java.type("net.minecraft.network.status.client.C00PacketServerQuery");C01PacketChatMessage=Java.type("net.minecraft.network.play.client.C01PacketChatMessage");C01PacketEncryptionResponse=Java.type("net.minecraft.network.login.client.C01PacketEncryptionResponse");C01PacketPing=Java.type("net.minecraft.network.status.client.C01PacketPing");C02PacketUseEntity=Java.type("net.minecraft.network.play.client.C02PacketUseEntity");C03PacketPlayer=Java.type("net.minecraft.network.play.client.C03PacketPlayer");C04PacketPlayerPosition=Java.type("net.minecraft.network.play.client.C03PacketPlayer.C04PacketPlayerPosition");C05PacketPlayerLook=Java.type("net.minecraft.network.play.client.C03PacketPlayer.C05PacketPlayerLook");C06PacketPlayerPosLook=Java.type("net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook");C07PacketPlayerDigging=Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging");C08PacketPlayerBlockPlacement=Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");C09PacketHeldItemChange=Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");C0APacketAnimation=Java.type("net.minecraft.network.play.client.C0APacketAnimation");C0BPacketEntityAction=Java.type("net.minecraft.network.play.client.C0BPacketEntityAction");C0CPacketInput=Java.type("net.minecraft.network.play.client.C0CPacketInput");C0DPacketCloseWindow=Java.type("net.minecraft.network.play.client.C0DPacketCloseWindow");C0EPacketClickWindow=Java.type("net.minecraft.network.play.client.C0EPacketClickWindow");C0FPacketConfirmTransaction=Java.type("net.minecraft.network.play.client.C0FPacketConfirmTransaction");C10PacketCreativeInventoryAction=Java.type("net.minecraft.network.play.client.C10PacketCreativeInventoryAction");C11PacketEnchantItem=Java.type("net.minecraft.network.play.client.C11PacketEnchantItem");C12PacketUpdateSign=Java.type("net.minecraft.network.play.client.C12PacketUpdateSign");C13PacketPlayerAbilities=Java.type("net.minecraft.network.play.client.C13PacketPlayerAbilities");C14PacketTabComplete=Java.type("net.minecraft.network.play.client.C14PacketTabComplete");C15PacketClientSettings=Java.type("net.minecraft.network.play.client.C15PacketClientSettings");C16PacketClientStatus=Java.type("net.minecraft.network.play.client.C16PacketClientStatus");C17PacketCustomPayload=Java.type("net.minecraft.network.play.client.C17PacketCustomPayload");C18PacketSpectate=Java.type("net.minecraft.network.play.client.C18PacketSpectate");C19PacketResourcePackStatus=Java.type("net.minecraft.network.play.client.C19PacketResourcePackStatus");S00PacketDisconnect=Java.type("net.minecraft.network.login.server.S00PacketDisconnect");S00PacketKeepAlive=Java.type("net.minecraft.network.play.server.S00PacketKeepAlive");S00PacketServerInfo=Java.type("net.minecraft.network.status.server.S00PacketServerInfo");S01PacketEncryptionRequest=Java.type("net.minecraft.network.login.server.S01PacketEncryptionRequest");S01PacketJoinGame=Java.type("net.minecraft.network.play.server.S01PacketJoinGame");S01PacketPong=Java.type("net.minecraft.network.status.server.S01PacketPong");S02PacketChat=Java.type("net.minecraft.network.play.server.S02PacketChat");S02PacketLoginSuccess=Java.type("net.minecraft.network.login.server.S02PacketLoginSuccess");S03PacketEnableCompression=Java.type("net.minecraft.network.login.server.S03PacketEnableCompression");S03PacketTimeUpdate=Java.type("net.minecraft.network.play.server.S03PacketTimeUpdate");S04PacketEntityEquipment=Java.type("net.minecraft.network.play.server.S04PacketEntityEquipment");S05PacketSpawnPosition=Java.type("net.minecraft.network.play.server.S05PacketSpawnPosition");S06PacketUpdateHealth=Java.type("net.minecraft.network.play.server.S06PacketUpdateHealth");S07PacketRespawn=Java.type("net.minecraft.network.play.server.S07PacketRespawn");S08PacketPlayerPosLook=Java.type("net.minecraft.network.play.server.S08PacketPlayerPosLook");S09PacketHeldItemChange=Java.type("net.minecraft.network.play.server.S09PacketHeldItemChange");S0APacketUseBed=Java.type("net.minecraft.network.play.server.S0APacketUseBed");S0BPacketAnimation=Java.type("net.minecraft.network.play.server.S0BPacketAnimation");S0CPacketSpawnPlayer=Java.type("net.minecraft.network.play.server.S0CPacketSpawnPlayer");S0DPacketCollectItem=Java.type("net.minecraft.network.play.server.S0DPacketCollectItem");S0EPacketSpawnObject=Java.type("net.minecraft.network.play.server.S0EPacketSpawnObject");S0FPacketSpawnMob=Java.type("net.minecraft.network.play.server.S0FPacketSpawnMob");S10PacketSpawnPainting=Java.type("net.minecraft.network.play.server.S10PacketSpawnPainting");S11PacketSpawnExperienceOrb=Java.type("net.minecraft.network.play.server.S11PacketSpawnExperienceOrb");S12PacketEntityVelocity=Java.type("net.minecraft.network.play.server.S12PacketEntityVelocity");S13PacketDestroyEntities=Java.type("net.minecraft.network.play.server.S13PacketDestroyEntities");S14PacketEntity=Java.type("net.minecraft.network.play.server.S14PacketEntity");S15PacketEntityRelMove=Java.type("net.minecraft.network.play.server.S14PacketEntity.S15PacketEntityRelMove");S16PacketEntityLook=Java.type("net.minecraft.network.play.server.S14PacketEntity.S16PacketEntityLook");S17PacketEntityLookMove=Java.type("net.minecraft.network.play.server.S14PacketEntity.S17PacketEntityLookMove");S18PacketEntityTeleport=Java.type("net.minecraft.network.play.server.S18PacketEntityTeleport");S19PacketEntityHeadLook=Java.type("net.minecraft.network.play.server.S19PacketEntityHeadLook");S19PacketEntityStatus=Java.type("net.minecraft.network.play.server.S19PacketEntityStatus");S1BPacketEntityAttach=Java.type("net.minecraft.network.play.server.S1BPacketEntityAttach");S1CPacketEntityMetadata=Java.type("net.minecraft.network.play.server.S1CPacketEntityMetadata");S1DPacketEntityEffect=Java.type("net.minecraft.network.play.server.S1DPacketEntityEffect");S1EPacketRemoveEntityEffect=Java.type("net.minecraft.network.play.server.S1EPacketRemoveEntityEffect");S1FPacketSetExperience=Java.type("net.minecraft.network.play.server.S1FPacketSetExperience");S20PacketEntityProperties=Java.type("net.minecraft.network.play.server.S20PacketEntityProperties");S21PacketChunkData=Java.type("net.minecraft.network.play.server.S21PacketChunkData");S22PacketMultiBlockChange=Java.type("net.minecraft.network.play.server.S22PacketMultiBlockChange");S23PacketBlockChange=Java.type("net.minecraft.network.play.server.S23PacketBlockChange");S24PacketBlockAction=Java.type("net.minecraft.network.play.server.S24PacketBlockAction");S25PacketBlockBreakAnim=Java.type("net.minecraft.network.play.server.S25PacketBlockBreakAnim");S26PacketMapChunkBulk=Java.type("net.minecraft.network.play.server.S26PacketMapChunkBulk");S27PacketExplosion=Java.type("net.minecraft.network.play.server.S27PacketExplosion");S28PacketEffect=Java.type("net.minecraft.network.play.server.S28PacketEffect");S29PacketSoundEffect=Java.type("net.minecraft.network.play.server.S29PacketSoundEffect");S2APacketParticles=Java.type("net.minecraft.network.play.server.S2APacketParticles");S2BPacketChangeGameState=Java.type("net.minecraft.network.play.server.S2BPacketChangeGameState");S2CPacketSpawnGlobalEntity=Java.type("net.minecraft.network.play.server.S2CPacketSpawnGlobalEntity");S2DPacketOpenWindow=Java.type("net.minecraft.network.play.server.S2DPacketOpenWindow");S2EPacketCloseWindow=Java.type("net.minecraft.network.play.server.S2EPacketCloseWindow");S2FPacketSetSlot=Java.type("net.minecraft.network.play.server.S2FPacketSetSlot");S30PacketWindowItems=Java.type("net.minecraft.network.play.server.S30PacketWindowItems");S31PacketWindowProperty=Java.type("net.minecraft.network.play.server.S31PacketWindowProperty");S32PacketConfirmTransaction=Java.type("net.minecraft.network.play.server.S32PacketConfirmTransaction");S33PacketUpdateSign=Java.type("net.minecraft.network.play.server.S33PacketUpdateSign");S34PacketMaps=Java.type("net.minecraft.network.play.server.S34PacketMaps");S35PacketUpdateTileEntity=Java.type("net.minecraft.network.play.server.S35PacketUpdateTileEntity");S36PacketSignEditorOpen=Java.type("net.minecraft.network.play.server.S36PacketSignEditorOpen");S37PacketStatistics=Java.type("net.minecraft.network.play.server.S37PacketStatistics");S38PacketPlayerListItem=Java.type("net.minecraft.network.play.server.S38PacketPlayerListItem");S39PacketPlayerAbilities=Java.type("net.minecraft.network.play.server.S39PacketPlayerAbilities");S3APacketTabComplete=Java.type("net.minecraft.network.play.server.S3APacketTabComplete");S3BPacketScoreboardObjective=Java.type("net.minecraft.network.play.server.S3BPacketScoreboardObjective");S3CPacketUpdateScore=Java.type("net.minecraft.network.play.server.S3CPacketUpdateScore");S3DPacketDisplayScoreboard=Java.type("net.minecraft.network.play.server.S3DPacketDisplayScoreboard");S3EPacketTeams=Java.type("net.minecraft.network.play.server.S3EPacketTeams");S3FPacketCustomPayload=Java.type("net.minecraft.network.play.server.S3FPacketCustomPayload");S40PacketDisconnect=Java.type("net.minecraft.network.play.server.S40PacketDisconnect");S41PacketServerDifficulty=Java.type("net.minecraft.network.play.server.S41PacketServerDifficulty");S42PacketCombatEvent=Java.type("net.minecraft.network.play.server.S42PacketCombatEvent");S43PacketCamera=Java.type("net.minecraft.network.play.server.S43PacketCamera");S44PacketWorldBorder=Java.type("net.minecraft.network.play.server.S44PacketWorldBorder");S45PacketTitle=Java.type("net.minecraft.network.play.server.S45PacketTitle");S46PacketSetCompressionLevel=Java.type("net.minecraft.network.play.server.S46PacketSetCompressionLevel");S47PacketPlayerListHeaderFooter=Java.type("net.minecraft.network.play.server.S47PacketPlayerListHeaderFooter");S48PacketResourcePackSend=Java.type("net.minecraft.network.play.server.S48PacketResourcePackSend");S49PacketUpdateEntityNBT=Java.type("net.minecraft.network.play.server.S49PacketUpdateEntityNBT");

//Items
coreItems = ["Item","ItemArmor","ItemArmorStand","ItemBed","ItemBlock","ItemBoat","ItemBook","ItemBow","ItemBucket","ItemBucketMilk","ItemCarrotOnAStick","ItemCoal","ItemDoor","ItemDye","ItemEditableBook","ItemEgg","ItemEnchantedBook","ItemEnderEye","ItemEnderPearl","ItemExpBottle","ItemFireball","ItemFirework","ItemFireworkCharge","ItemFishingRod","ItemFlintAndSteel","ItemFood","ItemGlassBottle","ItemHangingEntity","ItemHoe","ItemLead","ItemMapBase","ItemMinecart","ItemMonsterPlacer","ItemNameTag","ItemPotion","ItemRecord","ItemRedstone","ItemReed","ItemSaddle","ItemSeeds","ItemShears","ItemSign","ItemSimpleFoiled","ItemSkull","ItemSnowball","ItemSword","ItemTool","ItemWritableBook","ItemAxe","ItemPickaxe","ItemSpade","ItemBanner","ItemCloth","ItemColored","ItemLeaves","ItemMultiTexture","ItemPiston","ItemSlab","ItemSnow"];
for (i in coreItems) eval(coreItems[i] + "=Java.type(\"net.minecraft.item." + coreItems[i] + "\")"); coreItems = undefined;

//Blocks
coreBlocks = ["Block","BlockAir","BlockAnvil","BlockBanner","BlockBarrier","BlockBasePressurePlate","BlockBeacon","BlockBed","BlockBookshelf","BlockBreakable","BlockBrewingStand","BlockBush","BlockButton","BlockButtonStone","BlockButtonWood","BlockCactus","BlockCake","BlockCarpet","BlockCarrot","BlockCauldron","BlockChest","BlockClay","BlockCocoa","BlockColored","BlockCommandBlock","BlockCompressedPowered","BlockContainer","BlockCrops","BlockDaylightDetector","BlockDeadBush","BlockDirectional","BlockDirt","BlockDispenser","BlockDoor","BlockDoublePlant","BlockDoubleStoneSlab","BlockDoubleStoneSlabNew","BlockDoubleWoodSlab","BlockDragonEgg","BlockDropper","BlockDynamicLiquid","BlockEnchantmentTable","BlockEnderChest","BlockEndPortal","BlockEndPortalFrame","BlockEventData","BlockFalling","BlockFarmland","BlockFence","BlockFenceGate","BlockFire","BlockFlower","BlockFlowerPot","BlockFurnace","BlockGlass","BlockGlowstone","BlockGrass","BlockGravel","BlockHalfStoneSlab","BlockHalfStoneSlabNew","BlockHalfWoodSlab","BlockHardenedClay","BlockHay","BlockHopper","BlockHugeMushroom","BlockIce","BlockJukebox","BlockLadder","BlockLeaves","BlockLeavesBase","BlockLever","BlockLilyPad","BlockLiquid","BlockLog","BlockMelon","BlockMobSpawner","BlockMushroom","BlockMycelium","BlockNetherBrick","BlockNetherrack","BlockNetherWart","BlockNewLeaf","BlockNewLog","BlockNote","BlockObsidian","BlockOldLeaf","BlockOldLog","BlockOre","BlockPackedIce","BlockPane","BlockPistonBase","BlockPistonExtension","BlockPistonMoving","BlockPlanks","BlockPortal","BlockPotato","BlockPressurePlate","BlockPressurePlateWeighted","BlockPrismarine","BlockPumpkin","BlockQuartz","BlockRail","BlockRailBase","BlockRailDetector","BlockRailPowered","BlockRedFlower","BlockRedSandstone","BlockRedstoneComparator","BlockRedstoneDiode","BlockRedstoneLight","BlockRedstoneOre","BlockRedstoneRepeater","BlockRedstoneTorch","BlockRedstoneWire","BlockReed","BlockRotatedPillar","BlockSand","BlockSandStone","BlockSapling","BlockSeaLantern","BlockSign","BlockSilverfish","BlockSkull","BlockSlab","BlockSlime","BlockSnow","BlockSnowBlock","BlockSoulSand","BlockSourceImpl","BlockSponge","BlockStainedGlass","BlockStainedGlassPane","BlockStairs","BlockStandingSign","BlockStaticLiquid","BlockStem","BlockStone","BlockStoneBrick","BlockStoneSlab","BlockStoneSlabNew","BlockTallGrass","BlockTNT","BlockTorch","BlockTrapDoor","BlockTripWire","BlockTripWireHook","BlockVine","BlockWall","BlockWallSign","BlockWeb","BlockWoodSlab","BlockWorkbench","BlockYellowFlower"];
for (i in coreBlocks) eval(coreBlocks[i] + "=Java.type(\"net.minecraft.block." + coreBlocks[i] + "\")"); coreBlocks = undefined;

//GUI
coreGUI = ["ChatLine","FontRenderer","Gui","GuiButton","GuiButtonLanguage","GuiButtonRealmsProxy","GuiChat","GuiClickableScrolledSelectionListProxy","GuiCommandBlock","GuiConfirmOpenLink","GuiControls","GuiCreateFlatWorld","GuiCreateWorld","GuiCustomizeSkin","GuiCustomizeWorldScreen","GuiDisconnected","GuiDownloadTerrain","GuiEnchantment","GuiErrorScreen","GuiFlatPresets","GuiGameOver","GuiHopper","GuiIngame","GuiIngameMenu","GuiKeyBindingList","GuiLabel","GuiLanguage","GuiListButton","GuiListExtended","GuiLockIconButton","GuiMainMenu","GuiMemoryErrorScreen","GuiMerchant","GuiMultiplayer","GuiNewChat","GuiOptionButton","GuiOptions","GuiOptionSlider","GuiOptionsRowList","GuiOverlayDebug","GuiPageButtonList","GuiPlayerTabOverlay","GuiRenameWorld","GuiRepair","GuiResourcePackAvailable","GuiResourcePackList","GuiResourcePackSelected","GuiScreen","GuiScreenAddServer","GuiScreenBook","GuiScreenCustomizePresets","GuiScreenDemo","GuiScreenOptionsSounds","GuiScreenRealmsProxy","GuiScreenResourcePacks","GuiScreenServerList","GuiScreenWorking","GuiSelectWorld","GuiShareToLan","GuiSimpleScrolledSelectionListProxy","GuiSleepMP","GuiSlider","GuiSlot","GuiSlotRealmsProxy","GuiSnooper","GuiSpectator","GuiStreamIndicator","GuiTextField","GuiUtilRenderComponents","GuiVideoSettings","GuiWinGame","GuiYesNo","MapItemRenderer","ScaledResolution","ScreenChatOptions","ServerListEntryLanDetected","ServerListEntryLanScan","ServerListEntryNormal","ServerSelectionList"];
for (i in coreGUI) eval(coreGUI[i] + "=Java.type(\"net.minecraft.client.gui." + coreGUI[i] + "\")"); coreGUI = undefined;

//Containers
coreContainers = ["GuiBeacon","GuiBrewingStand","GuiChest","GuiCrafting","GuiDispenser","GuiFurnace","GuiScreenHorseInventory"];
for (i in coreContainers) eval(coreContainers[i] + "=Java.type(\"net.minecraft.client.gui.inventory." + coreContainers[i] + "\")"); coreContainers = undefined;

//Other
BlockPos = Java.type("net.minecraft.util.BlockPos"); EnumFacing = Java.type("net.minecraft.util.EnumFacing"); Vec3 = Java.type("net.minecraft.util.Vec3"); Vec3i = Java.type("net.minecraft.util.Vec3i"); Vec4b = Java.type("net.minecraft.util.Vec4b"); Vector3d = Java.type("net.minecraft.util.Vector3d"); AxisAlignedBB = Java.type("net.minecraft.util.AxisAlignedBB"); LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
