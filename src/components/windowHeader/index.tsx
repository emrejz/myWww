import React from "react";
import { Block, Text } from "../../styledComp";
import { IAppState, IGlobalDispatch } from "../../interfaces";
import "./header.scss";
interface Props {
  state: IAppState;
  dispatch: IGlobalDispatch;
  vsc?: Boolean;
  reSize?: Boolean;
}
const WindowHeader: React.FC<Props> = ({
  state,
  dispatch,
  vsc,
  reSize = true,
}) => {
  const { name, icon, isActive } = state;
  const { minSizeApp, openApp, reSizeApp } = dispatch;
  const condBC = () => {
    if (vsc) {
      if (isActive) {
        return "grayVscTopMenu";
      } else return "grayWindTop";
    } else {
      if (isActive) {
        return "blueWindTop";
      } else return "grayWindTop";
    }
  };
  return (
    <Block
      jc="space-between"
      ai="center"
      hei="43px"
      size={vsc ? "textS" : "title"}
      font="roboB"
      wid="100%"
      bc={condBC()}
      clr="white"
    >
      <Block
        flex="1"
        jc="flex-start"
        ai="center"
        ml="10px"
        onClick={() => openApp({ name, open: true })}
      >
        <img
          width={vsc ? "24px" : "32px"}
          height={vsc ? "24px" : "32px"}
          src={require("assets/images/" + icon)}
          alt={icon}
        />
        {vsc ? (
          <Block
            ai="center"
            jc="flex-start"
            clr="whiteD"
            pl="6px"
            className="vscTopMenu"
            onClick={() => openApp({ name, open: true })}
          >
            <Text>File</Text>

            <Text>Help</Text>
          </Block>
        ) : (
          <Text ml="10px">{name}</Text>
        )}
      </Block>
      <Block className="headerButtons">
        <Text onClick={() => minSizeApp({ name })}>-</Text>
        {reSize && (
          <Text
            className="scaleIcon"
            onClick={() => {
              reSizeApp({ name });
              openApp({ name, open: true });
            }}
          ></Text>
        )}
        <Text onClick={() => openApp({ name, open: false })}>X</Text>
      </Block>
    </Block>
  );
};

export default WindowHeader;
