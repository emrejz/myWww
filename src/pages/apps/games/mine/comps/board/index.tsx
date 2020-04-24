import React from "react";
import { GameRow } from "..";
import GameResultBox from "./gameResultBox";
import { Block } from "styledComp";
import {
  IGameState,
  IAppState,
  IGameDispatch,
  IGlobalDispatch
} from "interfaces";
interface Props {
  gameState: IGameState;
  gameDispatch: IGameDispatch;
  appState: IAppState;
  dispatch: IGlobalDispatch;
}
const Board: React.FC<Props> = ({
  gameState: { cellList, gameStatus },
  gameDispatch,
  appState,
  dispatch
}) => {
  const { name, icon } = appState;
  return (
    <Block col onClick={() => dispatch.openApp({ name, open: true })}>
      <GameResultBox gameStatus={gameStatus} gameDispatch={gameDispatch} />
      {cellList.map((item, index) => (
        <GameRow
          icon={icon}
          item={item}
          gameDispatch={gameDispatch}
          key={index}
        />
      ))}
    </Block>
  );
};

export default Board;
