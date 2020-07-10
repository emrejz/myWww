import React from "react";
import { Block, Text } from "styledComp";
import { IGameCell, IGameDispatch } from "interfaces";
interface Props {
  item: IGameCell[];
  icon: string;
  gameDispatch: IGameDispatch;
}
const Row: React.FC<Props> = ({
  item,
  gameDispatch: { openCell, flagCell },
  icon,
}) => {
  const contextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cell: IGameCell
  ) => {
    e.preventDefault();
    flagCell(cell);
  };

  return (
    <Block>
      {item.map((cell) => (
        <Block
          jc="center"
          ai="center"
          size="textB"
          font="roboB"
          bc={cell.open ? "grayMineCellOpen" : "grayMineCell"}
          className="mineCell"
          onClick={() => openCell(cell)}
          onContextMenu={(e) => contextMenu(e, cell)}
          key={cell.x + cell.y}
        >
          {cell.flag ? (
            <img src={require("assets/images/flag.png")} alt="flag" />
          ) : cell.val !== "x" ? (
            <Text
              clr={
                cell.val === 0
                  ? "trans"
                  : cell.val === 1
                  ? "blueMine"
                  : cell.val === 2
                  ? "greenMine"
                  : cell.val === 3
                  ? "orangeMine"
                  : cell.val === 4
                  ? "pinkMine"
                  : cell.val === 5
                  ? "purpleMine"
                  : cell.val === 6
                  ? "redMine"
                  : cell.val === 7
                  ? "cyanMine"
                  : "yellowMine"
              }
            >
              {cell.val}
            </Text>
          ) : (
            <img src={require("assets/images/" + icon)} alt={icon} />
          )}
        </Block>
      ))}
    </Block>
  );
};

export default Row;
