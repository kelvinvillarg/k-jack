gdjs.Select_32kayakCode = {};
gdjs.Select_32kayakCode.GDBGObjects1= [];
gdjs.Select_32kayakCode.GDBGObjects2= [];
gdjs.Select_32kayakCode.GDSelectKayakTitleObjects1= [];
gdjs.Select_32kayakCode.GDSelectKayakTitleObjects2= [];
gdjs.Select_32kayakCode.GDNewSpriteObjects1= [];
gdjs.Select_32kayakCode.GDNewSpriteObjects2= [];
gdjs.Select_32kayakCode.GDNewSprite2Objects1= [];
gdjs.Select_32kayakCode.GDNewSprite2Objects2= [];
gdjs.Select_32kayakCode.GDNewSprite3Objects1= [];
gdjs.Select_32kayakCode.GDNewSprite3Objects2= [];

gdjs.Select_32kayakCode.conditionTrue_0 = {val:false};
gdjs.Select_32kayakCode.condition0IsTrue_0 = {val:false};
gdjs.Select_32kayakCode.condition1IsTrue_0 = {val:false};
gdjs.Select_32kayakCode.condition2IsTrue_0 = {val:false};


gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Select_32kayakCode.GDNewSpriteObjects1});
gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDNewSprite2Objects1Objects = Hashtable.newFrom({"NewSprite2": gdjs.Select_32kayakCode.GDNewSprite2Objects1});
gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDNewSprite3Objects1Objects = Hashtable.newFrom({"NewSprite3": gdjs.Select_32kayakCode.GDNewSprite3Objects1});
gdjs.Select_32kayakCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Select_32kayakCode.GDNewSpriteObjects1);

gdjs.Select_32kayakCode.condition0IsTrue_0.val = false;
gdjs.Select_32kayakCode.condition1IsTrue_0.val = false;
{
gdjs.Select_32kayakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Select_32kayakCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32kayakCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Select_32kayakCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.Select_32kayakCode.GDNewSprite2Objects1);

gdjs.Select_32kayakCode.condition0IsTrue_0.val = false;
gdjs.Select_32kayakCode.condition1IsTrue_0.val = false;
{
gdjs.Select_32kayakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDNewSprite2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Select_32kayakCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32kayakCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Select_32kayakCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.Select_32kayakCode.GDNewSprite3Objects1);

gdjs.Select_32kayakCode.condition0IsTrue_0.val = false;
gdjs.Select_32kayakCode.condition1IsTrue_0.val = false;
{
gdjs.Select_32kayakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDNewSprite3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Select_32kayakCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32kayakCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Select_32kayakCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};

gdjs.Select_32kayakCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Select_32kayakCode.GDBGObjects1.length = 0;
gdjs.Select_32kayakCode.GDBGObjects2.length = 0;
gdjs.Select_32kayakCode.GDSelectKayakTitleObjects1.length = 0;
gdjs.Select_32kayakCode.GDSelectKayakTitleObjects2.length = 0;
gdjs.Select_32kayakCode.GDNewSpriteObjects1.length = 0;
gdjs.Select_32kayakCode.GDNewSpriteObjects2.length = 0;
gdjs.Select_32kayakCode.GDNewSprite2Objects1.length = 0;
gdjs.Select_32kayakCode.GDNewSprite2Objects2.length = 0;
gdjs.Select_32kayakCode.GDNewSprite3Objects1.length = 0;
gdjs.Select_32kayakCode.GDNewSprite3Objects2.length = 0;

gdjs.Select_32kayakCode.eventsList0(runtimeScene);

return;

}

gdjs['Select_32kayakCode'] = gdjs.Select_32kayakCode;
