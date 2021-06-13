var Packets = []
var Cross = CheckCross();
var classProvider = Cross[0];
	function CleanPacket(clean) {
		if (Packets.length > 0 && !clean) {
			for (var i in Packets) {
				SendPacket(Packets[i]);
			}
			Packets = [];
			return true;
		}
		Packets = [];
		return clean;
	}
function SendPacket(packet) {
	try {
		try {
			imc.getNetHandler().addToSendQueue(packet);
		} catch (err) {
			mc.netHandler.networkManager.sendPacket(packet);
		}
	} catch (err) {
		mc.getNetHandler().addToSendQueue(packet);
	}
}
function CheckCross() {
	var classProvider, Version, Cross = true;
	try {
		classProvider = LiquidBounce.INSTANCE.getWrapper().getClassProvider();
		Version = Java.type("net.ccbluex.liquidbounce.injection.backend.Backend").MINECRAFT_VERSION;
	} catch (err) {
		classProvider = {
			isCPacketAnimation: function (packet) {
				return packet instanceof C0APacketAnimation;
			},
			isCPacketEntityAction: function (packet) {
				return packet instanceof C0BPacketEntityAction;
			},
			isCPacketUseEntity: function (packet) {
				return packet instanceof C02PacketUseEntity;
			},		
			isCPacketPlayer: function (packet) {
				return packet instanceof C03PacketPlayer;
			},
			isCPacketPlayerPosition: function (packet) {
				return packet instanceof C04PacketPlayerPosition;
			},
			isCPacketPlayerPosLook: function (packet) {
				return packet instanceof C05PacketPlayerLook;
			},
			isCPacketPlayerBlockPlacement: function (packet) {
				return packet instanceof C08PacketPlayerBlockPlacement;
			},
			isSPacketPlayerPosLook: function (packet) {
				return packet instanceof S08PacketPlayerPosLook;
			},
			isCPacketPlayerPosLook: function (packet) {
				return packet instanceof C06PacketPlayerPosLook;
			},	
			createCPacketCloseWindow: function () {
				return new C0DPacketCloseWindow();
			},
			createCPacketUseEntity: function (entity, Action) {
				return new C02PacketUseEntity(entity, Action);
			},
			createCPacketPlayerPosition: function (X, Y, Z, Ground) {
				return new C04PacketPlayerPosition(X, Y, Z, Ground);
			},
			createCPacketPlayerDigging: function (Action, Pos, Facing) {
				return new C07PacketPlayerDigging(Action, Pos, Facing);
			},
			createCPacketPlayerBlockPlacement: function (Position, PlacedBlockDirection, Stack, FacingX, FacingY, FacingZ) {
				return PlacedBlockDirection == null ? new C08PacketPlayerBlockPlacement(Position) : new C08PacketPlayerBlockPlacement(Position, PlacedBlockDirection, Stack, FacingX, FacingY, FacingZ);
			},
			createCPacketClientStatus: function (State) {
				return new C16PacketClientStatus(State);
			},
			isItemSword: function (Item) {
				return Item instanceof ItemSword;
			}
		}
		Cross = false;
		Version = '1.8.9';
	} finally {
		return [classProvider, Cross, Version];
	}
};

 0 