import * as React from "react";
import "../styles/loadingscreen.css";
import "../styles/_common.css";

class LoadingScreen extends React.Component {
  render() {
    return (
      <div className='loading bg-deep-sky-blue-color'>
        <div className='snake-rush-image-container font-color-alice-blue'>
          SNAKE RUSH
        </div>
        <div className='loading-bar-container'> LoadingLoadingLoading</div>
        <div className='white-text-tip-container'>
          <div className='tips-and-tricks-text nunito-font-regular font-color-white'>
            TIPS & TRICKS
          </div>
          <div className='tips-description-text nunito-font-regular font-color-white'>
            Try to break as much block as possible score high
          </div>
        </div>
      </div>
    );
  }
}

export default LoadingScreen;
