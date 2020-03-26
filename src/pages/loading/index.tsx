import React from "react";
import { Block, Text } from "styledComp";
import BlueScreen from "./BlueScreen";
import "./loading.scss";
interface Props {
  loadedDocument: string | Event;
}
const LoadingScreen: React.FC<Props> = ({ loadedDocument }) => {
  return (
    <Block
      col
      flex="1"
      jc="center"
      ai="center"
      bc="black"
      size="init"
      clr="white"
      hei="100vh"
    >
      {loadedDocument != "blueScreen" ? (
        <Block col ai="center">
          <Block className="loadingBox">
            <span></span>
            <span></span>
            <span></span>
          </Block>
          <Text size="h1">loading</Text>
        </Block>
      ) : (
        <BlueScreen />
      )}
    </Block>
  );
};
export default LoadingScreen;
