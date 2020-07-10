import React from "react";
import { Block, Text } from "styledComp";
import { ProjectCard } from "..";
import { ISelectedVscFile } from "interfaces";
import "./vscEditorPanel.scss";

interface Props {
  selectedFile: ISelectedVscFile[];
  setSelectedFile: React.Dispatch<React.SetStateAction<ISelectedVscFile[]>>;
}
const VscEditorPanel: React.FC<Props> = ({ selectedFile, setSelectedFile }) => {
  //todo row number
  // const rowCounter = () => {
  //   const row = [];
  //   for (let i = 0; i < 300; i++) {
  //     console.log("object");
  //     row.push(<Text>{i}</Text>);
  //   }
  //   return row;
  // };

  const selectedFileFunc = (file: ISelectedVscFile) => {
    setSelectedFile(
      selectedFile.map((item) => {
        if (item.title === file.title) return { ...file, selected: true };
        else return { ...item, selected: false };
      })
    );
  };
  const closeFile = (file: ISelectedVscFile) => {
    setSelectedFile(
      selectedFile.filter((item, index) => {
        if (item.title === file.title) {
          if (selectedFile[index + 1]) {
            selectedFile[index + 1].selected = true;
          } else {
            if (selectedFile[index - 1]) {
              selectedFile[index - 1].selected = true;
            }
          }
        } else return item;
      })
    );
  };
  const showSelectedFile = (): ISelectedVscFile | null => {
    const item = selectedFile.filter((it) => it.selected === true);
    return item[0] ? item[0] : null;
  };
  return (
    <Block col flex="1" over="auto" bc="grayVsc">
      <Block bc="grayVscTabBar" overX="auto">
        {selectedFile.map((item) => (
          <Block
            ai="center"
            jc="space-around"
            size="textN"
            bc={item.selected ? "grayVsc" : "grayVscNoActTab"}
            clr={item.selected ? "whiteD" : "whiteXD"}
            className="vscTopTab"
            key={item.title}
          >
            <Block
              jc="center"
              ai="flex-end"
              onClick={() => selectedFileFunc(item)}
            >
              <Text size="x06" clr="yellowD" pr="6px">
                JS
              </Text>
              <Text> {item.title}.js</Text>
            </Block>
            <Text onClick={() => closeFile(item)} pad="0px 6px">
              x
            </Text>
          </Block>
        ))}
      </Block>
      <Block overY="auto">
        <ProjectCard item={showSelectedFile()}></ProjectCard>
      </Block>
    </Block>
  );
};

export default VscEditorPanel;
