///engine_flags=-ot=true
var scriptName = "ClickGui";
var scriptVersion = 0.1;
var scriptAuthor = "RedDragon0293";


//net.minecraft.block.*
["Block","BlockAir","BlockAnvil","BlockBanner","BlockBarrier","BlockBasePressurePlate","BlockBeacon","BlockBed","BlockBookshelf","BlockBreakable","BlockBrewingStand","BlockBush","BlockButton","BlockButtonStone","BlockButtonWood","BlockCactus","BlockCake","BlockCarpet","BlockCarrot","BlockCauldron","BlockChest","BlockClay","BlockCocoa","BlockColored","BlockCommandBlock","BlockCompressedPowered","BlockContainer","BlockCrops","BlockDaylightDetector","BlockDeadBush","BlockDirectional","BlockDirt","BlockDispenser","BlockDoor","BlockDoublePlant","BlockDoubleStoneSlab","BlockDoubleStoneSlabNew","BlockDoubleWoodSlab","BlockDragonEgg","BlockDropper","BlockDynamicLiquid","BlockEnchantmentTable","BlockEnderChest","BlockEndPortal","BlockEndPortalFrame","BlockEventData","BlockFalling","BlockFarmland","BlockFence","BlockFenceGate","BlockFire","BlockFlower","BlockFlowerPot","BlockFurnace","BlockGlass","BlockGlowstone","BlockGrass","BlockGravel","BlockHalfStoneSlab","BlockHalfStoneSlabNew","BlockHalfWoodSlab","BlockHardenedClay","BlockHay","BlockHopper","BlockHugeMushroom","BlockIce","BlockJukebox","BlockLadder","BlockLeaves","BlockLeavesBase","BlockLever","BlockLilyPad","BlockLiquid","BlockLog","BlockMelon","BlockMobSpawner","BlockMushroom","BlockMycelium","BlockNetherBrick","BlockNetherrack","BlockNetherWart","BlockNewLeaf","BlockNewLog","BlockNote","BlockObsidian","BlockOldLeaf","BlockOldLog","BlockOre","BlockPackedIce","BlockPane","BlockPistonBase","BlockPistonExtension","BlockPistonMoving","BlockPlanks","BlockPortal","BlockPotato","BlockPressurePlate","BlockPressurePlateWeighted","BlockPrismarine","BlockPumpkin","BlockQuartz","BlockRail","BlockRailBase","BlockRailDetector","BlockRailPowered","BlockRedFlower","BlockRedSandstone","BlockRedstoneComparator","BlockRedstoneDiode","BlockRedstoneLight","BlockRedstoneOre","BlockRedstoneRepeater","BlockRedstoneTorch","BlockRedstoneWire","BlockReed","BlockRotatedPillar","BlockSand","BlockSandStone","BlockSapling","BlockSeaLantern","BlockSign","BlockSilverfish","BlockSkull","BlockSlab","BlockSlime","BlockSnow","BlockSnowBlock","BlockSoulSand","BlockSourceImpl","BlockSponge","BlockStainedGlass","BlockStainedGlassPane","BlockStairs","BlockStandingSign","BlockStaticLiquid","BlockStem","BlockStone","BlockStoneBrick","BlockStoneSlab","BlockStoneSlabNew","BlockTallGrass","BlockTNT","BlockTorch","BlockTrapDoor","BlockTripWire","BlockTripWireHook","BlockVine","BlockWall","BlockWallSign","BlockWeb","BlockWoodSlab","BlockWorkbench","BlockYellowFlower","IGrowable","ITileEntityProvider","material.MapColor","material.Material","material.MaterialLiquid","material.MaterialLogic","material.MaterialPortal","material.MaterialTransparent","properties.IProperty","properties.PropertyBool","properties.PropertyDirection","properties.PropertyEnum","properties.PropertyHelper","properties.PropertyInteger","state.BlockPistonStructureHelper","state.BlockState","state.BlockStateBase","state.BlockWorldState","state.IBlockState","state.pattern.BlockHelper","state.pattern.BlockPattern","state.pattern.BlockStateHelper","state.pattern.FactoryBlockPattern"].forEach(function (v) {eval(v.split(".").pop() + "=Java.type(\"net.minecraft.block." + v + "\")")});

//net.minecraft.client.gui.*
["achievement.GuiAchievement","achievement.GuiAchievements","achievement.GuiStats","inventory.CreativeCrafting","inventory.GuiBeacon","inventory.GuiBrewingStand","inventory.GuiChest","inventory.GuiContainer","inventory.GuiContainerCreative","inventory.GuiCrafting","inventory.GuiDispenser","inventory.GuiEditSign","inventory.GuiFurnace","inventory.GuiInventory","inventory.GuiScreenHorseInventory","spectator.BaseSpectatorGroup","spectator.ISpectatorMenuObject","spectator.ISpectatorMenuRecipient","spectator.ISpectatorMenuView","spectator.PlayerMenuObject","spectator.SpectatorMenu","spectator.categories.SpectatorDetails","spectator.categories.TeleportToPlayer","spectator.categories.TeleportToTeam","stream.GuiIngestServers","stream.GuiStreamOptions","stream.GuiStreamUnavailable","stream.GuiTwitchUserMode","ChatLine","FontRenderer","Gui","GuiButton","GuiButtonLanguage","GuiButtonRealmsProxy","GuiChat","GuiClickableScrolledSelectionListProxy","GuiCommandBlock","GuiConfirmOpenLink","GuiControls","GuiCreateFlatWorld","GuiCreateWorld","GuiCustomizeSkin","GuiCustomizeWorldScreen","GuiDisconnected","GuiDownloadTerrain","GuiEnchantment","GuiErrorScreen","GuiFlatPresets","GuiGameOver","GuiHopper","GuiIngame","GuiIngameMenu","GuiKeyBindingList","GuiLabel","GuiLanguage","GuiListButton","GuiListExtended","GuiLockIconButton","GuiMainMenu","GuiMemoryErrorScreen","GuiMerchant","GuiMultiplayer","GuiNewChat","GuiOptionButton","GuiOptions","GuiOptionSlider","GuiOptionsRowList","GuiOverlayDebug","GuiPageButtonList","GuiPlayerTabOverlay","GuiRenameWorld","GuiRepair","GuiResourcePackAvailable","GuiResourcePackList","GuiResourcePackSelected","GuiScreen","GuiScreenAddServer","GuiScreenBook","GuiScreenCustomizePresets","GuiScreenDemo","GuiScreenOptionsSounds","GuiScreenRealmsProxy","GuiScreenResourcePacks","GuiScreenServerList","GuiScreenWorking","GuiSelectWorld","GuiShareToLan","GuiSimpleScrolledSelectionListProxy","GuiSleepMP","GuiSlider","GuiSlot","GuiSlotRealmsProxy","GuiSnooper","GuiSpectator","GuiStreamIndicator","GuiTextField","GuiUtilRenderComponents","GuiVideoSettings","GuiWinGame","GuiYesNo","MapItemRenderer","ScaledResolution","ScreenChatOptions","ServerListEntryLanDetected","ServerListEntryLanScan","ServerListEntryNormal","ServerSelectionList"].forEach(function (v) {eval(v.split(".").pop() + "=Java.type(\"net.minecraft.client.gui." + v + "\")")});

//net.minecraft.client.renderer.*
["ActiveRenderInfo","BlockFluidRenderer","BlockModelRenderer","BlockModelShapes","BlockRendererDispatcher","ChestRenderer","ChunkRenderContainer","DestroyBlockProgress","EntityRenderer","EnumFaceDirection","GLAllocation","GlStateManager","IImageBuffer","ImageBufferDownload","InventoryEffectRenderer","ItemMeshDefinition","ItemModelMesher","ItemRenderer","OpenGlHelper","RegionRenderCache","RegionRenderCacheBuilder","RenderGlobal","RenderHelper","RenderList","StitcherException","Tessellator","ThreadDownloadImageData","VboRenderList","VertexBufferUploader","ViewFrustum","WorldRenderer","WorldVertexBufferUploader","block.model.BakedQuad","block.model.BlockFaceUV","block.model.BlockPart","block.model.BlockPartFace","block.model.BlockPartRotation","block.model.BreakingFour","block.model.FaceBakery","block.model.ItemCameraTransforms","block.model.ItemModelGenerator","block.model.ItemTransformVec3f","block.model.ModelBlock","block.model.ModelBlockDefinition","block.statemap.BlockStateMapper","block.statemap.DefaultStateMapper","block.statemap.IStateMapper","block.statemap.StateMap","block.statemap.StateMapperBase","chunk.ChunkCompileTaskGenerator","chunk.ChunkRenderDispatcher","chunk.ChunkRenderWorker","chunk.CompiledChunk","chunk.IRenderChunkFactory","chunk.ListChunkFactory","chunk.ListedRenderChunk","chunk.RenderChunk","chunk.SetVisibility","chunk.VboChunkFactory","chunk.VisGraph","culling.ClippingHelper","culling.ClippingHelperImpl","culling.Frustum","culling.ICamera","entity.ArmorStandRenderer","entity.Render","entity.RenderArrow","entity.RenderBat","entity.RenderBiped","entity.RenderBlaze","entity.RenderBoat","entity.RenderCaveSpider","entity.RenderChicken","entity.RenderCow","entity.RenderCreeper","entity.RenderDragon","entity.RenderEnderman","entity.RenderEndermite","entity.RenderEntity","entity.RenderEntityItem","entity.RendererLivingEntity","entity.RenderFallingBlock","entity.RenderFireball","entity.RenderFish","entity.RenderGhast","entity.RenderGiantZombie","entity.RenderGuardian","entity.RenderHorse","entity.RenderIronGolem","entity.RenderItem","entity.RenderLeashKnot","entity.RenderLightningBolt","entity.RenderLiving","entity.RenderMagmaCube","entity.RenderManager","entity.RenderMinecart","entity.RenderMinecartMobSpawner","entity.RenderMooshroom","entity.RenderOcelot","entity.RenderPainting","entity.RenderPig","entity.RenderPigZombie","entity.RenderPlayer","entity.RenderPotion","entity.RenderRabbit","entity.RenderSheep","entity.RenderSilverfish","entity.RenderSkeleton","entity.RenderSlime","entity.RenderSnowball","entity.RenderSnowMan","entity.RenderSpider","entity.RenderSquid","entity.RenderTntMinecart","entity.RenderTNTPrimed","entity.RenderVillager","entity.RenderWitch","entity.RenderWither","entity.RenderWolf","entity.RenderXPOrb","entity.RenderZombie","entity.layers.LayerArmorBase","entity.layers.LayerArrow","entity.layers.LayerBipedArmor","entity.layers.LayerCape","entity.layers.LayerCreeperCharge","entity.layers.LayerCustomHead","entity.layers.LayerDeadmau5Head","entity.layers.LayerEnderDragonDeath","entity.layers.LayerEnderDragonEyes","entity.layers.LayerEndermanEyes","entity.layers.LayerHeldBlock","entity.layers.LayerHeldItem","entity.layers.LayerHeldItemWitch","entity.layers.LayerIronGolemFlower","entity.layers.LayerMooshroomMushroom","entity.layers.LayerRenderer","entity.layers.LayerSaddle","entity.layers.LayerSheepWool","entity.layers.LayerSlimeGel","entity.layers.LayerSnowmanHead","entity.layers.LayerSpiderEyes","entity.layers.LayerVillagerArmor","entity.layers.LayerWitherAura","entity.layers.LayerWolfCollar","texture.AbstractTexture","texture.DynamicTexture","texture.IIconCreator","texture.ITextureObject","texture.ITickable","texture.ITickableTextureObject","texture.LayeredColorMaskTexture","texture.LayeredTexture","texture.SimpleTexture","texture.Stitcher","texture.TextureAtlasSprite","texture.TextureClock","texture.TextureCompass","texture.TextureManager","texture.TextureMap","texture.TextureUtil","tileentity.RenderEnderCrystal","tileentity.RenderItemFrame","tileentity.RenderWitherSkull","tileentity.TileEntityBannerRenderer","tileentity.TileEntityBeaconRenderer","tileentity.TileEntityChestRenderer","tileentity.TileEntityEnchantmentTableRenderer","tileentity.TileEntityEnderChestRenderer","tileentity.TileEntityEndPortalRenderer","tileentity.TileEntityItemStackRenderer","tileentity.TileEntityMobSpawnerRenderer","tileentity.TileEntityPistonRenderer","tileentity.TileEntityRendererDispatcher","tileentity.TileEntitySignRenderer","tileentity.TileEntitySkullRenderer","tileentity.TileEntitySpecialRenderer","vertex.DefaultVertexFormats","vertex.VertexBuffer","vertex.VertexFormat","vertex.VertexFormatElement"].forEach(function (v) {eval(v.split(".").pop() + "=Java.type(\"net.minecraft.client.renderer." + v + "\")")}); 

//net.minecraft.entity.*
["DataWatcher","Entity","EntityAgeable","EntityBodyHelper","EntityCreature","EntityFlying","EntityHanging","EntityLeashKnot","EntityList","EntityLiving","EntityLivingBase","EntityMinecartCommandBlock","EntitySpawnPlacementRegistry","EntityTracker","EntityTrackerEntry","EnumCreatureAttribute","EnumCreatureType","IEntityLivingData","IEntityMultiPart","IEntityOwnable","IMerchant","INpc","IProjectile","IRangedAttackMob","NpcMerchant","SharedMonsterAttributes","ai.EntityAIArrowAttack","ai.EntityAIAttackOnCollide","ai.EntityAIAvoidEntity","ai.EntityAIBase","ai.EntityAIBeg","ai.EntityAIBreakDoor","ai.EntityAIControlledByPlayer","ai.EntityAICreeperSwell","ai.EntityAIDefendVillage","ai.EntityAIDoorInteract","ai.EntityAIEatGrass","ai.EntityAIFindEntityNearest","ai.EntityAIFindEntityNearestPlayer","ai.EntityAIFleeSun","ai.EntityAIFollowGolem","ai.EntityAIFollowOwner","ai.EntityAIFollowParent","ai.EntityAIHarvestFarmland","ai.EntityAIHurtByTarget","ai.EntityAILeapAtTarget","ai.EntityAILookAtTradePlayer","ai.EntityAILookAtVillager","ai.EntityAILookIdle","ai.EntityAIMate","ai.EntityAIMoveIndoors","ai.EntityAIMoveThroughVillage","ai.EntityAIMoveToBlock","ai.EntityAIMoveTowardsRestriction","ai.EntityAIMoveTowardsTarget","ai.EntityAINearestAttackableTarget","ai.EntityAIOcelotAttack","ai.EntityAIOcelotSit","ai.EntityAIOpenDoor","ai.EntityAIOwnerHurtByTarget","ai.EntityAIOwnerHurtTarget","ai.EntityAIPanic","ai.EntityAIPlay","ai.EntityAIRestrictOpenDoor","ai.EntityAIRestrictSun","ai.EntityAIRunAroundLikeCrazy","ai.EntityAISit","ai.EntityAISwimming","ai.EntityAITarget","ai.EntityAITargetNonTamed","ai.EntityAITasks","ai.EntityAITempt","ai.EntityAITradePlayer","ai.EntityAIVillagerInteract","ai.EntityAIVillagerMate","ai.EntityAIWander","ai.EntityAIWatchClosest","ai.EntityAIWatchClosest2","ai.EntityJumpHelper","ai.EntityLookHelper","ai.EntityMinecartMobSpawner","ai.EntityMoveHelper","ai.EntitySenses","ai.RandomPositionGenerator","ai.attributes.AttributeModifier","ai.attributes.BaseAttribute","ai.attributes.BaseAttributeMap","ai.attributes.IAttribute","ai.attributes.IAttributeInstance","ai.attributes.ModifiableAttributeInstance","ai.attributes.RangedAttribute","ai.attributes.ServersideAttributeMap","boss.BossStatus","boss.EntityDragon","boss.EntityDragonPart","boss.EntityWither","boss.IBossDisplayData","effect.EntityLightningBolt","effect.EntityWeatherEffect","item.EntityArmorStand","item.EntityBoat","item.EntityEnderCrystal","item.EntityEnderEye","item.EntityEnderPearl","item.EntityExpBottle","item.EntityFallingBlock","item.EntityFireworkRocket","item.EntityItem","item.EntityItemFrame","item.EntityMinecart","item.EntityMinecartChest","item.EntityMinecartContainer","item.EntityMinecartEmpty","item.EntityMinecartFurnace","item.EntityMinecartHopper","item.EntityMinecartTNT","item.EntityPainting","item.EntityTNTPrimed","item.EntityXPOrb","monster.EntityBlaze","monster.EntityCaveSpider","monster.EntityCreeper","monster.EntityEnderman","monster.EntityEndermite","monster.EntityGhast","monster.EntityGiantZombie","monster.EntityGolem","monster.EntityGuardian","monster.EntityIronGolem","monster.EntityMagmaCube","monster.EntityMob","monster.EntityPigZombie","monster.EntitySilverfish","monster.EntitySkeleton","monster.EntitySlime","monster.EntitySnowman","monster.EntitySpider","monster.EntityWitch","monster.EntityZombie","monster.IMob","passive.EntityAmbientCreature","passive.EntityAnimal","passive.EntityBat","passive.EntityChicken","passive.EntityCow","passive.EntityHorse","passive.EntityMooshroom","passive.EntityOcelot","passive.EntityPig","passive.EntityRabbit","passive.EntitySheep","passive.EntitySquid","passive.EntityTameable","passive.EntityVillager","passive.EntityWaterMob","passive.EntityWolf","passive.IAnimals","player.EntityPlayer","player.EntityPlayerMP","player.EnumPlayerModelParts","player.InventoryPlayer","player.PlayerCapabilities","projectile.EntityArrow","projectile.EntityEgg","projectile.EntityFireball","projectile.EntityFishHook","projectile.EntityLargeFireball","projectile.EntityPotion","projectile.EntitySmallFireball","projectile.EntitySnowball","projectile.EntityThrowable","projectile.EntityWitherSkull"].forEach(function (v) {eval(v.split(".").pop() + "=Java.type(\"net.minecraft.entity." + v + "\")")});

//net.minecraft.init.*
["Blocks","Bootstrap","Items"].forEach(function (v) {eval(v + "=Java.type(\"net.minecraft.init." + v + "\")")});

//net.minecraft.item.*
["EnumAction","EnumDyeColor","EnumRarity","Item","ItemAnvilBlock","ItemAppleGold","ItemArmor","ItemArmorStand","ItemAxe","ItemBanner","ItemBed","ItemBlock","ItemBoat","ItemBook","ItemBow","ItemBucket","ItemBucketMilk","ItemCarrotOnAStick","ItemCloth","ItemCoal","ItemColored","ItemDoor","ItemDoublePlant","ItemDye","ItemEditableBook","ItemEgg","ItemEmptyMap","ItemEnchantedBook","ItemEnderEye","ItemEnderPearl","ItemExpBottle","ItemFireball","ItemFirework","ItemFireworkCharge","ItemFishFood","ItemFishingRod","ItemFlintAndSteel","ItemFood","ItemGlassBottle","ItemHangingEntity","ItemHoe","ItemLead","ItemLeaves","ItemLilyPad","ItemMap","ItemMapBase","ItemMinecart","ItemMonsterPlacer","ItemMultiTexture","ItemNameTag","ItemPickaxe","ItemPiston","ItemPotion","ItemRecord","ItemRedstone","ItemReed","ItemSaddle","ItemSeedFood","ItemSeeds","ItemShears","ItemSign","ItemSimpleFoiled","ItemSkull","ItemSlab","ItemSnow","ItemSnowball","ItemSoup","ItemSpade","ItemStack","ItemSword","ItemTool","ItemWritableBook","crafting.CraftingManager","crafting.FurnaceRecipes","crafting.IRecipe","crafting.RecipeBookCloning","crafting.RecipeFireworks","crafting.RecipeRepairItem","crafting.RecipesArmor","crafting.RecipesArmorDyes","crafting.RecipesBanners","crafting.RecipesCrafting","crafting.RecipesDyes","crafting.RecipesFood","crafting.RecipesIngots","crafting.RecipesMapCloning","crafting.RecipesMapExtending","crafting.RecipesTools","crafting.RecipesWeapons","crafting.ShapedRecipes","crafting.ShapelessRecipes"].forEach(function (v) {eval(v.split(".").pop() + "=Java.type(\"net.minecraft.item." + v + "\")")});

//net.minecraft.network.*
["EnumConnectionState","EnumPacketDirection","INetHandler","NetHandlerPlayServer","NettyCompressionDecoder","NettyCompressionEncoder","NettyEncryptingDecoder","NettyEncryptingEncoder","NettyEncryptionTranslator","NetworkManager","NetworkSystem","Packet","PacketBuffer","PacketThreadUtil","PingResponseHandler","ServerStatusResponse","ThreadQuickExitException","handshake.INetHandlerHandshakeServer","handshake.client.C00Handshake","login.INetHandlerLoginClient","login.INetHandlerLoginServer","login.client.C00PacketLoginStart","login.client.C01PacketEncryptionResponse","login.server.S00PacketDisconnect","login.server.S01PacketEncryptionRequest","login.server.S02PacketLoginSuccess","login.server.S03PacketEnableCompression","play.INetHandlerPlayClient","play.INetHandlerPlayServer","play.client.C00PacketKeepAlive","play.client.C01PacketChatMessage","play.client.C02PacketUseEntity","play.client.C03PacketPlayer","play.client.C07PacketPlayerDigging","play.client.C08PacketPlayerBlockPlacement","play.client.C09PacketHeldItemChange","play.client.C0APacketAnimation","play.client.C0BPacketEntityAction","play.client.C0CPacketInput","play.client.C0DPacketCloseWindow","play.client.C0EPacketClickWindow","play.client.C0FPacketConfirmTransaction","play.client.C10PacketCreativeInventoryAction","play.client.C11PacketEnchantItem","play.client.C12PacketUpdateSign","play.client.C13PacketPlayerAbilities","play.client.C14PacketTabComplete","play.client.C15PacketClientSettings","play.client.C16PacketClientStatus","play.client.C17PacketCustomPayload","play.client.C18PacketSpectate","play.client.C19PacketResourcePackStatus","play.server.S00PacketKeepAlive","play.server.S01PacketJoinGame","play.server.S02PacketChat","play.server.S03PacketTimeUpdate","play.server.S04PacketEntityEquipment","play.server.S05PacketSpawnPosition","play.server.S06PacketUpdateHealth","play.server.S07PacketRespawn","play.server.S08PacketPlayerPosLook","play.server.S09PacketHeldItemChange","play.server.S0APacketUseBed","play.server.S0BPacketAnimation","play.server.S0CPacketSpawnPlayer","play.server.S0DPacketCollectItem","play.server.S0EPacketSpawnObject","play.server.S0FPacketSpawnMob","play.server.S10PacketSpawnPainting","play.server.S11PacketSpawnExperienceOrb","play.server.S12PacketEntityVelocity","play.server.S13PacketDestroyEntities","play.server.S14PacketEntity","play.server.S18PacketEntityTeleport","play.server.S19PacketEntityHeadLook","play.server.S19PacketEntityStatus","play.server.S1BPacketEntityAttach","play.server.S1CPacketEntityMetadata","play.server.S1DPacketEntityEffect","play.server.S1EPacketRemoveEntityEffect","play.server.S1FPacketSetExperience","play.server.S20PacketEntityProperties","play.server.S21PacketChunkData","play.server.S22PacketMultiBlockChange","play.server.S23PacketBlockChange","play.server.S24PacketBlockAction","play.server.S25PacketBlockBreakAnim","play.server.S26PacketMapChunkBulk","play.server.S27PacketExplosion","play.server.S28PacketEffect","play.server.S29PacketSoundEffect","play.server.S2APacketParticles","play.server.S2BPacketChangeGameState","play.server.S2CPacketSpawnGlobalEntity","play.server.S2DPacketOpenWindow","play.server.S2EPacketCloseWindow","play.server.S2FPacketSetSlot","play.server.S30PacketWindowItems","play.server.S31PacketWindowProperty","play.server.S32PacketConfirmTransaction","play.server.S33PacketUpdateSign","play.server.S34PacketMaps","play.server.S35PacketUpdateTileEntity","play.server.S36PacketSignEditorOpen","play.server.S37PacketStatistics","play.server.S38PacketPlayerListItem","play.server.S39PacketPlayerAbilities","play.server.S3APacketTabComplete","play.server.S3BPacketScoreboardObjective","play.server.S3CPacketUpdateScore","play.server.S3DPacketDisplayScoreboard","play.server.S3EPacketTeams","play.server.S3FPacketCustomPayload","play.server.S40PacketDisconnect","play.server.S41PacketServerDifficulty","play.server.S42PacketCombatEvent","play.server.S43PacketCamera","play.server.S44PacketWorldBorder","play.server.S45PacketTitle","play.server.S46PacketSetCompressionLevel","play.server.S47PacketPlayerListHeaderFooter","play.server.S48PacketResourcePackSend","play.server.S49PacketUpdateEntityNBT","rcon.RConConsoleSource","status.INetHandlerStatusClient","status.INetHandlerStatusServer","status.client.C00PacketServerQuery","status.client.C01PacketPing","status.server.S00PacketServerInfo","status.server.S01PacketPong"].forEach(function (v) {eval(v.split(".").pop() + "=Java.type(\"net.minecraft.network." + v + "\")")});

//net.minecraft.util.*
["AxisAlignedBB","BlockPos","Cartesian","ChatAllowedCharacters","ChatComponentProcessor","ChatComponentScore","ChatComponentSelector","ChatComponentStyle","ChatComponentText","ChatComponentTranslation","ChatComponentTranslationFormatException","ChatStyle","ClassInheritanceMultiMap","CombatEntry","CombatTracker","CryptManager","DamageSource","EnchantmentNameParts","EntityDamageSource","EntityDamageSourceIndirect","EntitySelectors","EnumChatFormatting","EnumFacing","EnumParticleTypes","EnumTypeAdapterFactory","EnumWorldBlockLayer","FoodStats","FrameTimer","HttpUtil","IChatComponent","IJsonSerializable","IntegerCache","IntHashMap","IObjectIntIterable","IProgressUpdate","IRegistry","IStringSerializable","IThreadListener","ITickable","JsonSerializableSet","JsonUtils","LazyLoadBase","LoggingPrintStream","LongHashMap","MapPopulator","MathHelper","Matrix4f","MessageDeserializer","MessageDeserializer2","MessageSerializer","MessageSerializer2","MinecraftError","MouseFilter","MouseHelper","MovementInput","MovementInputFromOptions","MovingObjectPosition","ObjectIntIdentityMap","RegistryDefaulted","RegistryNamespaced","RegistryNamespacedDefaultedByKey","RegistrySimple","ReportedException","ResourceLocation","Rotations","ScreenShotHelper","Session","StatCollector","StringTranslate","StringUtils","ThreadSafeBoundList","Timer","Tuple","TupleIntJsonSerializable","Util","Vec3","Vec3i","Vec4b","Vector3d","WeightedRandom","WeightedRandomChestContent","WeightedRandomFishable"].forEach(function (v) {eval(v + "=Java.type(\"net.minecraft.util." + v + "\")")});

//net.ccbluex.liquidbounce.utils.*
["CPSCounter","ClassUtils","ClientUtils","EntityUtils","InventoryUtils","MinecraftInstance","MovementUtils","PathUtils","RaycastUtils","RollingArrayLongBuffer","Rotation","RotationUtils","ServerUtils","SettingsUtils","TabUtils","block.BlockUtils","block.PlaceInfo","extensions.BlockExtensionKt","extensions.PlayerExtensionKt","item.ArmorComparator","item.ArmorPiece","item.ItemUtils","login.LoginUtils","login.MinecraftAccount","login.UserUtils","misc.FallingPlayer","misc.HttpUtils","misc.MiscUtils","misc.RandomUtils","misc.StringUtils","render.AnimationUtils","render.ColorUtils","render.IconUtils","render.ParticleUtils","render.RenderUtils","render.shader.FramebufferShader","render.shader.Shader","render.shader.shaders.BackgroundShader","render.shader.shaders.GlowShader","render.shader.shaders.OutlineShader","timer.MSTimer","timer.TickTimer","timer.TimeUtils"].forEach(function (v) {eval(v.split(".").pop() + "=Java.type(\"net.ccbluex.liquidbounce.utils." + v + "\")")});

//net.ccbluex.liquidbounce.value.*
["BlockValue", "BoolValue", "FloatValue", "FontValue", "IntegerValue", "ListValue", "TextValue", "Value"].forEach(function (v) {eval(v + "=Java.type(\"net.ccbluex.liquidbounce.value." + v + "\")")});

//others
Keyboard = Java.type("org.lwjgl.input.Keyboard"); 
Timer = Java.type("java.util.Timer"); 
List = Java.type("java.util.List"); 

//opengl
var GL11 = Java.type("org.lwjgl.opengl.GL11");
var GL12 = Java.type("org.lwjgl.opengl.GL12");
var GL20 = Java.type("org.lwjgl.opengl.GL20");
var GL32 = Java.type("org.lwjgl.opengl.GL32");
var GL40 = Java.type("org.lwjgl.opengl.GL40");

var Font = Java.type("java.awt.Font");
var FileInputStream = Java.type("java.io.FileInputStream")
var File = Java.type("java.io.File")
var AWTFontRenderer = Java.type('net.ccbluex.liquidbounce.ui.font.AWTFontRenderer');
var GameFontRenderer = Java.type("net.ccbluex.liquidbounce.ui.font.GameFontRenderer")
var CommandManager = Java.type('net.ccbluex.liquidbounce.features.command.CommandManager');
var ModuleCategory = Java.type("net.ccbluex.liquidbounce.features.module.ModuleCategory"); 
var ClickGui = Java.type('net.ccbluex.liquidbounce.ui.client.clickgui.ClickGui');
var ScriptModule = Java.type("net.ccbluex.liquidbounce.script.api.ScriptModule");
var Module = Java.type('net.ccbluex.liquidbounce.features.module.Module');
var Command = Java.type('net.ccbluex.liquidbounce.features.command.Command');
var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce"); 
var Script = Java.type("net.ccbluex.liquidbounce.script.Script");
var Fonts = Java.type("net.ccbluex.liquidbounce.ui.font.Fonts");
var font35 = Fonts.font35;
var font40 = Fonts.font40;

var LinkedHashMap = Java.type("java.util.LinkedHashMap"); 
var JOptionPane = Java.type("javax.swing.JOptionPane"); 
var FileUtils = Java.type("org.apache.commons.io.FileUtils");

var PositionedSoundRecord = Java.type("net.minecraft.client.audio.PositionedSoundRecord")
var IInventory = Java.type('net.minecraft.inventory.IInventory');
var I18n = Java.type('net.minecraft.client.resources.I18n');

var PotionEffect = Java.type('net.minecraft.potion.PotionEffect');
var Minecraft = Java.type('net.minecraft.client.Minecraft');
var Potion = Java.type('net.minecraft.potion.Potion');

var Lists = Java.type('com.google.common.collect.Lists');
var Collection = Java.type('java.util.Collection');
var ArrayList = Java.type('java.util.ArrayList');
var Mouse = Java.type('org.lwjgl.input.Mouse');
var Arrays = Java.type('java.util.Arrays');
var Random = Java.type('java.util.Random');
var Color = Java.type('java.awt.Color');

var Class = Java.type('java.lang.Class');
Constructor = Java.type("java.lang.reflect.Constructor"); 
Modifier = Java.type("java.lang.reflect.Modifier"); 
var javaInteger = Java.type("java.lang.Integer");
var javaObject = Java.type('java.lang.Object');
var javaDouble = Java.type("java.lang.Double");
var javaFloat = Java.type("java.lang.Float");
Field = Java.type("java.lang.reflect.Field"); 
Runnable = Java.type("java.lang.Runnable"); 
var System = Java.type('java.lang.System');
Thread = Java.type("java.lang.Thread"); 

var StringSelection = Java.type("java.awt.datatransfer.StringSelection");
var ScaledResolution = Java.type("net.minecraft.client.gui.ScaledResolution");
var Toolkit = Java.type("java.awt.Toolkit");

// Copies something to the clipboard
function copyToClipboard(string) {
    var stringSelection = new StringSelection(string);
    var clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
    clipboard.setContents(stringSelection, null);
}

// Returns the scaled width of the game
function getScaledWidth() {
    var scaledWidth = new ScaledResolution(mc).getScaledWidth();

    return scaledWidth;
}

// Returns the scaled height of the game
function getScaledHeight() {
    var scaledHeight = new ScaledResolution(mc).getScaledHeight();

    return scaledHeight;
}

var categories = ["Combat", "Player", "Movement", "Render", "World", "Misc", "Exploit", "Fun", "Scripts", "Targets", "Settings"];
var currentCategory = 0;
var currentModule;
var categoryFont = new GameFontRenderer(getFont("Roboto-Medium.ttf", 40));

var modulesList = [];
var renderingModule = [];
var moduleButtonList = [];
//System.out.println(GameFontRenderer);
//System.out.println(Font);
var descriptionFont = new GameFontRenderer(getFont("Roboto-Medium.ttf", 26));
var moduleFont = new GameFontRenderer(getFont("Roboto-Light.ttf", 50));
var valueFont = new GameFontRenderer(getFont("Roboto-Medium.ttf", 35));
var titleFont = new GameFontRenderer(getFont("Roboto-Bold.ttf", 100));
var windowX1, windowY1;
var dWheel, baseDiffy = 0;
var targetElements = [new GuiTargetElement("Players"), new GuiTargetElement("Mobs"), new GuiTargetElement("Animals"), new GuiTargetElement("Invisible"), new GuiTargetElement("Dead")];
var scriptElements;
var moduleElements;

var MyGuiScreen = Java.extend(GuiScreen);
var MyGuiBotton = Java.extend(GuiButton);

var GuiCategoryButton = Java.extend(GuiButton, {func_146112_a /*drawButton*/: function(mc, mouseX, mouseY) {}});

function reloadElementList() {
	var modules1 = LiquidBounce.moduleManager.getModules().toArray();
	moduleButtonList = [];
    for (var i in modules1) {
        moduleButtonList.push(new GuiModuleElement(modules1[i]));
	}
	var scriptsList = new ArrayList(Module);
	var scripts = LiquidBounce.scriptManager.scripts;
	for(i in scripts) {
		var scriptModules = getField(Script, "registeredModules").get(scripts[i]);
		for(var j in scriptModules)
			scriptsList.add(scriptModules[j]);
	}
	
	scriptElements = moduleButtonList.filter(function(currentValue, indedx, arr) {
		if(scriptsList.contains(currentValue.module)) {
			return true;
		}
	});
}

function getCategoryModule(category) {
	switch(category) {
		case 8:         //Script
		/*
		var tempList = [];
		var scriptsList = new ArrayList(Module);
		var scripts = LiquidBounce.scriptManager.scripts;
		for(var i in scripts) {
			var scriptModules = getField(Script, "registeredModules").get(scripts[i]);
			for(var j in scriptModules)
				scriptsList.add(scriptModules[j]);
		}
		tempList = moduleButtonList.filter(function(currentValue, indedx, arr) {
			if(scriptsList.contains(currentValue.module)) {
				return true;
			}
		});
		*/
		return scriptElements;
		
		case 9:        //Target
		return targetElements;
		
		default:
		var tempList = [];
		for(var i in moduleButtonList)
			if(moduleButtonList[i].module.getCategory() == categories[category].toUpperCase())
				tempList.push(moduleButtonList[i]);
		return tempList;
	}
}

var myClickGui = new MyGuiScreen() {
	opened: false, GUI_WIDTH: 600, GUI_HEIGHT: 300,
	func_73866_w_: function() { //initGui
		windowX1 = forceFloat(myClickGui.width / 2) - forceFloat(this.GUI_WIDTH / 2);
		windowY1 = forceFloat(myClickGui.height / 2) - forceFloat(this.GUI_HEIGHT / 2);
		
		var closeX = windowX1 + this.GUI_WIDTH - 7 - 4;
		var closeY = windowY1 + 7 - 4;
		var closeButton = new MyGuiBotton(1, forceInt(closeX), forceInt(closeY), 8, 8, "Close") {
			func_146112_a: function(mc, mouseX, mouseY) { //drawButton
				pre2D();
				if(closeButton.visible) {
					var hovered = (mouseX >= closeButton.xPosition && mouseY >= closeButton.yPosition &&
							mouseX < closeButton.xPosition + closeButton.width && mouseY < closeButton.yPosition + closeButton.height);
					getField(GuiButton, "field_146123_n")/*hovered*/.set(closeButton, hovered);
					drawCircle(closeX + 4, closeY + 4, 4, Color.RED.getRGB());
					getMethod(GuiButton, "func_146119_b")/*mouseDragged*/.invoke(closeButton, mc, mouseX, mouseY);
					GlStateManager.resetColor();
				}
				post2D();
			}};
		var myButtonList = getField(GuiScreen, "field_146292_n").get(myClickGui);
		myButtonList.add(closeButton);
		for(var i = 0, j = 11; i < categories.length; i++, j++) {
			myButtonList.add(new GuiCategoryButton(j, windowX1 + 2, windowY1 + 5 + 23 * i + 40, 52, 19, categories[i]));
		}
		getField(GuiScreen, "field_146292_n").set(myClickGui, myButtonList);
		renderingModule = getCategoryModule(currentCategory);
	},
	func_73863_a: function(mouseX, mouseY, partialTicks) { //drawScreen
		GL11.glPushMatrix();
		pre2D();
		windowX1 = forceFloat(myClickGui.width / 2) - forceFloat(this.GUI_WIDTH / 2);
		windowY1 = forceFloat(myClickGui.height / 2) - forceFloat(this.GUI_HEIGHT / 2);
		drawRoundedRectBorder(windowX1-9, windowY1-9, windowX1 + this.GUI_WIDTH+9, windowY1 + this.GUI_HEIGHT+9, 8, 10, new Color(253, 253, 253, 255).getRGB());
		drawRoundedRect(windowX1, windowY1, windowX1 + this.GUI_WIDTH, windowY1 + this.GUI_HEIGHT, 8, getRGB(239, 235, 255, 255));
        //主页面
		drawRect(windowX1 + 56 - 8, windowY1, windowX1 + 56, windowY1 + this.GUI_HEIGHT, new Color(253, 253, 253, 255).getRGB());
        drawRoundedRect(windowX1, windowY1, windowX1 + 56, windowY1 + this.GUI_HEIGHT, 8, new Color(253, 253, 253, 255).getRGB());
        //Catagory 背景
		drawRoundedRect(windowX1 + 2, forceInt(windowY1 + 23 * currentCategory + 5 + 40), windowX1 + 56 - 2, forceInt(windowY1 + 23 * (1 + currentCategory) + 1 + 40), 8, new Color(0, 111, 255, 200).getRGB());
		//显示当前选中的Category的蓝色背景
		
		drawRect(windowX1 + 12, windowY1 + 6, windowX1 + 12 + 16, windowY1 + 6 + 16, getRGB(0, 111, 255));
		drawCircle(windowX1 + 12 + 16, windowY1 + 6 + 16, 16, getRGB(0, 111, 255));
		//水影logo
		dWheel = forceFloat(Mouse.getDWheel() / 7)
		if (dWheel)
			if(mouseX > windowX1 + 56 + 2 && mouseX < windowX1 + 56 + 2 + 160 + 8 && mouseY > windowY1 + 5 && mouseY < windowY1 + this.GUI_HEIGHT - 5) {
				baseDiffy += dWheel;
				if (baseDiffy < -(renderingModule.length) * 40 + this.GUI_HEIGHT)
                    baseDiffy = -(renderingModule.length) * 40 + this.GUI_HEIGHT;
				if (baseDiffy > 0)
					baseDiffy = 0;
			}
		
		drawRect(windowX1 + 56 + 2 + 160 + 8, windowY1, windowX1 + 56 + 2 + 160 + 8 + 5, windowY1 + this.GUI_HEIGHT, new Color(253, 253, 253, 255).getRGB());
		GL11.glEnable(GL11.GL_SCISSOR_TEST);
		glScissor(windowX1 + 56 + 2, windowY1 + 5, windowX1 + 56 + 2 + 160 + 8, windowY1 + this.GUI_HEIGHT - 5);
		for(i in renderingModule) {
			module = renderingModule[i];
			module.drawBox(windowX1 + 66, windowY1 + 5 + (i * 40) + baseDiffy);
		}
		post2D();
		AWTFontRenderer.assumeNonVolatile = true;
		GlStateManager.disableBlend();
		GlStateManager.color(1.0, 1.0, 1.0, 1.0);
		
		for(i in renderingModule) {
			var module = renderingModule[i];
			module.drawText(windowX1 + 66, windowY1 + 5 + (i * 40) + baseDiffy);
		}
		GL11.glDisable(GL11.GL_SCISSOR_TEST);
		GL11.glPopMatrix();
		for(i in categories) {
			var str = categories[i];
			font40.drawString(str, forceInt(windowX1 + (56 - font40.getStringWidth(str)) / 2), forceInt(windowY1 + 11 + i * 23 + 40), (i === currentCategory ) ? getRGB(250, 250, 250) : getRGB(80, 80, 80));
			//显示Category的字符串
		}
		AWTFontRenderer.assumeNonVolatile = false;
		
		if(currentModule) {
			var valueList = currentModule.getValues();
				if(valueList.length) {
					for(var i in valueList) {
						var vaule = valueList[i];
						if (!vaule) continue;
						if(vaule instanceof BlockValue) {

						}
						if(value instanceof IntegerValue) {
							
						}
					}
				}
				//chat.print("drawModuleScreen");
		}
		
		for(i = 0; i < getField(GuiScreen, "field_146292_n").get(myClickGui).size(); ++i) {
            (getField(GuiScreen, "field_146292_n").get(myClickGui).get(i)).drawButton(mc, mouseX, mouseY);
        }
	},
	func_73864_a: function(mouseX, mouseY, mouseButton) { //mouseClicked
		if(mouseButton === 0) {
            for (i = 0; i < getField(GuiScreen, "field_146292_n").get(myClickGui).size(); ++i) {
                var guibutton = getField(GuiScreen, "field_146292_n").get(myClickGui).get(i);
                if (guibutton.mousePressed(mc, mouseX, mouseY)) {
                    getField(GuiScreen, "field_146290_a").set(myClickGui, guibutton);
                    guibutton.playPressSound(mc.getSoundHandler());
                    this.func_146284_a(guibutton);
                }
            }
        }
		for(var i in renderingModule) {
			var module = renderingModule[i];
			if(module.visible)
				module.mouseClicked(mouseX, mouseY, mouseButton);
		}
	},
	func_146284_a: function(button) { //actionPerformed
		switch(button.id) {
			case 1:
			mc.displayGuiScreen(null);
			break;
			default:
			if(currentCategory !== button.id - 11) {
				currentCategory = button.id - 11;
				renderingModule = getCategoryModule(currentCategory);
				baseDiffy = 0;
			}
			break;
		}
		
	},
	func_73869_a: function(typedChar, keyCode) { //keyTyped
		if(keyCode === 1)
        {
            mc.displayGuiScreen(null);

            if (mc.currentScreen == null)
            {
                mc.setIngameFocus();
            }
        }
		if(keyCode === 41 && mc.currentScreen instanceof MyGuiScreen && this.opened) {
			this.opened = false;
			mc.displayGuiScreen(null);
            if (mc.currentScreen == null) {
                mc.setIngameFocus();
            }
			
		}
		if(keyCode === 41 && mc.currentScreen instanceof MyGuiScreen && !this.opened) {
			this.opened = true;
		}
	},
	func_146281_b: function() { //onGuiClosed
		this.opened = false;
	},
	func_73868_f: function () { //doesGuiPauseGame
        return false;
    }
}



function CustomClickGui() {
    this.getName = function() {
        return "ClickGu1";
    }
    this.getDescription = function() {
        return "This module has been created using LiquidBounce's scripting API.";
    }
    this.getCategory = function() {
        return "Render";// Combat, Exploit, Fun, Misc, Movement, Player, Render, World
    }
	this.onKey = function(e) {
		var pressedKey = e.getKey();
		if(pressedKey === 41) {
			try {
				mc.displayGuiScreen(myClickGui);
			}catch(e) {
				e.printStackTrace();
				mc.displayGuiScreen(null);
			}
		}
	}
	this.onEnable = function() {
		reloadElementList();
	}
	this.onDisable = function() {
		if(mc.currentScreen instanceof MyGuiScreen) {
			mc.displayGuiScreen(null);
		}
	}
}

var customClickGui = new CustomClickGui();
var customClickGuiClient;

function onLoad() {
	reloadElementList();
}

function onEnable() {
    customClickGuiClient = moduleManager.registerModule(customClickGui);
}

function onDisable() {
    moduleManager.unregisterModule(customClickGuiClient);
}

//-----------------------------------------------------------------------------------------//
var GUI_WIDTH = 600, GUI_HEIGHT = 300;

function visible(x, y) {
	return (y + moduleFont.FONT_HEIGHT + 12 > windowY1 + 5) && (y < windowY1 + GUI_HEIGHT - 5);
}
function GuiModuleElement(module) {
	this.module = module;
	this.visible = false;
	this.x = 0;
	this.y = 0;
	this.buttonList = [];
	this.drawBox = function(x, y) {
		this.x = x;
		this.y = y;
		if(this.visible = visible(x, y)) {
			drawRoundedRect(x, y, x + 150, y + moduleFont.FONT_HEIGHT + 12, 8, getRGB(253, 253, 253));
			//drawString(moduleFont, this.module.getName(), forceInt(x + 6), forceInt(y + 8), getColor(25, 25, 25));
			drawRoundedRect(x + 150 - 5 - 18, y + 7, x + 150 - 5, y + 7 + 10, 5, (this.module.state) ? getRGB(0, 111, 250) : getRGB(117, 117, 117)); //条
			drawCircle((this.module.state) ? x + 150 - 5 - 5 : x + 150 - 5 - 18 + 5,
					y + 12, 4, Color.WHITE.getRGB()); //按钮
		}
	}
	this.drawText = function(x, y) {
		if(this.visible) {
			moduleFont.drawString(this.module.getName(), forceInt(x + 6), forceInt(y + 8), new Color(25, 25, 25).getRGB());
		}
	}
	this.mouseClicked = function(mouseX, mouseY, button) {
		if(mouseX > this.x && mouseX < this.x + 150 && mouseY > this.y && mouseY < this.y + moduleFont.FONT_HEIGHT + 12) {
			if(mouseX > this.x + 150 - 5 - 18 && mouseX < this.x + 150 - 5 && mouseY > this.y + 7 && mouseY < this.y + 7 + 10 && button == 0) {
				mc.getSoundHandler().playSound(PositionedSoundRecord.create(new ResourceLocation("gui.button.press"), 1.0)); //声音
				this.module.setState(!this.module.state);
				return;
			}
			if(button === 0) {
				mc.getSoundHandler().playSound(PositionedSoundRecord.create(new ResourceLocation("gui.button.press"), 1.0)); //声音
				currentModule = this.module;
			}
			else if(button === 1) {
				mc.getSoundHandler().playSound(PositionedSoundRecord.create(new ResourceLocation("random.bow"), 1.0));
				chat.print("setKeybind");
			}
		}
	}
}

function GuiButtonElement(name, state) {
	this.name = name;
	this.state = state;
	this.visible = false;
	this.drawBox = function(x, y) {
		if(this.visible = visible(x, y)) {
			drawRoundedRect(x, y, x + 150, y + moduleFont.FONT_HEIGHT + 12, 8, getRGB(253, 253, 253));
			drawRoundedRect(x + 150 - 5 - 18, y + 7, x + 150 - 5, y + 7 + 10, 5, (this.state) ? getRGB(0, 111, 250) : getRGB(117, 117, 117)); //条
			drawCircle((this.state) ? x + 150 - 5 - 5 : x + 150 - 5 - 18 + 5,
					y + 12, 4, Color.WHITE.getRGB()); //按钮
		}
	}
	this.drawText = function(x, y) {
		if(this.visible) {
			moduleFont.drawString(this.name, forceInt(x + 6), forceInt(y + 8), getRGB(25, 25, 25));
		}
	}
	this.mouseClicked = function(mouseX, mouseY, button) {
		if(mouseX >= this.x && mouseX <= this.x + 150 && mouseY >= this.y && mouseY <= this.y + moduleFont.FONT_HEIGHT + 12) {
			if(mouseX >= this.x + 150 - 5 - 18 && mouseX <= this.x + 150 - 5 && mouseY >= this.y + 7 && mouseY <= this.y + 7 + 10 && button == 0) {
				mc.getSoundHandler().playSound(PositionedSoundRecord.create(new ResourceLocation("gui.button.press"), 1.0)); //声音
				this.state = !this.state;
			}
		}
	}
}

function GuiTargetElement(name) {
	this.target = name;
	this.visible = false;
	var state;
	switch(this.target) {
		case "Players":
		this.type = "targetPlayer";
		break;
		case "Mobs":
		this.type = "targetMobs";
		break;
		case "Animals":
		this.type = "targetAnimals";
		break
		case "Invisible":
		this.type = "targetInvisible";
		break;
		case "Dead":
		this.type = "targetDead";
		break;
	}
	state = EntityUtils[this.type];
	this.x = 0;
	this.y = 0;
	this.drawBox = function(x, y) {
		this.x = x;
		this.y = y;
		if(this.visible = visible(x, y)) {
			drawRoundedRect(x, y, x + 150, y + moduleFont.FONT_HEIGHT + 12, 8, getRGB(253, 253, 253));
			//moduleFont.
			drawRoundedRect(x + 150 - 5 - 18, y + 7, x + 150 - 5, y + 7 + 10, 5, (state) ? getRGB(0, 111, 250) : getRGB(117, 117, 117)); //条
			drawCircle((state) ? x + 150 - 5 - 5 : x + 150 - 5 - 18 + 5,
					y + 12, 4, Color.WHITE.getRGB()); //按钮
		}
	}
	this.drawText = function(x, y) {
		if(this.visible) {
			moduleFont.drawString(this.target, forceInt(x + 6), forceInt(y + 8), getRGB(25, 25, 25));
		}
	}
	this.mouseClicked = function(mouseX, mouseY, button) {
		if(mouseX >= this.x && mouseX <= this.x + 150 && mouseY >= this.y && mouseY <= this.y + moduleFont.FONT_HEIGHT + 12) {
			if(mouseX >= this.x + 150 - 5 - 18 && mouseX <= this.x + 150 - 5 && mouseY >= this.y + 7 && mouseY <= this.y + 7 + 10 && button == 0) {
				mc.getSoundHandler().playSound(PositionedSoundRecord.create(new ResourceLocation("gui.button.press"), 1.0)); //声音
				EntityUtils[this.type] = !EntityUtils[this.type];
				state = EntityUtils[this.type];
			}
		}
	}
}

//----------------------------------------------------------------------------------------------//

Math.trunc = function (v) {
    v = +v;
    return (v - v % 1) || (!isFinite(v) || v === 0 ? v : v < 0 ? -0 : 0);
};

Math.toRadians = function (degrees) {
    return degrees * Math.PI / 180;
};

Math.toDegrees = function (radians) {
    return radians * 180 / Math.PI;
};

Math.sum = function () {
    var num = 0;
    for (var i in arguments) {
        num += arguments[i] || 0;
    };
    return num;
};
Math.sqrts = function () {
    var num = 0;
    for (var i in arguments) {
        num += arguments[i] * arguments[i] || 0;
    };
    return Math.sqrt(num);
};

Number.prototype.getSqrt = function () {
    return Math.sqrt(this);
};

Number.prototype.pow = function (y) {
    return Math.pow(this, y);
};
var javaInteger = Java.type("java.lang.Integer")
var javaFloat = Java.type("java.lang.Float")
var javaDouble = Java.type("java.lang.Double")
var MathHelper = Java.type("net.minecraft.util.MathHelper")
Number.prototype.toInteger = function () {
    return (this = new javaInteger(this))
};

Number.prototype.toFloat = function(){
    return (this = new javaFloat(this))
}

Number.prototype.toDouble = function(){
    return (this = new javaDouble(this))
}

Math.getRandom = function(min,max) {
    return min+Math.random()*(max-min)
}

Number.prototype.isBetween = function (a,b) {
    return a<this && this<b
}

Object.defineProperty(Array.prototype, "find", {

    value: function (func, returnIndex) {

        for (i in this) if (func(this[i])) return returnIndex ? i : this[i];

        return returnIndex ? -1 : null;

        //return this.filter(function (e) {return func(e)})[0];

    }

});

function forceInt(num) {
	return new javaInteger(num);
}
function forceFloat(num) {
	return new javaFloat(num);
}
function forceDouble(num) {
	return new javaDouble(num);
}

function getMethod(clazz, methodName) {
    (_method = Java.from(clazz.class.getDeclaredMethods()).find(function (m) m.getName() == methodName)).setAccessible(true);
	//_method = clazz.class.getDeclaredMethod(methodName).setAccessible(true);
    return _method;

}

function getField(clazz, fieldName) {
    (_field = Java.from(clazz.class.getDeclaredFields()).find(function (f) f.getName() == fieldName)).setAccessible(true);
	//_field = clazz.class.getDeclaredField(fieldName).setAccessible(true);
    return _field;

}

function getRGB() {
    if (arguments.length == 3) return new Color(new javaInteger(arguments[0]), new javaInteger(arguments[1]), new javaInteger(arguments[2])).getRGB()
    if (arguments.length == 4) return new Color(new javaInteger(arguments[0]), new javaInteger(arguments[1]), new javaInteger(arguments[2]), new javaInteger(arguments[3])).getRGB()
    return new Color(255,255,255,255).getRGB()
}

function getFont(fontName, size) {
    try {
        var inputStream = new FileInputStream(new File(LiquidBounce.fileManager.fontsDir, fontName));
        var awtClientFont = Font.createFont(Font.TRUETYPE_FONT, inputStream);
        awtClientFont = awtClientFont.deriveFont(Font.PLAIN, size);
        inputStream.close();
        return awtClientFont;
    } catch (e) {
        e.printStackTrace();
		//Java.type("java.lang.System").out.println()
		//chat.print(Font);
        return new Font("default", Font.PLAIN, size);
		//return null;
    }
}

function glScissor(x1, y1, x2, y2) {
    var width = Math.abs(x1 - x2) * 2
    var height = Math.abs(y1 - y2) * 2
    var xStart = Math.min(x1, x2) * 2
    var yStart = (getScaledHeight() - Math.max(y1, y2)) * 2
    GL11.glScissor(xStart, yStart, width, height)
}

function pre3D() {
    GL11.glPushMatrix();
    GL11.glEnable(GL11.GL_BLEND);
    GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
    GL11.glShadeModel(GL11.GL_SMOOTH);
    GL11.glDisable(GL11.GL_TEXTURE_2D);
    GL11.glEnable(GL11.GL_LINE_SMOOTH);
    GL11.glDisable(GL11.GL_DEPTH_TEST);
    GL11.glDisable(GL11.GL_LIGHTING);
    GL11.glDepthMask(false);
    GL11.glHint(GL11.GL_LINE_SMOOTH_HINT, GL11.GL_NICEST);
}
function post3D() {
	GL11.glDepthMask(true);
    GL11.glEnable(GL11.GL_DEPTH_TEST);
	GL11.glDisable(GL11.GL_LINE_SMOOTH);
	GL11.glEnable(GL11.GL_TEXTURE_2D);
	GL11.glDisable(GL11.GL_BLEND);
	GL11.glPopMatrix();
	GL11.glColor4f(1, 1, 1, 1);
}

function pre2D() {
	GL11.glEnable(GL11.GL_BLEND);
	//GL11.glEnable(GL11.GL_ALPHA);
    GL11.glDisable(GL11.GL_TEXTURE_2D);
    GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
    GL11.glEnable(GL11.GL_LINE_SMOOTH);
    GL11.glLineWidth(1);
}

function post2D() {
    GL11.glEnable(GL11.GL_TEXTURE_2D);
    GL11.glDisable(GL11.GL_BLEND);
	//GL11.glDisable(GL11.GL_ALPHA);
    GL11.glDisable(GL11.GL_LINE_SMOOTH);
}

// Draws a rect on the screen.
function drawRect(paramXStart, paramYStart, paramXEnd, paramYEnd, color) {
    var alpha = (color >> 24 & 0xFF) / 255;
    var red = (color >> 16 & 0xFF) / 255;
    var green = (color >> 8 & 0xFF) / 255;
    var blue = (color & 0xFF) / 255;

    GL11.glColor4f(red, green, blue, alpha);
    GL11.glBegin(GL11.GL_QUADS);
    GL11.glVertex2d(paramXEnd, paramYStart);
    GL11.glVertex2d(paramXStart, paramYStart);
    GL11.glVertex2d(paramXStart, paramYEnd);
    GL11.glVertex2d(paramXEnd, paramYEnd);

    GL11.glEnd();
}

function drawRoundedRectBorder(paramXStart, paramYStart, paramXEnd, paramYEnd, radius, thickness, color) {
    var alpha = (color >> 24 & 0xFF) / 255.0;
    var red = (color >> 16 & 0xFF) / 255.0;
    var green = (color >> 8 & 0xFF) / 255.0;
    var blue = (color & 0xFF) / 255.0;
	
	GL11.glColor4f(red, green, blue, alpha);
	
	var half = thickness >> 1;
	half += half / 2;
	var x1 = paramXStart + radius + half;
	var y1 = paramYStart + radius + half;
	var x2 = paramXEnd - radius - half;
	var y2 = paramYEnd - radius - half;
	/*
    GL11.glBegin(GL11.GL_POLYGON);
	GL11.glVertex2d(x1, paramYStart);
	GL11.glVertex2d(x1, paramYStart + thickness);
	GL11.glVertex2d(x2, paramYStart + thickness);
	GL11.glVertex2d(x2, paramYStart);
	GL11.glEnd(); //上
	
	GL11.glBegin(GL11.GL_POLYGON);
	for(var i = 91; i <= 180; i++) {
		GL11.glVertex2d(x2 + Math.cos(i * Math.PI / 180) * radius, y2 + Math.sin(i * Math.PI / 180) * radius);
		GL11.glVertex2d(x2 + Math.cos(i * Math.PI / 180) * (radius - thickness), y2	+ Math.sin(i * Math.PI / 180) * (radius - thickness));
		
	} 
	GL11.glEnd(); //右上
	
	GL11.glBegin(GL11.GL_POLYGON);
	GL11.glVertex2d(paramXEnd - thickness, y1);
	GL11.glVertex2d(paramXEnd, y1);
	GL11.glVertex2d(paramXEnd, y2);
	GL11.glVertex2d(paramXEnd - thickness, y2);
	GL11.glEnd(); //右
	
	GL11.glBegin(GL11.GL_POLYGON);
	for(var i = 1; i <= 90; i++) {
		GL11.glVertex2d(x2 + Math.cos(i * Math.PI / 180) * radius, y2 + Math.sin(i * Math.PI / 180) * radius);
		GL11.glVertex2d(x2 + Math.cos(i * Math.PI / 180) * (radius - thickness), y2	+ Math.sin(i * Math.PI / 180) * (radius - thickness));
		
	} 
	GL11.glEnd(); //右下
	*/
	var degree = Math.PI / 180;
    GL11.glLineWidth(thickness);
    GL11.glBegin(GL11.GL_LINE_LOOP);
    for (var i = 0; i <= 90; i++)
        GL11.glVertex2d(x2 + Math.sin(i * degree) * radius, y2 + Math.cos(i * degree) * radius);
    for (var i = 90; i <= 180; i++)
        GL11.glVertex2d(x2 + Math.sin(i * degree) * radius, y1 + Math.cos(i * degree) * radius);
    for (var i = 180; i <= 270; i++)
        GL11.glVertex2d(x1 + Math.sin(i * degree) * radius, y1 + Math.cos(i * degree) * radius);
    for (var i = 270; i <= 360; i++)
        GL11.glVertex2d(x1 + Math.sin(i * degree) * radius, y2 + Math.cos(i * degree) * radius);
	GL11.glEnd();
    GL11.glLineWidth(1);
}

function drawRoundedRect(paramXStart, paramYStart, paramXEnd, paramYEnd, radius, color) {
    var alpha = (color >> 24 & 0xFF) / 255;
    var red = (color >> 16 & 0xFF) / 255;
    var green = (color >> 8 & 0xFF) / 255;
    var blue = (color & 0xFF) / 255;
	var x1 = paramXStart + radius;
	var y1 = paramYStart + radius;
	var x2 = paramXEnd - radius;
	var y2 = paramYEnd - radius;
	GL11.glColor4f(red, green, blue, alpha);
    GL11.glBegin(GL11.GL_POLYGON);
	
    var degree = Math.PI / 180;
    for (var i = 0; i <= 90; i++)
        GL11.glVertex2d(x2 + Math.sin(i * degree) * radius, y2 + Math.cos(i * degree) * radius);
    for (var i = 90; i <= 180; i++)
        GL11.glVertex2d(x2 + Math.sin(i * degree) * radius, y1 + Math.cos(i * degree) * radius);
    for (var i = 180; i <= 270; i++)
        GL11.glVertex2d(x1 + Math.sin(i * degree) * radius, y1 + Math.cos(i * degree) * radius);
    for (var i = 270; i <= 360; i++)
        GL11.glVertex2d(x1 + Math.sin(i * degree) * radius, y2 + Math.cos(i * degree) * radius);
    GL11.glEnd();
}

// Draws a circle on the screen.
function drawCircle(paramX, paramY, radius, color) {
    var alpha = (color >> 24 & 0xFF) / 255;
    var red = (color >> 16 & 0xFF) / 255;
    var green = (color >> 8 & 0xFF) / 255;
    var blue = (color & 0xFF) / 255;

    GL11.glColor4f(red, green, blue, alpha);
    GL11.glBegin(GL11.GL_POLYGON);
    for (var i = 0; i < 360; i++)
        GL11.glVertex2d(paramX + Math.sin(i * Math.PI / 180) * radius, paramY + Math.cos(i * Math.PI / 180) * radius);
    GL11.glEnd();
}
