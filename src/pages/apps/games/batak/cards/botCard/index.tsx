import React from "react";
import { Block } from "styledComp";

interface Props {
  card: any;
}

export const BatakBotCard: React.FC<Props> = ({ card }) => {
  return <Block hei="30px" wid="40px" bc="white" className="botCard"></Block>;
};
