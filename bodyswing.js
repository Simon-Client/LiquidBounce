var scriptName = "BodySwing";
var scriptVersion = 1.0;
var scriptAuthor = "Minger";

var NoCol;
var oco = new NL();
function NL () {
    this.getName = function() {
        return "BodySwing";
    };

    this.getDescription = function() {
        return "By Minger 23333.";
    };
   
    this.getCategory = function() {
        return "Fun";
    };
    this.onUpdate = function() {

        mc.thePlayer.renderYawOffset = randomNum(0,720);
        mc.thePlayer.rotationYawHead = 80;
        mc.thePlayer.limbSwingAmount = randomNum(0,100);
       
            

    }   
}
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return parseInt(Math.random()*minNum+1,10);
        break;
        case 2:
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
        break;
            default:
                return 0;
            break;
    }
}
function onLoad() {
   
}
function onEnable() {
    NoCol = moduleManager.registerModule(oco);
};
function onDisable() {
    moduleManager.unregisterModule(NoCol);
};