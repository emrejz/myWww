import React from "react";
import { Block, Text } from "styledComp";
import { IAppState, IGlobalDispatch, IGameState } from "interfaces";
interface Props {
  appState: IAppState;
  dispatch: IGlobalDispatch;
  gameState: IGameState;
}
const GameHeader: React.FC<Props> = ({ appState, dispatch, gameState }) => {
  const { name, icon, isActive } = appState;
  const { flagCounter, mineCounter, gameStatus } = gameState;
  const { openApp, minSizeApp } = dispatch;
  return (
    <Block col jc="space-between" ai="center">
      <Block
        jc="space-between"
        ai="center"
        font="roboB"
        size="title"
        bc={isActive ? "blueWindTop" : "grayWindTop"}
        clr="white"
        wid="100%"
      >
        <Block
          flex="1"
          jc="flex-start"
          ai="center"
          pl="6px"
          onClick={() => openApp({ name, open: true })}
        >
          <img src={require("assets/images/" + icon)} alt={icon} />
          <Text pl="6px">{name}</Text>
        </Block>
        <Block className="gameExit">
          <Text onClick={() => minSizeApp({ name })}>-</Text>
          <Text onClick={() => openApp({ name, open: false })}>x</Text>
        </Block>
      </Block>
      <Block
        jc="space-between"
        ai="center"
        clr="black"
        font="roboM"
        size="textB"
        wid="100%"
        pad="5px 8px"
        onClick={() => openApp({ name, open: true })}
      >
        <Text>mine:{mineCounter}</Text>
        <Text>
          {gameStatus === "success"
            ? ":))"
            : gameStatus === "fail"
            ? ":("
            : ":)"}
        </Text>
        <Text>flag:{flagCounter}</Text>
      </Block>
    </Block>
  );
};

export default GameHeader;
