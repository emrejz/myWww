import React from "react";
import { Block, Text } from "styledComp";
import data from "data";
import LeftMenuFile from "./leftMenuFile";
import { ISelectedVscFile } from "interfaces";
interface Props {
  item: { name: string; status: boolean };
  selectedFile: ISelectedVscFile[];
  selectedFolderFunc: (name: string) => void;
  selectedFolder: { name: string; status: boolean }[];
  setSelectedFile: React.Dispatch<React.SetStateAction<ISelectedVscFile[]>>;
}
const LeftMenuItems: React.FC<Props> = ({
  item: { name, status },
  selectedFile,
  setSelectedFile,
  selectedFolderFunc,
  selectedFolder,
}): JSX.Element | null => {
  const mainTags = [
    "www",
    "all",
    "backEnd",
    "frontEnd",
    "react",
    "next",
    "vue",
    "angular",
    "noFrmwrk",
  ];
  const condPL = (param: string): string => {
    switch (param) {
      case mainTags[0]:
        return "";
      case mainTags[1]:
        return "23px";
      case mainTags[2]:
      case mainTags[3]:
        return "31px";
      default:
        return "39px";
    }
  };
  const condFile = (param: string): boolean => {
    switch (param) {
      case mainTags[0]:
      case mainTags[1]:
      case mainTags[3]:
        return false;
      default:
        return true;
    }
  };

  const statusFolder = (name: string): boolean => {
    let total = true;
    switch (name) {
      case mainTags[1]:
        total = selectedFolder[0].status;
        break;
      case mainTags[2]:
      case mainTags[3]:
        total = selectedFolder[0].status && selectedFolder[1].status;
        break;
      case mainTags[4]:
      case mainTags[5]:
      case mainTags[6]:
      case mainTags[7]:
      case mainTags[8]:
        total =
          selectedFolder[0].status &&
          selectedFolder[1].status &&
          selectedFolder[3].status;
        break;
      default:
        total = true;
        break;
    }
    return total;
  };
  return statusFolder(name) ? (
    <Block col wid={name === mainTags[0] ? "100%" : ""} pl={condPL(name)}>
      <Text
        size="textB"
        mar="3px 0px"
        mr="16px"
        mb={status ? "-3px" : "3px"}
        pl={name === mainTags[0] ? "15px" : ""}
        bc={name === mainTags[0] ? "grayVscWWWFolder" : ""}
        wid={name === mainTags[0] ? "100%" : ""}
        onClick={() => selectedFolderFunc(name)}
        className={status ? "downArrow" : "rightArrow"}
      >
        {name}
      </Text>
      {condFile(name) && status && (
        <Block col flex="0">
          {data.map(
            (file, index) =>
              file.tag.includes(name) && (
                <LeftMenuFile
                  file={file}
                  selectedFile={selectedFile}
                  setSelectedFile={setSelectedFile}
                  key={index}
                />
              )
          )}
        </Block>
      )}
    </Block>
  ) : null;
};
export default LeftMenuItems;
