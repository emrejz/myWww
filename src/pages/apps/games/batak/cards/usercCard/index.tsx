import React from "react";
import { Block, Text } from "styledComp";

interface Props {
  card: any;
  cardClick: (card: any) => void;
}

export const BatakCard: React.FC<Props> = ({ card, cardClick }) => {
  const x__ = card.slice(0, 1);
  const _x_ = card.slice(1, 2);
  const _xx = card.slice(1, 3);
  const __x = card.slice(2, 3);
  const numberFinder = () =>
    _x_ == "0" ? (
      <Text>{__x}</Text>
    ) : (
      <Text>
        {_xx == "11" ? "J" : _xx == "12" ? "Q" : _xx == "13" ? "K" : _xx}
      </Text>
    );
  const imgFunc = (size: string) => (
    <img
      style={{ width: size, height: size }}
      src={require(`assets/images/${
        x__ == "k"
          ? "kupa"
          : x__ == "n"
          ? "karo"
          : x__ == "m"
          ? "maca"
          : "sinek"
      }.png`)}
    />
  );

  return (
    <Block
      col
      className="cardContainer"
      clr={x__ == "k" || x__ == "n" ? "redCard" : "black"}
      onClick={() => cardClick(card)}
    >
      <Block jc="flex-start">
        <Block col mar="2px" ai="center">
          {numberFinder()}
          {imgFunc("24px")}
        </Block>
      </Block>
      <Block flex="1" ai="center" jc="center">
        {imgFunc("32px")}
      </Block>
      <Block jc="flex-end">
        <Block col ai="center" mar="2px">
          <Block
            col
            mar="2px"
            ai="center"
            style={{ transform: "rotateZ(180deg)" }}
          >
            {numberFinder()}
            {imgFunc("24px")}
          </Block>
        </Block>
      </Block>
    </Block>
  );
};
