var scriptName = "AntiGayScript";
var scriptAuthor = "Nolegit";
var scriptVersion = 1.0;

var LiquidBounce = Java.type("net.ccbluex.liquidbounce.LiquidBounce");
var ButtonElement = Java.type("net.ccbluex.liquidbounce.ui.client.clickgui.elements.ButtonElement");
var Panel = Java.type("net.ccbluex.liquidbounce.ui.client.clickgui.Panel");

var localSettingsButtons = [];
var shouldDelete = [];
var shouldOverwrite = [];

var LocalFiles = LiquidBounce.fileManager.settingsDir.listFiles();
var RetardSafe = value.createBoolean("RetardSafe", false);

var Timer = Java.type("java.util.Timer");

function setTimeout(func, milliseconds) {
    var timer = new Timer("setTimeout", true);
    timer.schedule(function() { 
        func();
    }, milliseconds);

    return timer;
}



function createLocalSettingsButton(name) {
	
	var length = localSettingsButtons.length;
	localSettingsButtons[length] = new (Java.extend(ButtonElement))(name) {
		mouseClicked: function(mouseX, mouseY, mouseButton) {
			if (localSettingsButtons[length].isHovering(mouseX, mouseY)) {
				switch (mouseButton) {
					case 0:
						commandManager.executeCommand(".localconfig load " + name);
					break;
						
					case 1:
						if (RetardSafe.get() ? shouldOverwrite[2 * length] : true) {
							commandManager.executeCommand(".localconfig save " + name);
							shouldOverwrite[2 * length] = false;
							if (RetardSafe.get()) {
								shouldOverwrite[2 * length + 1].cancel();
							}
						} else {
							chat.print("§8[§9§lLiquidBounce§8] §aAre you sure you want to overwrite the config §c'" + name + "'§a? Right-click again!");
							shouldOverwrite[2 * length] = true;
							shouldOverwrite[2 * length + 1] = setTimeout(function() {
								shouldOverwrite[2 * length] = false;
							}, 1500);
						}
						
					break;
					
					case 2:
						if (RetardSafe.get() ? shouldDelete[2 * length] : true) {
							commandManager.executeCommand(".localconfig delete " + name);
							shouldDelete[2 * length] = false;
							if (RetardSafe.get()) {
								shouldDelete[2 * length + 1].cancel();
							}
						} else {
							chat.print("§8[§9§lLiquidBounce§8] §aAre you sure you want to delete the config §c'" + name + "'§a? Mid-click again!");
							shouldDelete[2 * length] = true;
							shouldDelete[2 * length + 1] = setTimeout(function() {
								shouldDelete[2 * length] = false;
							}, 1500);
						}
						
					break;
				}
			}
		}
	}
	return localSettingsButtons[length];
}

//Aftery is really cool men))
var APanel = Java.extend(Panel, { setupItems: function() {} });
var localSettingsPanel = APanel.class.getConstructors()[0].newInstance("AntiGayScript", 1, 1, 100, 18, true);

function LocalSettingsList() {

	var UsePanel = value.createBoolean("UsePanel", false);
	var isPanelEnabled = false;
	var hasLoadedPanel = false;
	var prevLocalListLength = LocalFiles.length;
	var LocalListLength = LocalFiles.length;
	
	this.getName = function() {
        return "AntiGayScript";
    };

   
    this.getDescription = function() {
        return "Panel that shows your local settings";
    };
	
	this.addValues = function(values) {
		values.add(UsePanel);
		values.add(RetardSafe);
	}

    this.getCategory = function() {
        return "Misc";
    };
	
	this.onEnable = function() {
		hasLoadedPanel = false;
		prevLocalListLength = LocalFiles.length;
		LocalListLength = LocalFiles.length;	
	};
	
	this.onDisable = function() {
		setTimeout(function() {
			commandManager.executeCommand(".t AntiGayScript")
		}, 20);
	};
	
	
	this.onUpdate = function() {
		if (LiquidBounce.clickGui != null && UsePanel.get()) {
			LocalFiles = LiquidBounce.fileManager.settingsDir.listFiles();
			LocalListLength = LocalFiles.length;
			
			if (!isPanelEnabled) {
				isPanelEnabled = true;
				LiquidBounce.clickGui.panels.add(localSettingsPanel);
			} else if (!hasLoadedPanel) {
				hasLoadedPanel = true;
				shouldDelete.length = 0;
				shouldOverwrite.length = 0;
				
				
				var localsettingsElements = localSettingsPanel.getElements();
				for (i in localsettingsElements) {
					
					localSettingsPanel.getElements().remove(localsettingsElements[0]);
				}
			
				for (i in LocalFiles) {
					localSettingsPanel.getElements().add(createLocalSettingsButton(LocalFiles[i].getName()));
					shouldDelete.push(false, 0);
					shouldOverwrite.push(false, 0);
				}
			}
			
			if (hasLoadedPanel && LocalListLength != prevLocalListLength) {
				prevLocalListLength = LocalListLength;
				hasLoadedPanel = false;
			}
			
		} else if (LiquidBounce.clickGui != null && !UsePanel.get()) {
			isPanelEnabled = false;
			LiquidBounce.clickGui.panels.remove(localSettingsPanel);
		} 
    };
	   
}

var localsettingslist = new LocalSettingsList();
var localsettingslistClient;

function onEnable() {
    localsettingslistClient = moduleManager.registerModule(localsettingslist);
	setTimeout(function() {
			commandManager.executeCommand(".t AntiGayScript")
		}, 1500);
}

function onDisable() {
	LiquidBounce.clickGui.panels.remove(localSettingsPanel);
    moduleManager.unregisterModule(localsettingslist);
}
