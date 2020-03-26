import React from "react";
import { Block, Text } from "styledComp";
import { IAppState, IGlobalDispatch } from "interfaces";
interface Props {
  appState: IAppState;
  dispatch: IGlobalDispatch;
}
const StartMenuItem: React.FC<Props> = ({
  appState: { name, open, icon, isActive },
  dispatch
}): JSX.Element | null => {
  return open ? (
    <Block
      flex="0"
      jc="space-between"
      ai="center"
      bc={isActive ? "whiteStartActiveTab" : "grayWind"}
      wid="100%"
      onClick={() => dispatch.openApp({ name, open: true })}
      key={name}
    >
      <img src={require("assets/images/" + icon)} alt={icon} />
      <Text>{name}</Text>
    </Block>
  ) : null;
};

export default StartMenuItem;
