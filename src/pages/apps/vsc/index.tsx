import React, { useState } from "react";
import { Block, Text } from "styledComp";
import { VscTopMenu, VscLeftMenu, VscEditorPanel } from "./comps";
import { IAppState, IGlobalDispatch, ISelectedVscFile } from "interfaces";
import "./index.scss";

interface Props {
  state: IAppState;
  dispatch: IGlobalDispatch;
}
const VscApp: React.FC<Props> = ({ state, dispatch }) => {
  const [selectedFile, setSelectedFile] = useState<ISelectedVscFile[]>([]);
  const { name, size, zIndex } = state;
  return (
    <Block
      col
      flex="1"
      mnxW={size}
      mnxH={size}
      z={zIndex}
      className="vscContainer"
    >
      <VscTopMenu name={name} dispatch={dispatch} />
      <Block
        flex="1"
        bc="grayVsc"
        over="hidden"
        onClick={() => dispatch.openApp({ name, open: true })}
      >
        <VscLeftMenu
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
        <VscEditorPanel
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
        />
      </Block>
      <Block
        wrp
        ai="center"
        jc="flex-end"
        size="textXS"
        font="roboL"
        clr="whiteD"
        bc="blueVscFooter"
        onClick={() => dispatch.openApp({ name, open: true })}
      >
        <Text pr="10px">UTF-8</Text>
        <Text pr="10px">JavaScript</Text>
        <Text pr="10px">Prettier: X</Text>
        <Text pr="10px">Formatting: X</Text>
      </Block>
    </Block>
  );
};
export default VscApp;
