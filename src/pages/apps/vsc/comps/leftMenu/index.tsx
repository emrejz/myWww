import React, { useState } from "react";
import { Block, Text } from "styledComp";
import LeftMenuFolder from "./leftMenuFolder";
import { ISelectedVscFile } from "interfaces";
import "./vscLeftMenu.scss";

interface Props {
  selectedFile: ISelectedVscFile[];
  setSelectedFile: React.Dispatch<React.SetStateAction<ISelectedVscFile[]>>;
}
const VscLeftMenu: React.FC<Props> = ({ selectedFile, setSelectedFile }) => {
  const [folderMenuToggle, setFolderMenuToggle] = useState<boolean>(true);
  const [selectedFolder, setSelectedFolder] = useState([
    { name: "www", status: true },
    { name: "all", status: true },
    { name: "backEnd", status: true },
    { name: "frontEnd", status: true },
    { name: "react", status: true },
    { name: "next", status: false },
    { name: "vue", status: false },
    { name: "angular", status: false },
    { name: "noFrmwrk", status: false },
  ]);
  const selectedFolderFunc = (name: string) => {
    let newList = selectedFolder.map((item) =>
      item.name == name ? { ...item, status: !item.status } : item
    );

    setSelectedFolder([...newList]);
  };

  return (
    <Block>
      <Block col bc="grayVscLeft" className="vscLeftMenu">
        <img
          onClick={() => setFolderMenuToggle(!folderMenuToggle)}
          src={
            folderMenuToggle
              ? require("assets/images/sheet.png")
              : require("assets/images/closedSheet.png")
          }
          alt={"folder"}
        />
        <img src={require("assets/images/search.png")} alt={"search"} />
        <img src={require("assets/images/fork.png")} alt={"fork"} />
        <img src={require("assets/images/debug.png")} alt={"debug"} />
        <img src={require("assets/images/extentions.png")} alt={"extentions"} />
        <img src={require("assets/images/bookmarks.png")} alt={"bookmarks"} />
      </Block>

      <Block
        col
        bc="grayVscFolders"
        font="roboR"
        clr="whiteD"
        className={folderMenuToggle ? "vscFolders" : "vscFoldersClose"}
      >
        <Text size="textB" pad="4px 0px" pl="15px">
          EXPLORER
        </Text>
        <Block col overY="auto" ai="flex-start">
          {selectedFolder.map((item, index) => (
            <LeftMenuFolder
              item={item}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              selectedFolderFunc={selectedFolderFunc}
              selectedFolder={selectedFolder}
              key={index}
            />
          ))}
        </Block>
      </Block>
    </Block>
  );
};

export default VscLeftMenu;
