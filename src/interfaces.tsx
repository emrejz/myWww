import { GameActionTypes } from "./pages/apps/games/mine/store/actions";
import { GlobalActionTypes } from "./store/actions";

// GLOBAL-STATE
export interface IGlobalContext {
  state: IGlobalState;
  dispatch: IGlobalDispatch;
}
export interface IGlobalState {
  zIndexInit: number;
  appList: IAppState[];
}

export interface IGlobalDispatch {
  openApp: (payload: IGlobalActionPayload) => IGlobalState;
  reSizeApp: (payload: IGlobalActionPayload) => IGlobalState;
  minSizeApp: (payload: IGlobalActionPayload) => IGlobalState;
}
export interface IGlobalAction {
  type: GlobalActionTypes;
  payload: IGlobalActionPayload;
}
export interface IGlobalActionPayload {
  name: string;
  open?: boolean;
}

export interface IAppState {
  name: string;
  icon: string;
  open: boolean;
  size: string;
  zIndex: number;
  isActive: boolean;
}

//GAME-STATE
export interface IGameContext {
  gameState: IGameState;
  gameDispatch: IGameDispatch;
}
export interface IGameState {
  cellList: IGameCell[][];
  gameStatus: string;
  openedCell: number;
  mineCounter: number;
  flagCounter: number;
}
export interface IGameDispatch {
  openCell: (payload: IGameCell) => IGameState;
  flagCell: (payload: IGameCell) => IGameState;
  startGame: () => IGameState;
}

export interface IGameAction {
  type: GameActionTypes;
  payload?: any;
}

export interface IGameCell {
  flag: boolean;
  mine: boolean;
  open: boolean;
  val: string | number;
  x: number;
  y: number;
}
//OTHER INTERFACES
export interface ISelectedVscFile {
  tag: string[];
  title: string;
  desc: string;
  demo: string;
  repo: string;
  selected?: boolean;
}
