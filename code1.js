gdjs.Level_321Code = {};
gdjs.Level_321Code.GDBGObjects1= [];
gdjs.Level_321Code.GDBGObjects2= [];
gdjs.Level_321Code.GDBGObjects3= [];
gdjs.Level_321Code.GDBackgroundObjects1= [];
gdjs.Level_321Code.GDBackgroundObjects2= [];
gdjs.Level_321Code.GDBackgroundObjects3= [];
gdjs.Level_321Code.GDTurbo1000Objects1= [];
gdjs.Level_321Code.GDTurbo1000Objects2= [];
gdjs.Level_321Code.GDTurbo1000Objects3= [];
gdjs.Level_321Code.GDKardanEvoObjects1= [];
gdjs.Level_321Code.GDKardanEvoObjects2= [];
gdjs.Level_321Code.GDKardanEvoObjects3= [];
gdjs.Level_321Code.GDArgotTSXObjects1= [];
gdjs.Level_321Code.GDArgotTSXObjects2= [];
gdjs.Level_321Code.GDArgotTSXObjects3= [];
gdjs.Level_321Code.GDTopLandObjects1= [];
gdjs.Level_321Code.GDTopLandObjects2= [];
gdjs.Level_321Code.GDTopLandObjects3= [];
gdjs.Level_321Code.GDBottomLandObjects1= [];
gdjs.Level_321Code.GDBottomLandObjects2= [];
gdjs.Level_321Code.GDBottomLandObjects3= [];
gdjs.Level_321Code.GDCrocsObjects1= [];
gdjs.Level_321Code.GDCrocsObjects2= [];
gdjs.Level_321Code.GDCrocsObjects3= [];
gdjs.Level_321Code.GDRockObjects1= [];
gdjs.Level_321Code.GDRockObjects2= [];
gdjs.Level_321Code.GDRockObjects3= [];
gdjs.Level_321Code.GDTreeObjects1= [];
gdjs.Level_321Code.GDTreeObjects2= [];
gdjs.Level_321Code.GDTreeObjects3= [];
gdjs.Level_321Code.GDPlayPauseToggleObjects1= [];
gdjs.Level_321Code.GDPlayPauseToggleObjects2= [];
gdjs.Level_321Code.GDPlayPauseToggleObjects3= [];
gdjs.Level_321Code.GDLevelBannerObjects1= [];
gdjs.Level_321Code.GDLevelBannerObjects2= [];
gdjs.Level_321Code.GDLevelBannerObjects3= [];
gdjs.Level_321Code.GDWinMessageObjects1= [];
gdjs.Level_321Code.GDWinMessageObjects2= [];
gdjs.Level_321Code.GDWinMessageObjects3= [];
gdjs.Level_321Code.GDNextLevelButtonObjects1= [];
gdjs.Level_321Code.GDNextLevelButtonObjects2= [];
gdjs.Level_321Code.GDNextLevelButtonObjects3= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};
gdjs.Level_321Code.condition2IsTrue_0 = {val:false};


gdjs.Level_321Code.asyncCallback8881684 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.Level_321Code.GDNextLevelButtonObjects3);
gdjs.copyArray(runtimeScene.getObjects("WinMessage"), gdjs.Level_321Code.GDWinMessageObjects3);
{for(var i = 0, len = gdjs.Level_321Code.GDNextLevelButtonObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDNextLevelButtonObjects3[i].setOpacity(gdjs.Level_321Code.GDNextLevelButtonObjects3[i].getOpacity() + (5));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDWinMessageObjects3.length ;i < len;++i) {
    gdjs.Level_321Code.GDWinMessageObjects3[i].setOpacity(gdjs.Level_321Code.GDWinMessageObjects3[i].getOpacity() + (5));
}
}}
gdjs.Level_321Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(105), (runtimeScene) => (gdjs.Level_321Code.asyncCallback8881684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_321Code.asyncCallback9269348 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("LevelBanner"), gdjs.Level_321Code.GDLevelBannerObjects2);

{for(var i = 0, len = gdjs.Level_321Code.GDLevelBannerObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDLevelBannerObjects2[i].setOpacity(gdjs.Level_321Code.GDLevelBannerObjects2[i].getOpacity() - (10));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level_321Code.GDLevelBannerObjects1) asyncObjectsList.addObject("LevelBanner", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.Level_321Code.asyncCallback9269348(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayPauseToggleObjects1Objects = Hashtable.newFrom({"PlayPauseToggle": gdjs.Level_321Code.GDPlayPauseToggleObjects1});
gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level_321Code.GDPlayPauseToggleObjects1, gdjs.Level_321Code.GDPlayPauseToggleObjects2);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayPauseToggleObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayPauseToggleObjects2[i].isCurrentAnimationName("Pause") ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayPauseToggleObjects2[k] = gdjs.Level_321Code.GDPlayPauseToggleObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayPauseToggleObjects2.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}}

}


{

gdjs.copyArray(gdjs.Level_321Code.GDPlayPauseToggleObjects1, gdjs.Level_321Code.GDPlayPauseToggleObjects2);


gdjs.Level_321Code.condition0IsTrue_0.val = false;
gdjs.Level_321Code.condition1IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Level_321Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDPlayPauseToggleObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDPlayPauseToggleObjects2[i].isCurrentAnimationName("Play") ) {
        gdjs.Level_321Code.condition1IsTrue_0.val = true;
        gdjs.Level_321Code.GDPlayPauseToggleObjects2[k] = gdjs.Level_321Code.GDPlayPauseToggleObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDPlayPauseToggleObjects2.length = k;}}
if (gdjs.Level_321Code.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}}

}


{


{
}

}


};gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDTurbo1000Objects1Objects = Hashtable.newFrom({"Turbo1000": gdjs.Level_321Code.GDTurbo1000Objects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDTopLandObjects1ObjectsGDgdjs_46Level_95321Code_46GDBottomLandObjects1ObjectsGDgdjs_46Level_95321Code_46GDCrocsObjects1ObjectsGDgdjs_46Level_95321Code_46GDRockObjects1ObjectsGDgdjs_46Level_95321Code_46GDTreeObjects1Objects = Hashtable.newFrom({"TopLand": gdjs.Level_321Code.GDTopLandObjects1, "BottomLand": gdjs.Level_321Code.GDBottomLandObjects1, "Crocs": gdjs.Level_321Code.GDCrocsObjects1, "Rock": gdjs.Level_321Code.GDRockObjects1, "Tree": gdjs.Level_321Code.GDTreeObjects1});
gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Level_321Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomLand"), gdjs.Level_321Code.GDBottomLandObjects1);
gdjs.copyArray(runtimeScene.getObjects("Crocs"), gdjs.Level_321Code.GDCrocsObjects1);
gdjs.copyArray(runtimeScene.getObjects("LevelBanner"), gdjs.Level_321Code.GDLevelBannerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.Level_321Code.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopLand"), gdjs.Level_321Code.GDTopLandObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree"), gdjs.Level_321Code.GDTreeObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBackgroundObjects1[i].setXOffset(gdjs.Level_321Code.GDBackgroundObjects1[i].getXOffset() + (40 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDTopLandObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTopLandObjects1[i].setX(gdjs.Level_321Code.GDTopLandObjects1[i].getX() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDBottomLandObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDBottomLandObjects1[i].setX(gdjs.Level_321Code.GDBottomLandObjects1[i].getX() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDCrocsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDCrocsObjects1[i].setX(gdjs.Level_321Code.GDCrocsObjects1[i].getX() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 180));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDRockObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDRockObjects1[i].setX(gdjs.Level_321Code.GDRockObjects1[i].getX() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 110));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDTreeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTreeObjects1[i].setX(gdjs.Level_321Code.GDTreeObjects1[i].getX() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 200));
}
}{for(var i = 0, len = gdjs.Level_321Code.GDTreeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTreeObjects1[i].rotate(50, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDLevelBannerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLevelBannerObjects1[i].setOpacity(gdjs.Level_321Code.GDLevelBannerObjects1[i].getOpacity() + (5));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LevelBanner"), gdjs.Level_321Code.GDLevelBannerObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_321Code.GDLevelBannerObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDLevelBannerObjects1[i].getOpacity() < 0 ) {
        gdjs.Level_321Code.condition0IsTrue_0.val = true;
        gdjs.Level_321Code.GDLevelBannerObjects1[k] = gdjs.Level_321Code.GDLevelBannerObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDLevelBannerObjects1.length = k;}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LevelBanner"), gdjs.Level_321Code.GDLevelBannerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NextLevelButton"), gdjs.Level_321Code.GDNextLevelButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WinMessage"), gdjs.Level_321Code.GDWinMessageObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "y2mate.com - 8 Bit World Fun Upbeat Chiptune Game Music by HeatleyBros_320kbps2.mp3", 0, true, 20, 1);
}{for(var i = 0, len = gdjs.Level_321Code.GDLevelBannerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDLevelBannerObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDWinMessageObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDWinMessageObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDNextLevelButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDNextLevelButtonObjects1[i].setOpacity(0);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("SelectedKayak")) == "Turbo 1000";
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ArgotTSX"), gdjs.Level_321Code.GDArgotTSXObjects1);
gdjs.copyArray(runtimeScene.getObjects("KardanEvo"), gdjs.Level_321Code.GDKardanEvoObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDKardanEvoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDKardanEvoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDArgotTSXObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDArgotTSXObjects1[i].hide();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("SelectedKayak")) == "Kardan EVO";
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ArgotTSX"), gdjs.Level_321Code.GDArgotTSXObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turbo1000"), gdjs.Level_321Code.GDTurbo1000Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDTurbo1000Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTurbo1000Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDArgotTSXObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDArgotTSXObjects1[i].hide();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("SelectedKayak")) == "Argot TSX";
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("KardanEvo"), gdjs.Level_321Code.GDKardanEvoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turbo1000"), gdjs.Level_321Code.GDTurbo1000Objects1);
{for(var i = 0, len = gdjs.Level_321Code.GDTurbo1000Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTurbo1000Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDKardanEvoObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDKardanEvoObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayPauseToggle"), gdjs.Level_321Code.GDPlayPauseToggleObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayPauseToggleObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayPauseToggle"), gdjs.Level_321Code.GDPlayPauseToggleObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayPauseToggleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayPauseToggleObjects1[i].setAnimationName("Play");
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 0);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayPauseToggle"), gdjs.Level_321Code.GDPlayPauseToggleObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayPauseToggleObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayPauseToggleObjects1[i].setAnimationName("Pause");
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 1);
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("BottomLand"), gdjs.Level_321Code.GDBottomLandObjects1);
gdjs.copyArray(runtimeScene.getObjects("Crocs"), gdjs.Level_321Code.GDCrocsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rock"), gdjs.Level_321Code.GDRockObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopLand"), gdjs.Level_321Code.GDTopLandObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tree"), gdjs.Level_321Code.GDTreeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turbo1000"), gdjs.Level_321Code.GDTurbo1000Objects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDTurbo1000Objects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDTopLandObjects1ObjectsGDgdjs_46Level_95321Code_46GDBottomLandObjects1ObjectsGDgdjs_46Level_95321Code_46GDCrocsObjects1ObjectsGDgdjs_46Level_95321Code_46GDRockObjects1ObjectsGDgdjs_46Level_95321Code_46GDTreeObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDTurbo1000Objects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDTurbo1000Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDTurbo1000Objects1[i].getBehavior("Health").Hit(100, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Death", false);
}}

}


{


{
}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDBGObjects1.length = 0;
gdjs.Level_321Code.GDBGObjects2.length = 0;
gdjs.Level_321Code.GDBGObjects3.length = 0;
gdjs.Level_321Code.GDBackgroundObjects1.length = 0;
gdjs.Level_321Code.GDBackgroundObjects2.length = 0;
gdjs.Level_321Code.GDBackgroundObjects3.length = 0;
gdjs.Level_321Code.GDTurbo1000Objects1.length = 0;
gdjs.Level_321Code.GDTurbo1000Objects2.length = 0;
gdjs.Level_321Code.GDTurbo1000Objects3.length = 0;
gdjs.Level_321Code.GDKardanEvoObjects1.length = 0;
gdjs.Level_321Code.GDKardanEvoObjects2.length = 0;
gdjs.Level_321Code.GDKardanEvoObjects3.length = 0;
gdjs.Level_321Code.GDArgotTSXObjects1.length = 0;
gdjs.Level_321Code.GDArgotTSXObjects2.length = 0;
gdjs.Level_321Code.GDArgotTSXObjects3.length = 0;
gdjs.Level_321Code.GDTopLandObjects1.length = 0;
gdjs.Level_321Code.GDTopLandObjects2.length = 0;
gdjs.Level_321Code.GDTopLandObjects3.length = 0;
gdjs.Level_321Code.GDBottomLandObjects1.length = 0;
gdjs.Level_321Code.GDBottomLandObjects2.length = 0;
gdjs.Level_321Code.GDBottomLandObjects3.length = 0;
gdjs.Level_321Code.GDCrocsObjects1.length = 0;
gdjs.Level_321Code.GDCrocsObjects2.length = 0;
gdjs.Level_321Code.GDCrocsObjects3.length = 0;
gdjs.Level_321Code.GDRockObjects1.length = 0;
gdjs.Level_321Code.GDRockObjects2.length = 0;
gdjs.Level_321Code.GDRockObjects3.length = 0;
gdjs.Level_321Code.GDTreeObjects1.length = 0;
gdjs.Level_321Code.GDTreeObjects2.length = 0;
gdjs.Level_321Code.GDTreeObjects3.length = 0;
gdjs.Level_321Code.GDPlayPauseToggleObjects1.length = 0;
gdjs.Level_321Code.GDPlayPauseToggleObjects2.length = 0;
gdjs.Level_321Code.GDPlayPauseToggleObjects3.length = 0;
gdjs.Level_321Code.GDLevelBannerObjects1.length = 0;
gdjs.Level_321Code.GDLevelBannerObjects2.length = 0;
gdjs.Level_321Code.GDLevelBannerObjects3.length = 0;
gdjs.Level_321Code.GDWinMessageObjects1.length = 0;
gdjs.Level_321Code.GDWinMessageObjects2.length = 0;
gdjs.Level_321Code.GDWinMessageObjects3.length = 0;
gdjs.Level_321Code.GDNextLevelButtonObjects1.length = 0;
gdjs.Level_321Code.GDNextLevelButtonObjects2.length = 0;
gdjs.Level_321Code.GDNextLevelButtonObjects3.length = 0;

gdjs.Level_321Code.eventsList3(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
