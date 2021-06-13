var scriptName = "ChatFlood"; 
var scriptVersion = 1.0; 
var scriptAuthor = "soulplexis";

var chatFlood = new ChatFlood();
var chatFloodClient;

function string(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function randomIntFrom(min,max) // Get a random integer from [min] to [max] 
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function ChatFlood() {
    this.getName = function() {
        return "ChatFlood";
    };

    this.getDescription = function() {
        return "Floods chat with useless characters.";
    };

    this.getCategory = function() {
        return "Misc";
    };

    this.onUpdate = function() {
		chat.print("§" + string(randomIntFrom(32,256)));
	}
	this.onDisable = function() {
	}
}

function onLoad() {
};

function onEnable() {
    chatFloodClient = moduleManager.registerModule(chatFlood);
};

function onDisable() {
    moduleManager.unregisterModule(chatFloodClient);
};