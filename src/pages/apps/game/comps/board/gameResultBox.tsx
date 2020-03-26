import React from "react";
import { Block, Text } from "styledComp";
import { IGameDispatch } from "interfaces";
interface Props {
  gameStatus: string;
  gameDispatch: IGameDispatch;
}

const GameResultBox: React.FC<Props> = ({ gameStatus, gameDispatch }): any => {
  return (
    (gameStatus == "fail" || gameStatus == "success") && (
      <Block col className="gameInfo">
        <Text ta="center" size="h3">
          {gameStatus == "success"
            ? "what a lucky player"
            : "what a bad player"}
        </Text>
        <Text
          size="textN"
          className="gameRestartButton"
          onClick={() => gameDispatch.startGame()}
        >
          Restart
        </Text>
      </Block>
    )
  );
};
export default GameResultBox;
