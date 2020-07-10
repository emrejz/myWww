import React from "react";
import { Block, Text } from "styledComp";
import { IAppState, IGlobalDispatch } from "interfaces";
interface Props {
  appState: IAppState;
  dispatch: IGlobalDispatch;
}
const BatakGameHeader: React.FC<Props> = ({ appState, dispatch }) => {
  const { name, icon, isActive } = appState;
  const { openApp, minSizeApp } = dispatch;
  return (
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
        pad="6px"
        onClick={() => openApp({ name, open: true })}
      >
        <img src={require("assets/images/" + icon)} alt={icon} />
        <Text pl="6px">{name}</Text>
      </Block>
      <Block className="gameExit">
        <Text pad="6px" onClick={() => minSizeApp({ name })}>
          -
        </Text>
        <Text pad="6px" onClick={() => openApp({ name, open: false })}>
          x
        </Text>
      </Block>
    </Block>
  );
};

export default BatakGameHeader;
