import React from "react";
import { Block } from "styledComp";
import { BioHeader, BioBody } from "./comps";
import "./bio.scss";
import { IAppState, IGlobalDispatch } from "interfaces";
interface Props {
  state: IAppState;
  dispatch: IGlobalDispatch;
}
const BioApp: React.FC<Props> = ({ state, dispatch }) => {
  const { size, zIndex } = state;

  return (
    <Block
      col
      flex="1"
      bc="white"
      wid={size}
      hei={size}
      z={zIndex}
      className="bioContainer"
    >
      <BioHeader state={state} dispatch={dispatch} />
      <BioBody state={state} dispatch={dispatch} />
    </Block>
  );
};

export default BioApp;
