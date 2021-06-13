var script = registerScript({
    name: "HealthHUD",
    version: "1.0",
    authors: ["Liulihaocai"]
}); 

var Color = Java.type("java.awt.Color");
var ScaledResolution = Java.type("net.minecraft.client.gui.ScaledResolution");
var GL11 = Java.type("org.lwjgl.opengl.GL11");
var Integer = Java.type("java.lang.Integer")

script.registerModule({
    name: "HealthHUD",
    category: "Render",
    description: "Low Health Warning",
    settings:{
        r: Setting.integer({
            name: "Red",
            default: 255,
            min: 0,
            max: 255
        }),
        g: Setting.integer({
            name: "Green",
            default: 0,
            min: 0,
            max: 255
        }),
        b: Setting.integer({
            name: "Blue",
            default: 0,
            min: 0,
            max: 255
        }),
        a: Setting.integer({
            name: "Alpha",
            default: 150,
            min: 0,
            max: 255
        }),
        bold: Setting.integer({
            name: "Bold",
            default: 20,
            min: 3,
            max: 40
        }),
        hp: Setting.integer({
            name: "HP",
            default: 7,
            min: 1,
            max: 20
        }),
    }
}, function(module) {
    var mcWidth,mcHeight;
    module.on("update",function(){
        var displayWidth=mc.displayWidth,displayHeight=mc.displayHeight,scaleFactor=1;
        var guiScale = mc.gameSettings.guiScale;
        while (scaleFactor < guiScale && displayWidth / (scaleFactor + 1) >= 320 && displayHeight / (scaleFactor + 1) >= 240){
            ++scaleFactor;
        }
        if (mc.isUnicode() && scaleFactor % 2 != 0 && scaleFactor != 1){
            --scaleFactor;
        }
        mcWidth=new Integer(Math.ceil(displayWidth/scaleFactor));
        mcHeight=new Integer(Math.ceil(displayHeight/scaleFactor));
    })
    module.on("render2D", function() {
        if(mc.thePlayer.getHealth()<module.settings.hp.get()){
            var col=new Color(module.settings.r.get(),module.settings.g.get(),module.settings.b.get(),module.settings.a.get()).getRGB();
            var bold=module.settings.bold.get();
            drawRect(0,bold,bold,mcHeight,col);
            drawRect(0,0,mcWidth,bold,col);
            drawRect(mcWidth-bold,bold,mcWidth,mcHeight,col);
            drawRect(bold,mcHeight-bold,mcWidth-bold,mcHeight,col);
        }
    })
});

function drawRect(paramXStart, paramYStart, paramXEnd, paramYEnd, color) {
    var alpha = (color >> 24 & 0xFF) / 255;
    var red = (color >> 16 & 0xFF) / 255;
    var green = (color >> 8 & 0xFF) / 255;
    var blue = (color & 0xFF) / 255;
    GL11.glEnable(GL11.GL_BLEND);
    GL11.glDisable(GL11.GL_TEXTURE_2D);
    GL11.glBlendFunc(GL11.GL_SRC_ALPHA, GL11.GL_ONE_MINUS_SRC_ALPHA);
    GL11.glEnable(GL11.GL_LINE_SMOOTH);
    GL11.glPushMatrix();
    GL11.glColor4f(red, green, blue, alpha);
    GL11.glBegin(GL11.GL_TRIANGLE_FAN);
    GL11.glVertex2d(paramXEnd, paramYStart);
    GL11.glVertex2d(paramXStart, paramYStart);
    GL11.glVertex2d(paramXStart, paramYEnd);
    GL11.glVertex2d(paramXEnd, paramYEnd);
    GL11.glEnd();
    GL11.glPopMatrix();
    GL11.glEnable(GL11.GL_TEXTURE_2D);
    GL11.glDisable(GL11.GL_BLEND);
    GL11.glDisable(GL11.GL_LINE_SMOOTH);
    GL11.glColor4f(1, 1, 1, 1);
}