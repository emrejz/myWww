import React from "react";
import { Block } from "styledComp";
import { StartMenuItem } from "../";
import { IGlobalContext } from "interfaces";
interface Props {
  globalContext: IGlobalContext;
}
const StartMiddle: React.FC<Props> = ({
  globalContext: { state, dispatch }
}) => {
  return (
    <Block wrp flex="1" className="startMiddle">
      {state.appList.map(item => (
        <StartMenuItem appState={item} dispatch={dispatch} key={item.name} />
      ))}
    </Block>
  );
};

export default StartMiddle;
