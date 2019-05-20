export interface IModalContainer {
  children: React.ReactNode;
  stageStatus: string;
  stageButton: string;
  backgroundColor: string;
  onClick: () => void;
}
