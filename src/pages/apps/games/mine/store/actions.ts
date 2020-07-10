import { IGameAction, IGameCell } from "interfaces";

export enum GameActionTypes {
  startGameAction = "startGameAction",
  openCellAction = "openCellAction",
  flagCellAction = "flagCellAction"
}

export function dispatchs(dispatch: React.Dispatch<IGameAction>) {
  function startGame() {
    return dispatch({ type: GameActionTypes.startGameAction });
  }
  function openCell(payload: IGameCell) {
    return dispatch({ type: GameActionTypes.openCellAction, payload });
  }
  function flagCell(payload: IGameCell) {
    return dispatch({ type: GameActionTypes.flagCellAction, payload });
  }
  return {
    startGame,
    openCell,
    flagCell
  };
}
