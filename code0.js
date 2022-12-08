gdjs.IntroCode = {};
gdjs.IntroCode.GDBGObjects1= [];
gdjs.IntroCode.GDBGObjects2= [];
gdjs.IntroCode.GDLogoObjects1= [];
gdjs.IntroCode.GDLogoObjects2= [];
gdjs.IntroCode.GDBGObjects1= [];
gdjs.IntroCode.GDBGObjects2= [];
gdjs.IntroCode.GDPlayButtonObjects1= [];
gdjs.IntroCode.GDPlayButtonObjects2= [];
gdjs.IntroCode.GDCloseObjects1= [];
gdjs.IntroCode.GDCloseObjects2= [];
gdjs.IntroCode.GDSettingsObjects1= [];
gdjs.IntroCode.GDSettingsObjects2= [];

gdjs.IntroCode.conditionTrue_0 = {val:false};
gdjs.IntroCode.condition0IsTrue_0 = {val:false};
gdjs.IntroCode.condition1IsTrue_0 = {val:false};
gdjs.IntroCode.condition2IsTrue_0 = {val:false};


gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.IntroCode.GDPlayButtonObjects1});
gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDCloseObjects1Objects = Hashtable.newFrom({"Close": gdjs.IntroCode.GDCloseObjects1});
gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs.IntroCode.GDPlayButtonObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Select kayak", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("BG"), gdjs.IntroCode.GDBGObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDBGObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDBGObjects1[i].setX(gdjs.IntroCode.GDBGObjects1[i].getX() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * -(2)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Close"), gdjs.IntroCode.GDCloseObjects1);

gdjs.IntroCode.condition0IsTrue_0.val = false;
gdjs.IntroCode.condition1IsTrue_0.val = false;
{
gdjs.IntroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IntroCode.mapOfGDgdjs_46IntroCode_46GDCloseObjects1Objects, runtimeScene, true, false);
}if ( gdjs.IntroCode.condition0IsTrue_0.val ) {
{
gdjs.IntroCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.IntroCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDBGObjects1.length = 0;
gdjs.IntroCode.GDBGObjects2.length = 0;
gdjs.IntroCode.GDLogoObjects1.length = 0;
gdjs.IntroCode.GDLogoObjects2.length = 0;
gdjs.IntroCode.GDBGObjects1.length = 0;
gdjs.IntroCode.GDBGObjects2.length = 0;
gdjs.IntroCode.GDPlayButtonObjects1.length = 0;
gdjs.IntroCode.GDPlayButtonObjects2.length = 0;
gdjs.IntroCode.GDCloseObjects1.length = 0;
gdjs.IntroCode.GDCloseObjects2.length = 0;
gdjs.IntroCode.GDSettingsObjects1.length = 0;
gdjs.IntroCode.GDSettingsObjects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
