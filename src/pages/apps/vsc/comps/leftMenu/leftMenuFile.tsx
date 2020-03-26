import React from "react";
import { Text } from "styledComp";
import { ISelectedVscFile } from "interfaces";
interface Props {
  file: ISelectedVscFile;
  selectedFile: ISelectedVscFile[];
  setSelectedFile: React.Dispatch<React.SetStateAction<ISelectedVscFile[]>>;
}
const LeftMenuFile: React.FC<Props> = ({
  file,
  selectedFile,
  setSelectedFile
}) => {
  const selectedFileFunc = () => {
    let newList = [];
    if (selectedFile.filter(item => item.title == file.title).length) {
      newList = selectedFile.map(item =>
        item.title == file.title
          ? { ...item, selected: true }
          : { ...item, selected: false }
      );
    } else {
      newList = [
        { ...file, selected: true },
        ...selectedFile.map(item => ({ ...item, selected: false }))
      ];
    }
    setSelectedFile([...newList]);
  };

  return (
    <Text
      pad="2px"
      pl="10px"
      pr="15px"
      size="textN"
      onClick={() => selectedFileFunc()}
      className={"classForCursor"}
    >
      <Text size="x06" font="roboR" clr="yellowD" pr="6px">
        JS
      </Text>
      {file.title}.js
    </Text>
  );
};
export default LeftMenuFile;
