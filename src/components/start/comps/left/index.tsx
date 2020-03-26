import React from "react";
import { Block, Text } from "styledComp";
import { IGlobalContext } from "interfaces";
interface Props {
  globalContext: IGlobalContext;
  startMenu: boolean;
}
const StartLeft: React.FC<Props> = ({
  globalContext: { state, dispatch },
  startMenu
}) => {
  const startMenuFunc = (name: string) => {
    if (name == "shut down") {
      window.open(
        "https://i.giphy.com/media/ccRN9H1zx8KSgUPgyD/source.gif",
        "_self"
      );
    } else {
      dispatch.openApp({ name, open: true });
    }
  };
  return (
    <Block
      jc="space-between"
      ai="center"
      className="startLeft"
      id="startButton"
    >
      <img
        src={require("assets/images/start.png")}
        id="startButton"
        alt="startButton"
      />
      <Text pl="4px" id="startButton">
        Start
      </Text>
      {startMenu && (
        <Block col ai="flex-start" className="startMenu">
          {state.appList.map(item => (
            <Block
              ai="center"
              bc="grayWind"
              wid="100%"
              onClick={() => startMenuFunc(item.name)}
              key={item.name}
            >
              <img
                src={require("assets/images/" + item.icon)}
                alt={item.icon}
              />
              <Text>{item.name}</Text>
            </Block>
          ))}
        </Block>
      )}
    </Block>
  );
};
export default StartLeft;
