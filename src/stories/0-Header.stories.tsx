import React, { useContext } from "react";
import WindowHeader from "../components/windowHeader";
import { Context } from "../store/StateProvider";
import { Block } from "../styledComp";

export default {
  title: "App Headers",
};
export const VscHeader = () => {
  const { state, dispatch } = useContext(Context);
  const vscState = state.appList[0];
  return (
    <Block wid={vscState.size}>
      <WindowHeader state={vscState} dispatch={dispatch} vsc={true} />
    </Block>
  );
};

export const BioHeader = () => {
  const { state, dispatch } = useContext(Context);
  const bioState = state.appList[1];
  return (
    <Block wid={bioState.size}>
      <WindowHeader state={bioState} dispatch={dispatch} />
    </Block>
  );
};

export const MineHeader = () => {
  const { state, dispatch } = useContext(Context);
  const MineState = state.appList[2];
  return (
    <Block wid="300px">
      <WindowHeader state={MineState} dispatch={dispatch} reSize={false} />
    </Block>
  );
};

export const BatakHeader = () => {
  const { state, dispatch } = useContext(Context);
  const BatakState = state.appList[3];
  return (
    <Block wid={BatakState.size}>
      <WindowHeader state={BatakState} dispatch={dispatch} />
    </Block>
  );
};
