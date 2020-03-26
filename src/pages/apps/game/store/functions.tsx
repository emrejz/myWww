import { IGameCell, IGameState } from "interfaces";

const finder = (state: IGameState, cell: IGameCell): IGameState => {
  let { cellList } = state;
  let { x, y, mine, flag, open } = cell;
  let value = 0;
  if (!open && !flag) {
    if (!mine) {
      state.openedCell = state.openedCell + 1;

      for (let row = y - 1; row < y + 2; row++) {
        for (let col = x - 1; col < x + 2; col++) {
          if (
            col > -1 &&
            col < cellList[0].length &&
            row > -1 &&
            row < cellList.length
          ) {
            if (cellList[row][col].mine) {
              value++;
            }
          }
        }
      }
      if (value > 0) {
        cellList[y][x].val = value;
        cellList[y][x].open = true;
        state.gameStatus = "start";
      }
      if (value == 0) {
        cellList[y][x].open = true;
        cellList[y][x].val = 0;
        state.gameStatus = "start";

        findAround(state, cell);
      }
      if (state.openedCell == 72) {
        state.openedCell = 0;
        state.gameStatus = "success";
      }
    } else {
      cellList[y][x].open = true;
      cellList[y][x].val = "x";
      state.openedCell = 0;
      state.gameStatus = "fail";
    }
  }
  return state;
};

const findAround = (state: IGameState, cell: IGameCell) => {
  let { cellList } = state;
  let { x, y } = cell;
  for (let row = -1 + y; row < 2 + y; row++) {
    for (let col = -1 + x; col < 2 + x; col++) {
      if (
        col > -1 &&
        col < cellList[0].length &&
        row > -1 &&
        row < cellList.length &&
        !(row == y && col == x)
      ) {
        finder(state, cellList[row][col]);
      }
    }
  }
};
const startGame = (): IGameState => {
  let cellList: IGameCell[][] = [];
  let newLine: IGameCell[] = [];
  const mineCounter = 9;
  for (let row = 0; row < mineCounter; row++) {
    newLine = [];
    for (let col = 0; col < mineCounter; col++) {
      newLine.push({
        x: col,
        y: row,
        open: false,
        val: "",
        mine: false,
        flag: false
      });
      if (col == mineCounter - 1) cellList = [...cellList, newLine];
    }
  }

  for (let i = 0; i < mineCounter; i++) {
    let randomRow = Math.floor(Math.random() * mineCounter);
    let randomCol = Math.floor(Math.random() * mineCounter);
    let box = cellList[randomRow][randomCol];
    if (box.mine) i--;
    else {
      box.mine = true;
    }
  }
  return {
    cellList,
    gameStatus: "ready",
    flagCounter: 0,
    openedCell: 0,
    mineCounter: 9
  };
};
const openCell = (state: IGameState, payload: IGameCell): IGameState => {
  let { gameStatus } = state;
  if (gameStatus == "ready" || gameStatus == "start") {
    return finder(state, payload);
  } else return state;
};
const flagCell = (state: IGameState, payload: IGameCell): IGameState => {
  let { gameStatus, cellList } = state;
  if (gameStatus == "ready" || gameStatus == "start") {
    const { x, y, flag, open } = payload;
    if (flag) {
      state.flagCounter = state.flagCounter - 1;
    } else {
      state.flagCounter = state.flagCounter + 1;
    }
    if (!open) {
      cellList[y][x].flag = !flag;
    }
  }
  return state;
};
export { startGame, openCell, flagCell };
