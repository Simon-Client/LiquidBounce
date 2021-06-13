var scriptName = "OldBlockAnimation";
var scriptVersion = 1.0;
var scriptAuthor = ["Sherry","Bruhh"];

animation = value.createInteger("Animation", 3, 0, 7),
vibration = value.createFloat("Vibration", 0, 0, 5),
fake = value.createBoolean("Fake", false)
var target

function Mainz() {
  this.getName = function () {
    return "OldBlockAnimation";
  };
  this.getDescription = function () {
    return "make a BlockAnimation";
  };
  this.getCategory = function () {
    return "Fun";
  };
  this.onEnable = function () {      
  };
  this.onUpdate = function () {
  }
  this.onMotion=function(){
    if(fake.get()){
      mc.thePlayer.swingProgress = [0.52, 0.58, 0.64, 0.7, 0.76, 0.82, 0.88, 0.94][animation.get()]
      mc.thePlayer.prevSwingProgress = mc.thePlayer.swingProgress - (0.01 * vibration.get())
    }
    if(mc.thePlayer.isBlocking()){
      mc.thePlayer.swingProgress = [0.52, 0.58, 0.64, 0.7, 0.76, 0.82, 0.88, 0.94][animation.get()]
      mc.thePlayer.prevSwingProgress = mc.thePlayer.swingProgress - (0.01 * vibration.get())
    } }
  this.addValues=function(values){
    values.add(animation)
    values.add(vibration)
    values.add(fake)
  }
}

var Mainz = new Mainz();

var Clientz;

function onLoad(){}

function onEnable(){
  Clientz = moduleManager.registerModule(Mainz);
}

function onDisable() {
  moduleManager.unregisterModule(Clientz);
}