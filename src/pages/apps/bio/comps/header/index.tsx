import React from "react";
import { Block, Text } from "styledComp";
import { IAppState, IGlobalDispatch } from "interfaces";
interface Props {
  state: IAppState;
  dispatch: IGlobalDispatch;
}
const BioHeader: React.FC<Props> = ({ state, dispatch }) => {
  const { name, icon, isActive } = state;
  const { minSizeApp, openApp, reSizeApp } = dispatch;
  return (
    <Block
      jc="space-between"
      ai="center"
      size="title"
      font="roboB"
      bc={isActive ? "blueWindTop" : "grayWindTop"}
      clr="white"
      className="bioHeader"
    >
      <Block
        flex="1"
        jc="flex-start"
        ai="center"
        ml="10px"
        onClick={() => openApp({ name, open: true })}
      >
        <img src={require("assets/images/" + icon)} alt={icon} />
        <Text ml="10px">{name}.txt</Text>
      </Block>
      <Block className="bioTopExit">
        <Text onClick={() => minSizeApp({ name })}>-</Text>
        <Text
          className="scaleIcon"
          onClick={() => {
            reSizeApp({ name });
            openApp({ name, open: true });
          }}
        ></Text>
        <Text onClick={() => openApp({ name, open: false })}>X</Text>
      </Block>
    </Block>
  );
};

export default BioHeader;
