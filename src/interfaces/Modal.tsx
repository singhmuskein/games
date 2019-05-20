export interface IModal {
  backgroundColor: string;
  stageStatus: string;
  stageButton: string;
  isOpen: boolean;
  tip: string;
  onClick: () => void;
}
