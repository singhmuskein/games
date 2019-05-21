import * as React from "react";
//import ShareScreen from "./screens/ShareScreen";
import StageCompleteScreen from "./screens/StageCompleteScreen";
//import EarnedScreen from "./screens/EarnedScreen";

class App extends React.Component {
  render() {
    return (
      <div>
        <StageCompleteScreen />
        {/* <EarnedScreen /> */}
        {/* <ShareScreen /> */}
      </div>
    );
  }
}
export default App;
