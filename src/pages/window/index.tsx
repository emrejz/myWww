import React, { useState, useContext, useEffect } from "react";
import { Context } from "store/StateProvider";
import { Block } from "styledComp";
import { AppFile } from "./comps";
import { BioApp, VscApp, GameApp } from "../";
import { StartStick } from "components";
import { IGlobalContext } from "interfaces";
import "./window.scss";
import BatakApp from "pages/apps/games/batak";

const WindowScreen: React.FC = () => {
  const [startMenu, setStartMenu] = useState<boolean>(false);
  const globalContext = useContext<IGlobalContext>(Context);
  const { state, dispatch } = globalContext;
  const { appList } = state;

  const clickFunc = (e: MouseEvent) => {
    let target = e.target as HTMLElement;
    let ids = target.id;
    if (ids.includes("startButton")) {
      if (startMenu) {
        setStartMenu(false);
      } else {
        setStartMenu(true);
      }
    } else {
      startMenu && setStartMenu(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", clickFunc);
    return () => window.removeEventListener("click", clickFunc);
  }, [startMenu]);
  return (
    <Block col flex="1" wid="100%" hei="100%" over="hidden">
      <Block className="windowContainer">
        <Block
          wrp
          jc="center"
          ai="center"
          pos="absolute"
          z="20"
          wid="100%"
          hei="100%"
          bc="greenWindScreen"
        >
          {appList.map(
            (item) =>
              item.name != "shut down" && (
                <AppFile item={item} dispatch={dispatch} key={item.name} />
              )
          )}
        </Block>
        {appList[2].open && (
          <GameApp appState={appList[2]} dispatch={dispatch} />
        )}
        {appList[3].open && (
          <BatakApp appState={appList[3]} dispatch={dispatch} />
        )}
        {appList[1].open && <BioApp state={appList[1]} dispatch={dispatch} />}
        {appList[0].open && <VscApp state={appList[0]} dispatch={dispatch} />}
      </Block>

      <StartStick startMenu={startMenu} globalContext={globalContext} />
    </Block>
  );
};
export default WindowScreen;
