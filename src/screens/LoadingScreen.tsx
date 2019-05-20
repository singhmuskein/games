import * as React from "react";
import "../styles/loadingscreen.scss";

class LoadingScreen extends React.Component {
  render() {
    return (
      <div className='loading'>
        <div className='snake-rush-image-container'>SNAKE RUSH</div>
        <div className='loading-bar-container'> LoadingLoadingLoading</div>
        <div
          className='white-text-tip-container'
          style={{ flex: 1, backgroundColor: "red" }}
        >
          <div className='tips-and-tricks-text'>Tips & Tricks</div>
          <div className='tips-description-text'>
            Try to break as much block as possible score high
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingScreen;
