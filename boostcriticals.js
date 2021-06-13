var scriptName = "BoostCriticals";
var scriptVersion = 1.0;
var scriptAuthor = "RanYu_";

var NMSLCopyerLeaker;
var NMSLCopyerLeaker = new OC();
function OC () {
	this.getName = function() {
		return "BoostCriticals";
};

	this.getDescription = function() {
		return "AACP criticals bypass by YayDev|Acid配置染雨制作举报抄袭加群914406701";
	};
	
	this.getCategory = function() {
		return "Combat";
	};
	
	
}
function onEnable() {
	OC = moduleManager.registerModule(NMSLCopyerLeaker);
};

function onDisable() {
	moduleManager.unregistermodule(NMSLCopyerLeaker);
};