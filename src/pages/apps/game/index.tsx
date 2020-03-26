import React from "react";
import StateProvider from "./store/StateProvider";
import Game from "./main";
import { IAppState, IGlobalDispatch } from "../../../interfaces";
interface Props {
  appState: IAppState;
  dispatch: IGlobalDispatch;
}
const GameApp: React.FC<Props> = ({ appState, dispatch }) => {
  return (
    <StateProvider>
      <Game appState={appState} dispatch={dispatch} />
    </StateProvider>
  );
};

export default GameApp;
