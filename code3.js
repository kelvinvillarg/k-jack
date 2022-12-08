gdjs.DeathCode = {};
gdjs.DeathCode.GDBGObjects1= [];
gdjs.DeathCode.GDBGObjects2= [];
gdjs.DeathCode.GDCrashedkayakObjects1= [];
gdjs.DeathCode.GDCrashedkayakObjects2= [];
gdjs.DeathCode.GDAccidentmessageObjects1= [];
gdjs.DeathCode.GDAccidentmessageObjects2= [];
gdjs.DeathCode.GDRetryObjects1= [];
gdjs.DeathCode.GDRetryObjects2= [];

gdjs.DeathCode.conditionTrue_0 = {val:false};
gdjs.DeathCode.condition0IsTrue_0 = {val:false};
gdjs.DeathCode.condition1IsTrue_0 = {val:false};
gdjs.DeathCode.condition2IsTrue_0 = {val:false};


gdjs.DeathCode.mapOfGDgdjs_46DeathCode_46GDRetryObjects1Objects = Hashtable.newFrom({"Retry": gdjs.DeathCode.GDRetryObjects1});
gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.DeathCode.GDBGObjects1);

gdjs.DeathCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DeathCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.DeathCode.GDBGObjects1[i].getX() > -(277) ) {
        gdjs.DeathCode.condition0IsTrue_0.val = true;
        gdjs.DeathCode.GDBGObjects1[k] = gdjs.DeathCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.DeathCode.GDBGObjects1.length = k;}if (gdjs.DeathCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathCode.GDBGObjects1 */
{for(var i = 0, len = gdjs.DeathCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDBGObjects1[i].setX(gdjs.DeathCode.GDBGObjects1[i].getX() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(15)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.DeathCode.GDBGObjects1);

gdjs.DeathCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.DeathCode.GDBGObjects1.length;i<l;++i) {
    if ( gdjs.DeathCode.GDBGObjects1[i].getX() == -(277) ) {
        gdjs.DeathCode.condition0IsTrue_0.val = true;
        gdjs.DeathCode.GDBGObjects1[k] = gdjs.DeathCode.GDBGObjects1[i];
        ++k;
    }
}
gdjs.DeathCode.GDBGObjects1.length = k;}if (gdjs.DeathCode.condition0IsTrue_0.val) {
/* Reuse gdjs.DeathCode.GDBGObjects1 */
{for(var i = 0, len = gdjs.DeathCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.DeathCode.GDBGObjects1[i].setX(gdjs.DeathCode.GDBGObjects1[i].getX() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 15));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.DeathCode.GDRetryObjects1);

gdjs.DeathCode.condition0IsTrue_0.val = false;
gdjs.DeathCode.condition1IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.DeathCode.mapOfGDgdjs_46DeathCode_46GDRetryObjects1Objects, runtimeScene, true, false);
}if ( gdjs.DeathCode.condition0IsTrue_0.val ) {
{
gdjs.DeathCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.DeathCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{


gdjs.DeathCode.condition0IsTrue_0.val = false;
{
gdjs.DeathCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.DeathCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "y2mate.com - 8 Bit Chillout Chill Dreamy Game Music by HeatleyBros_320kbps.mp3", 0, true, 35, 1);
}}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDBGObjects1.length = 0;
gdjs.DeathCode.GDBGObjects2.length = 0;
gdjs.DeathCode.GDCrashedkayakObjects1.length = 0;
gdjs.DeathCode.GDCrashedkayakObjects2.length = 0;
gdjs.DeathCode.GDAccidentmessageObjects1.length = 0;
gdjs.DeathCode.GDAccidentmessageObjects2.length = 0;
gdjs.DeathCode.GDRetryObjects1.length = 0;
gdjs.DeathCode.GDRetryObjects2.length = 0;

gdjs.DeathCode.eventsList0(runtimeScene);

return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
