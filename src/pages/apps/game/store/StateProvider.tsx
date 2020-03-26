import React, { useReducer, createContext } from "react";
import { reducer } from "./reducer";
import { dispatchs } from "./actions";
import { IGameState } from "interfaces";

const initialState: IGameState = {
  cellList: [],
  gameStatus: "ready",
  openedCell: 0,
  mineCounter: 9,
  flagCounter: 0
};
export const Context = createContext<IGameState | any>(initialState);

const StateProvider: React.FC = ({ children }) => {
  const [gameState, dispatch] = useReducer(reducer, initialState);
  let gameDispatch = dispatchs(dispatch);

  return (
    <Context.Provider value={{ gameState, gameDispatch }}>
      {children}
    </Context.Provider>
  );
};
export default StateProvider;
