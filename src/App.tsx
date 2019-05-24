import * as React from "react";
//import GoodJobScreen from "./screens/GoodJobScreen";
// import WellPlayedScreen from "./screens/WellPlayedScreen";
// import LoadingScreen from "./screens/LoadingScreen";
// import ShareScreen from "./screens/ShareScreen";
import LevelCompleteOrFailed from "./screens/LevelCompleteOrFailed";
// import NoInternetScreen from "./screens/NoInternetScreen";
// import EarnedScreen from "./screens/EarnedScreen";

class App extends React.Component {
  render() {
    return (
      <div>
        <LevelCompleteOrFailed
          modalCancelButton={true}
          modalCancelButtonBackgroundColor={"#f24b22"}
          modalCancelButtonOnClick={() => alert("dev")}
          modalIsOpen={true}
          wantToPlayAgainTextVisible={true}
          greyRibbonVisible={true}
          yellowBlockButtonVisible={true}
          greenRibbonVisible={false}
          yourScoreTextColor={"#3e3b37"}
          YourScoreText={"Your Score"}
          yourScoreNumberColor={"black"}
          YourScoreNumber={130}
          LevelBlockButtonOnClick={() => alert("am pressed")}
          levelCompletionOrFailedStatusText={`Level Failed`}
          LevelButtonText={`EARN A CHANCE`}
          bestScoreNumberColor={"#8a4e1b"}
          bestScoreTextColor={"#8a4e1b"}
          bestScoreText={"Best Score"}
          bestScoreNumber={150}
          earlyDawnTextFontSize={"22px"}
          earlyDawnText={"Next level starts in 5 seconds"}
          earlyDawnTextClassName={"nunito-font-bold font-color-early-dawn"}
          modalInnerBoxVisible={true}
          earlyDawnTextVisible={false}
          toolTipVisible={true}
          gameTip='Higher number blocks gives better score!'
        />
        {/* <EarnedScreen /> */}
        {/* <ShareScreen /> */}
        {/* <LoadingScreen /> */}
        {/* <WellPlayedScreen /> */}
        {/* <GoodJobScreen /> */}
        {/* <NoInternetScreen /> */}
      </div>
    );
  }
}
export default App;
