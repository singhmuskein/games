import * as React from "react";
import "../styles/stagecomplete.css";
import {
  Modal,
  ModalContainer,
  ModalBoxInner,
  ToolTip,
  EarlyDawnText
} from "../components/common";
import "../styles/_common.css";

//import { gameInit } from "../Game";

//type declaration for state
interface ILevelCompleteOrFailedState {
  showModal: boolean;
}

interface ILevelCompleteOrFailed {
  modalCancelButton: boolean;
  modalCancelButtonBackgroundColor: string;
  modalCancelButtonOnClick: () => void;
  modalIsOpen: boolean;
  wantToPlayAgainTextVisible: boolean;
  greyRibbonVisible: boolean;
  yellowBlockButtonVisible: boolean;
  greenRibbonVisible: boolean;
  yourScoreTextColor: string;
  YourScoreText: string;
  yourScoreNumberColor: string;
  YourScoreNumber: number;
  LevelBlockButtonOnClick: () => void;
  levelCompletionOrFailedStatusText: string;
  LevelButtonText: string;
  bestScoreNumberColor: string;
  bestScoreTextColor: string;
  bestScoreText: string;
  bestScoreNumber: number;
  earlyDawnTextFontSize?: string | number;
  earlyDawnText?: string;
  earlyDawnTextClassName?: string;
  gameTip: string;
  modalInnerBoxVisible?: boolean;
  earlyDawnTextVisible?: boolean;
  toolTipVisible: boolean;
}

export default class LevelCompleteOrFailed extends React.Component<
  ILevelCompleteOrFailed,
  ILevelCompleteOrFailedState
> {
  // componentDidMount() {
  //   // new Game();
  //   gameInit();
  // }

  state = { showModal: true };

  /*
   * renders inner oasis backgorund colored box with <ScoreText> Component
   *  when prop modalInnerBoxVisible is true
   * else returns null
   */
  renderModalBoxInner(props: ILevelCompleteOrFailed) {
    const {
      modalInnerBoxVisible,
      bestScoreNumberColor,
      bestScoreTextColor,
      bestScoreText,
      bestScoreNumber
    } = props;
    if (modalInnerBoxVisible) {
      return (
        <ModalBoxInner
          numberColor={bestScoreNumberColor} //string
          textColor={bestScoreTextColor} //string
          text={bestScoreText} //string
          score={bestScoreNumber} //number
        />
      );
    }
    return null;
  }

  /*
   * renders tooltip with <ToolTip> Component
   *  when prop toolTipVisible is true
   * else returns null
   */

  renderToolTip(props: ILevelCompleteOrFailed) {
    const { toolTipVisible, gameTip } = props;
    if (toolTipVisible) {
      return (
        <ToolTip
          tip={gameTip} //string
        />
      );
    }
    return null;
  }

  /*
   * renders Early text / Next level starts in text with <EarlyDawnText> Component
   *  when prop earlyDawnTextVisible is true
   * else returns null
   */
  renderEarlyText(props: ILevelCompleteOrFailed) {
    const {
      earlyDawnTextVisible,
      earlyDawnTextFontSize,
      earlyDawnText,
      earlyDawnTextClassName
    } = props;
    if (earlyDawnTextVisible) {
      return (
        <div className='next-level-starts-text'>
          <EarlyDawnText
            fontSize={earlyDawnTextFontSize} //string
            text={earlyDawnText} //string
            className={earlyDawnTextClassName} //string
          />
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      modalCancelButton,
      modalCancelButtonBackgroundColor,
      modalCancelButtonOnClick,
      modalIsOpen,
      wantToPlayAgainTextVisible,
      greyRibbonVisible,
      yellowBlockButtonVisible,
      greenRibbonVisible,
      yourScoreTextColor,
      YourScoreText,
      yourScoreNumberColor,
      YourScoreNumber,
      LevelBlockButtonOnClick,
      levelCompletionOrFailedStatusText,
      LevelButtonText
    } = this.props;
    return (
      <div>
        <Modal
          cancelButton={modalCancelButton}
          cancelButtonBackgroundColor={modalCancelButtonBackgroundColor}
          cancelButtonClick={modalCancelButtonOnClick}
          isOpen={modalIsOpen}
        >
          <div className='modal-align-center'>
            <ModalContainer
              wantToPlayAgain={wantToPlayAgainTextVisible} //booloen
              greyRibbon={greyRibbonVisible} //boolean
              greenRibbon={greenRibbonVisible} //boolean
              yellowBlockButton={yellowBlockButtonVisible} //boolean
              textColor={yourScoreTextColor} //string
              numberColor={yourScoreNumberColor} //string
              text={YourScoreText} //string
              score={YourScoreNumber} //number
              onClick={LevelBlockButtonOnClick} //event | void
              stageStatus={levelCompletionOrFailedStatusText} //string
              stageButton={LevelButtonText} //string
            >
              {this.renderModalBoxInner(this.props)}
            </ModalContainer>
            {this.renderEarlyText(this.props)}
            {this.renderToolTip(this.props)}
          </div>
        </Modal>
      </div>
    );
  }
}

/*
Props available out of this component
  modalCancelButton,
  modalCancelButtonBackgroundColor,
  modalCancelButtonOnClick,
  modalIsOpen,
  wantToPlayAgainTextVisible,
  greyRibbonVisible,
  yellowBlockButtonVisible,
  greenRibbonVisible,
  yourScoreTextColor,
  YourScoreText,
  yourScoreNumberColor,
  YourScoreNumber,
  LevelBlockButtonOnClick,
  levelCompletionOrFailedStatusText,
  LevelButtonText,
  bestScoreNumberColor,
  bestScoreTextColor,
  bestScoreText,
  bestScoreNumber,
  earlyDawnTextFontSize,
  earlyDawnText,
  earlyDawnTextClassName,
  gameTip
*/
