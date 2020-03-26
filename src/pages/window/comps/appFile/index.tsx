import React from "react";
import { Block, Text } from "styledComp";
import "./appFile.scss";
import { IGlobalDispatch, IAppState } from "interfaces";
interface Props {
  item: IAppState;
  dispatch: IGlobalDispatch;
}
const AppFile: React.FC<Props> = ({ item, dispatch }) => {
  const { openApp } = dispatch;
  const { name, icon } = item;
  return (
    <Block
      col
      jc="center"
      ai="center"
      size="textB"
      font="roboL"
      clr="white"
      className="appIcon"
      onClick={() => openApp({ name, open: true })}
    >
      <img src={require("assets/images/" + icon)} alt={icon} />
      <Text>{name}</Text>
    </Block>
  );
};
export default AppFile;
