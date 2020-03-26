import React from "react";
import { Block } from "styledComp";
import { StartLeft, StartRight, StartMiddle } from "./comps";
import "./start.scss";
import { IGlobalContext } from "interfaces";
interface Props {
  startMenu: boolean;
  globalContext: IGlobalContext;
}
const StartStick: React.FC<Props> = ({ startMenu, globalContext }) => {
  return (
    <Block
      jc="space-between"
      ai="center"
      bc="grayWind"
      size="title"
      className="startContainer"
    >
      <StartLeft startMenu={startMenu} globalContext={globalContext} />
      <StartMiddle globalContext={globalContext} />
      <StartRight />
    </Block>
  );
};
export default StartStick;
