import * as React from "react";
import WellPlayedScreen from "./screens/WellPlayedScreen";
//import LoadingScreen from "./screens/LoadingScreen";
// import ShareScreen from "./screens/ShareScreen";
//import StageCompleteScreen from "./screens/StageCompleteScreen";
//import EarnedScreen from "./screens/EarnedScreen";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <StageCompleteScreen /> */}
        {/* <EarnedScreen /> */}
        {/* <ShareScreen /> */}
        {/* <LoadingScreen /> */}
        <WellPlayedScreen />
      </div>
    );
  }
}
export default App;
