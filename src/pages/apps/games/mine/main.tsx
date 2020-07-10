import React, { useEffect, useContext } from "react";
import { Context } from "./store/StateProvider";
import { Block } from "styledComp";
import { GameBoard, GameHeader } from "./comps";
import "./game.scss";
import {
  IAppState,
  IGlobalDispatch,
  IGameContext,
} from "../../../../interfaces";
interface Props {
  appState: IAppState;
  dispatch: IGlobalDispatch;
}
const Main: React.FC<Props> = ({ appState, dispatch }) => {
  const { zIndex } = appState;

  const { gameState, gameDispatch } = useContext<IGameContext>(Context);
  // const stableGameDispatch = useCallback(gameDispatch, []);
  useEffect(() => {
    if (gameState.gameStatus === "ready") {
      gameDispatch.startGame();
    }
  }, [gameState.gameStatus]);

  return (
    <Block
      col
      pos="absolute"
      wid="fit-content"
      pad="5px"
      bc="grayWind"
      clr="white"
      z={zIndex}
      className="gameContainer"
    >
      <GameHeader
        appState={appState}
        dispatch={dispatch}
        gameState={gameState}
      />
      <GameBoard
        gameState={gameState}
        gameDispatch={gameDispatch}
        appState={appState}
        dispatch={dispatch}
      />
    </Block>
  );
};
export default Main;
