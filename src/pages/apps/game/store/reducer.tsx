import { GameActionTypes } from "./actions";
import { IGameState, IGameAction } from "interfaces";
import { startGame, openCell, flagCell } from "./functions";

export const reducer = (
  state: IGameState,
  { type, payload }: IGameAction
): IGameState => {
  switch (type) {
    case GameActionTypes.startGameAction:
      return {
        ...state,
        ...startGame()
      };
    case GameActionTypes.openCellAction:
      return {
        ...state,
        ...openCell(state, payload)
      };
    case GameActionTypes.flagCellAction:
      return {
        ...state,
        ...flagCell(state, payload)
      };
    default:
      return state;
  }
};
