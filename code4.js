gdjs.Select_32kayakCode = {};
gdjs.Select_32kayakCode.GDBGObjects1= [];
gdjs.Select_32kayakCode.GDBGObjects2= [];
gdjs.Select_32kayakCode.GDSelectKayakTitleObjects1= [];
gdjs.Select_32kayakCode.GDSelectKayakTitleObjects2= [];
gdjs.Select_32kayakCode.GDTurbo1000Objects1= [];
gdjs.Select_32kayakCode.GDTurbo1000Objects2= [];
gdjs.Select_32kayakCode.GDKardanEVOObjects1= [];
gdjs.Select_32kayakCode.GDKardanEVOObjects2= [];
gdjs.Select_32kayakCode.GDArgotTSXObjects1= [];
gdjs.Select_32kayakCode.GDArgotTSXObjects2= [];

gdjs.Select_32kayakCode.conditionTrue_0 = {val:false};
gdjs.Select_32kayakCode.condition0IsTrue_0 = {val:false};
gdjs.Select_32kayakCode.condition1IsTrue_0 = {val:false};
gdjs.Select_32kayakCode.condition2IsTrue_0 = {val:false};


gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDTurbo1000Objects1Objects = Hashtable.newFrom({"Turbo1000": gdjs.Select_32kayakCode.GDTurbo1000Objects1});
gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDKardanEVOObjects1Objects = Hashtable.newFrom({"KardanEVO": gdjs.Select_32kayakCode.GDKardanEVOObjects1});
gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDArgotTSXObjects1Objects = Hashtable.newFrom({"ArgotTSX": gdjs.Select_32kayakCode.GDArgotTSXObjects1});
gdjs.Select_32kayakCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Turbo1000"), gdjs.Select_32kayakCode.GDTurbo1000Objects1);

gdjs.Select_32kayakCode.condition0IsTrue_0.val = false;
gdjs.Select_32kayakCode.condition1IsTrue_0.val = false;
{
gdjs.Select_32kayakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDTurbo1000Objects1Objects, runtimeScene, true, false);
}if ( gdjs.Select_32kayakCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32kayakCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Select_32kayakCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{runtimeScene.getGame().getVariables().get("SelectedKayak").setString("Turbo 1000");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("KardanEVO"), gdjs.Select_32kayakCode.GDKardanEVOObjects1);

gdjs.Select_32kayakCode.condition0IsTrue_0.val = false;
gdjs.Select_32kayakCode.condition1IsTrue_0.val = false;
{
gdjs.Select_32kayakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDKardanEVOObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Select_32kayakCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32kayakCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Select_32kayakCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{runtimeScene.getGame().getVariables().get("SelectedKayak").setString("Kardan EVO");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArgotTSX"), gdjs.Select_32kayakCode.GDArgotTSXObjects1);

gdjs.Select_32kayakCode.condition0IsTrue_0.val = false;
gdjs.Select_32kayakCode.condition1IsTrue_0.val = false;
{
gdjs.Select_32kayakCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Select_32kayakCode.mapOfGDgdjs_46Select_9532kayakCode_46GDArgotTSXObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Select_32kayakCode.condition0IsTrue_0.val ) {
{
gdjs.Select_32kayakCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Select_32kayakCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{runtimeScene.getGame().getVariables().get("SelectedKayak").setString("Argot TSX");
}}

}


};

gdjs.Select_32kayakCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Select_32kayakCode.GDBGObjects1.length = 0;
gdjs.Select_32kayakCode.GDBGObjects2.length = 0;
gdjs.Select_32kayakCode.GDSelectKayakTitleObjects1.length = 0;
gdjs.Select_32kayakCode.GDSelectKayakTitleObjects2.length = 0;
gdjs.Select_32kayakCode.GDTurbo1000Objects1.length = 0;
gdjs.Select_32kayakCode.GDTurbo1000Objects2.length = 0;
gdjs.Select_32kayakCode.GDKardanEVOObjects1.length = 0;
gdjs.Select_32kayakCode.GDKardanEVOObjects2.length = 0;
gdjs.Select_32kayakCode.GDArgotTSXObjects1.length = 0;
gdjs.Select_32kayakCode.GDArgotTSXObjects2.length = 0;

gdjs.Select_32kayakCode.eventsList0(runtimeScene);

return;

}

gdjs['Select_32kayakCode'] = gdjs.Select_32kayakCode;
