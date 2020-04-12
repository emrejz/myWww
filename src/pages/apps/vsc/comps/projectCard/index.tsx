import React from "react";
import { Block, Text } from "styledComp";
import "./projectCard.scss";
import { ISelectedVscFile } from "interfaces";
interface Props {
  item: ISelectedVscFile | null;
}
const ProjectCard: React.FC<Props> = ({ item }): JSX.Element | null => {
  return item ? (
    <Block
      col
      jc="flex-start"
      ai="flex-start"
      size="textB"
      clr="whiteD"
      pad="2px 14px"
    >
      <Text clr="purpleD">
        <Text>export default </Text>
        {"{"}
      </Text>
      <Block wrp pad="10px">
        <Text clr="blueL">title: </Text>
        <Text>
          <Text clr="orangeD">"</Text>
          {item.title}
          <Text clr="orangeD">"</Text>
          <Text>,</Text>
        </Text>
      </Block>
      <Block wrp pad="10px">
        <Text clr="blueL">links: </Text>
        <Text>
          <Text clr="orangeD">[</Text>
          <a
            href={item.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            demo
          </a>
          <Text>,</Text>
          <a
            href={item.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            repo
          </a>
          <Text clr="orangeD">]</Text>
          <Text>,</Text>
        </Text>
      </Block>
      <Block wrp pad="10px">
        <Text clr="blueL">description: </Text>
        <Text ml="20px" ta="left">
          <Text clr="orangeD">"</Text>
          {item.desc}
          <Text clr="orangeD">"</Text>
          <br />
          <Text clr="purpleD">{"}"}</Text>
        </Text>
      </Block>
    </Block>
  ) : null;
};

export default ProjectCard;
