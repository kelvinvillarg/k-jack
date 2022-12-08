gdjs.LevelCode = {};
gdjs.LevelCode.GDBGObjects1= [];
gdjs.LevelCode.GDBGObjects2= [];
gdjs.LevelCode.GDBackgroundObjects1= [];
gdjs.LevelCode.GDBackgroundObjects2= [];
gdjs.LevelCode.GDTurbo1000Objects1= [];
gdjs.LevelCode.GDTurbo1000Objects2= [];
gdjs.LevelCode.GDKardanEvoObjects1= [];
gdjs.LevelCode.GDKardanEvoObjects2= [];
gdjs.LevelCode.GDArgotTSXObjects1= [];
gdjs.LevelCode.GDArgotTSXObjects2= [];
gdjs.LevelCode.GDTopLandObjects1= [];
gdjs.LevelCode.GDTopLandObjects2= [];
gdjs.LevelCode.GDBottomLandObjects1= [];
gdjs.LevelCode.GDBottomLandObjects2= [];
gdjs.LevelCode.GDCrocsObjects1= [];
gdjs.LevelCode.GDCrocsObjects2= [];
gdjs.LevelCode.GDRockObjects1= [];
gdjs.LevelCode.GDRockObjects2= [];
gdjs.LevelCode.GDTreeObjects1= [];
gdjs.LevelCode.GDTreeObjects2= [];
gdjs.LevelCode.GDNewSpriteObjects1= [];
gdjs.LevelCode.GDNewSpriteObjects2= [];
gdjs.LevelCode.GDNewTextObjects1= [];
gdjs.LevelCode.GDNewTextObjects2= [];
gdjs.LevelCode.GDNewSprite2Objects1= [];
gdjs.LevelCode.GDNewSprite2Objects2= [];

gdjs.LevelCode.conditionTrue_0 = {val:false};
gdjs.LevelCode.condition0IsTrue_0 = {val:false};
gdjs.LevelCode.condition1IsTrue_0 = {val:false};


gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDTurbo1000Objects1Objects = Hashtable.newFrom({"Turbo1000": gdjs.LevelCode.GDTurbo1000Objects1});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDTopLandObjects1ObjectsGDgdjs_46LevelCode_46GDBottomLandObjects1ObjectsGDgdjs_46LevelCode_46GDCrocsObjects1ObjectsGDgdjs_46LevelCode_46GDRockObjects1ObjectsGDgdjs_46LevelCode_46GDTreeObjects1Objects = Hashtable.newFrom({"TopLand": gdjs.LevelCode.GDTopLandObjects1, "BottomLand": gdjs.LevelCode.GDBottomLandObjects1, "Crocs": gdjs.LevelCode.GDCrocsObjects1, "Rock": gdjs.LevelCode.GDRockObjects1, "Tree": gdjs.LevelCode.GDTreeObjects1});
gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.LevelCode.GDNewSpriteObjects1});
gdjs.LevelCode.eventsList0 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.LevelCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomLand"), gdjs.LevelCode.GDBottomLandObjects1);
gdjs.copyArray(runtimeScene.getObjects("Crocs"), gdjs.LevelCode.GDCrocsObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.LevelCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.LevelCode.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopLand"), gdjs.LevelCode.GDTopLandObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree"), gdjs.LevelCode.GDTreeObjects1);
{for(var i = 0, len = gdjs.LevelCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDBackgroundObjects1[i].setXOffset(gdjs.LevelCode.GDBackgroundObjects1[i].getXOffset() + (40 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.LevelCode.GDTopLandObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDTopLandObjects1[i].setX(gdjs.LevelCode.GDTopLandObjects1[i].getX() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}{for(var i = 0, len = gdjs.LevelCode.GDBottomLandObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDBottomLandObjects1[i].setX(gdjs.LevelCode.GDBottomLandObjects1[i].getX() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}{for(var i = 0, len = gdjs.LevelCode.GDCrocsObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDCrocsObjects1[i].setX(gdjs.LevelCode.GDCrocsObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 0.0070));
}
}{for(var i = 0, len = gdjs.LevelCode.GDRockObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDRockObjects1[i].setX(gdjs.LevelCode.GDRockObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 0.0050));
}
}{for(var i = 0, len = gdjs.LevelCode.GDTreeObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDTreeObjects1[i].setX(gdjs.LevelCode.GDTreeObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 0.001));
}
}{for(var i = 0, len = gdjs.LevelCode.GDTreeObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDTreeObjects1[i].rotate(50, runtimeScene);
}
}{for(var i = 0, len = gdjs.LevelCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.LevelCode.GDNewTextObjects1[i].setString(gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) / 60)));
}
}}

}


{


gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "y2mate.com - 8 Bit World Fun Upbeat Chiptune Game Music by HeatleyBros_320kbps2.mp3", 0, true, 20, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BottomLand"), gdjs.LevelCode.GDBottomLandObjects1);
gdjs.copyArray(runtimeScene.getObjects("Crocs"), gdjs.LevelCode.GDCrocsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.LevelCode.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopLand"), gdjs.LevelCode.GDTopLandObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree"), gdjs.LevelCode.GDTreeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turbo1000"), gdjs.LevelCode.GDTurbo1000Objects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDTurbo1000Objects1Objects, gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDTopLandObjects1ObjectsGDgdjs_46LevelCode_46GDBottomLandObjects1ObjectsGDgdjs_46LevelCode_46GDCrocsObjects1ObjectsGDgdjs_46LevelCode_46GDRockObjects1ObjectsGDgdjs_46LevelCode_46GDTreeObjects1Objects, false, runtimeScene, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LevelCode.GDTurbo1000Objects1 */
{for(var i = 0, len = gdjs.LevelCode.GDTurbo1000Objects1.length ;i < len;++i) {
    gdjs.LevelCode.GDTurbo1000Objects1[i].getBehavior("Health").Hit(100, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{


{
}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.LevelCode.GDNewSpriteObjects1);

gdjs.LevelCode.condition0IsTrue_0.val = false;
{
gdjs.LevelCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LevelCode.mapOfGDgdjs_46LevelCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if (gdjs.LevelCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


};

gdjs.LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LevelCode.GDBGObjects1.length = 0;
gdjs.LevelCode.GDBGObjects2.length = 0;
gdjs.LevelCode.GDBackgroundObjects1.length = 0;
gdjs.LevelCode.GDBackgroundObjects2.length = 0;
gdjs.LevelCode.GDTurbo1000Objects1.length = 0;
gdjs.LevelCode.GDTurbo1000Objects2.length = 0;
gdjs.LevelCode.GDKardanEvoObjects1.length = 0;
gdjs.LevelCode.GDKardanEvoObjects2.length = 0;
gdjs.LevelCode.GDArgotTSXObjects1.length = 0;
gdjs.LevelCode.GDArgotTSXObjects2.length = 0;
gdjs.LevelCode.GDTopLandObjects1.length = 0;
gdjs.LevelCode.GDTopLandObjects2.length = 0;
gdjs.LevelCode.GDBottomLandObjects1.length = 0;
gdjs.LevelCode.GDBottomLandObjects2.length = 0;
gdjs.LevelCode.GDCrocsObjects1.length = 0;
gdjs.LevelCode.GDCrocsObjects2.length = 0;
gdjs.LevelCode.GDRockObjects1.length = 0;
gdjs.LevelCode.GDRockObjects2.length = 0;
gdjs.LevelCode.GDTreeObjects1.length = 0;
gdjs.LevelCode.GDTreeObjects2.length = 0;
gdjs.LevelCode.GDNewSpriteObjects1.length = 0;
gdjs.LevelCode.GDNewSpriteObjects2.length = 0;
gdjs.LevelCode.GDNewTextObjects1.length = 0;
gdjs.LevelCode.GDNewTextObjects2.length = 0;
gdjs.LevelCode.GDNewSprite2Objects1.length = 0;
gdjs.LevelCode.GDNewSprite2Objects2.length = 0;

gdjs.LevelCode.eventsList0(runtimeScene);

return;

}

gdjs['LevelCode'] = gdjs.LevelCode;
