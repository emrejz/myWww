import React from "react";
import { Block, Text } from "styledComp";
import { IGlobalDispatch } from "interfaces";
import "./vscTopMenu.scss";

interface Props {
  name: string;
  dispatch: IGlobalDispatch;
}
const VscTopMenu: React.FC<Props> = ({ name, dispatch }) => {
  const { openApp, minSizeApp, reSizeApp } = dispatch;
  return (
    <Block
      ai="center"
      jc="space-between"
      font="roboB"
      size="textS"
      bc="grayVscTopMenu"
    >
      <Block
        ai="center"
        jc="flex-start"
        clr="whiteD"
        pl="6px"
        className="vscTopMenu"
        onClick={() => openApp({ name, open: true })}
      >
        <img src={require("assets/images/vsc.png")} alt="vscode" />
        <Text>File</Text>

        <Text>Help</Text>
      </Block>
      <Block clr="whiteD" className="vscExit">
        <Text onClick={() => minSizeApp({ name: "projects" })}>-</Text>
        <Text
          className="scaleIcon"
          onClick={() => {
            reSizeApp({ name: "projects" });
            openApp({ name, open: true });
          }}
        ></Text>
        <Text onClick={() => openApp({ name: "projects", open: false })}>
          X
        </Text>
      </Block>
    </Block>
  );
};

export default VscTopMenu;
