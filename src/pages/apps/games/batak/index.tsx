import React, { useState, useEffect, useCallback } from "react";
import { Block, Text } from "styledComp";
import { BatakCard } from "./cards/usercCard";
import { BatakBotCard } from "./cards/botCard";
import { BatakGameCard } from "./cards/gameCard";
import "./index.scss";
import BatakGameHeader from "./header";
import { IAppState, IGlobalDispatch } from "../../../../interfaces";
interface Props {
  appState: IAppState;
  dispatch: IGlobalDispatch;
}
const BatakApp: React.FC<Props> = ({ appState, dispatch }) => {
  const [user, setUser] = useState<string[]>([]);
  const [bot1, setBot1] = useState<string[]>([]);
  const [bot2, setBot2] = useState<string[]>([]);
  const [bot3, setBot3] = useState<string[]>([]);
  const [turnNumber, setTurnNumber] = useState<number>(0);
  const [lastWinner, setLastWinner] = useState<number>(0);
  const [gameCount, setGameCount] = useState<number>(0);

  const [game, setGame] = useState<any[]>([]);
  const [score, setScore] = useState<any[]>([0, 0, 0, 0]);

  let players = [user, bot1, bot2, bot3];
  let setPlayers = [setUser, setBot1, setBot2, setBot3];
  const cards = [
    "m02",
    "m03",
    "m04",
    "m05",
    "m06",
    "m07",
    "m08",
    "m09",
    "m10",
    "m11",
    "m12",
    "m13",
    "mA",
    "n02",
    "n03",
    "n04",
    "n05",
    "n06",
    "n07",
    "n08",
    "n09",
    "n10",
    "n11",
    "n12",
    "n13",
    "nA",
    "k02",
    "k03",
    "k04",
    "k05",
    "k06",
    "k07",
    "k08",
    "k09",
    "k10",
    "k11",
    "k12",
    "k13",
    "kA",
    "s02",
    "s03",
    "s04",
    "s05",
    "s06",
    "s07",
    "s08",
    "s09",
    "s10",
    "s11",
    "s12",
    "s13",
    "sA",
  ];
  const { zIndex } = appState;
  const startGame = () => {
    setScore([0, 0, 0, 0]);
    setGameCount(0);
    setLastWinner(0);
    let count = 51;
    let tempCards = cards;
    let userCards: any = [];
    let bot1Cards: any = [];
    let bot2Cards: any = [];
    let bot3Cards: any = [];

    while (count >= 0) {
      let index = Math.floor(Math.random() * count);
      let card = tempCards[index];
      if (count < 13) {
        userCards.push(card);
      }
      if (count >= 13 && count < 26) {
        bot1Cards.push(card);
      }
      if (count >= 26 && count < 39) {
        bot2Cards.push(card);
      }
      if (count >= 39 && count < 52) {
        bot3Cards.push(card);
      }
      count--;
      tempCards.splice(index, 1);
    }
    userCards.sort();
    bot1Cards.sort();
    bot2Cards.sort();
    bot3Cards.sort();
    setUser(userCards);
    setBot1(bot1Cards);
    setBot2(bot2Cards);
    setBot3(bot3Cards);
  };
  useEffect(() => {
    startGame();
  }, []);
  useEffect(() => {
    const sti = setTimeout(() => {
      gameCount == 13 && clearInterval(sti);

      if (turnNumber != 0 && gameCount != 13) {
        game.length != 4 && whichCard();
      }
      if (gameCount == 13) {
      }
      if (game.length == 4) {
        setGameCount(gameCount + 1);
        const maxKoz = game
          .filter((item) => item.includes("m"))
          .sort()
          .reverse()[0];
        const maxCardWithoutKoz = game
          .filter((item) => item.includes(game[0].slice(0, 1)))
          .sort()
          .reverse()[0];

        const indexKoz = game.indexOf(maxKoz);
        const indexWithoutKoz = game.indexOf(maxCardWithoutKoz);
        if (indexKoz < 0 && indexWithoutKoz >= 0) {
          let winner = (lastWinner + indexWithoutKoz) % 4;
          score[winner] = score[winner] + 10;
          setScore([...score]);
          setTurnNumber(winner);
          setLastWinner(winner);
        }
        if (indexKoz >= 0) {
          let winner = (lastWinner + indexWithoutKoz) % 4;
          score[winner] = score[winner] + 10;
          setScore([...score]);
          setTurnNumber(winner);
          setLastWinner(winner);
        }
        setGame([]);
      }
    }, 500);
    return () => {
      clearInterval(sti);
    };
  }, [game]);
  const strongCardWithKozFunc = () =>
    game
      .filter((item) => item.includes("m"))
      .sort()
      .reverse()[0];

  const strongCardWithoutKozFunc = (firstCard: any) =>
    game
      .filter((item) => item.includes(firstCard.slice(0, 1)))
      .sort()
      .reverse()[0];
  const filteredDeckBot = (deck: string[]): string => {
    let firstCard = game[0];
    const x__ = firstCard ? firstCard.slice(0, 1) : null;
    let strongCardWithKoz = strongCardWithKozFunc();
    let strongCardWithoutKoz = strongCardWithoutKozFunc(firstCard);

    let sameCards = deck.filter((card) => card.includes(x__) && card);
    let strongCards = deck.filter((card) => card.includes("m") && card);
    let leakCard = deck[0];
    let selectedCard: string = "";

    if (sameCards.length == 0 && strongCards.length == 0) {
      selectedCard = leakCard;
    }
    if (sameCards.length != 0) {
      let filteredCards = sameCards.filter(
        (item) => item > strongCardWithoutKoz
      );
      if (filteredCards[0] && !(strongCardWithKoz && x__ != "m")) {
        selectedCard = filteredCards[0];
      } else {
        selectedCard = sameCards[0];
      }
    }
    if (sameCards.length == 0 && strongCards.length != 0) {
      let filteredCards = strongCards.filter(
        (item) => item > strongCardWithKoz
      );
      if (filteredCards[0]) {
        selectedCard = filteredCards[0];
      } else {
        selectedCard = strongCards[0];
      }
    }
    return selectedCard;
  };
  const filteredDeckUser = (): string[] => {
    let firstCard = game[0];
    const x__ = firstCard ? firstCard.slice(0, 1) : null;
    let strongCardWithKoz = strongCardWithKozFunc();
    let strongCardWithoutKoz = strongCardWithoutKozFunc(firstCard);

    let sameCards = user.filter((card) => card.includes(x__) && card);
    let strongCards = user.filter((card) => card.includes("m") && card);

    let playableCards: string[] = [];
    if (!firstCard) return (playableCards = user);

    if (sameCards.length == 0 && strongCards.length == 0) {
      playableCards = user;
    }
    if (sameCards.length != 0) {
      let filteredCards = sameCards.filter(
        (item) => item > strongCardWithoutKoz
      );
      if (filteredCards[0] && !(strongCardWithKoz && x__ != "m")) {
        playableCards = filteredCards;
      } else {
        playableCards = sameCards;
      }
    }
    if (sameCards.length == 0 && strongCards.length != 0) {
      let filteredCards = strongCards.filter(
        (item) => item > strongCardWithKoz
      );
      if (filteredCards[0]) {
        playableCards = filteredCards;
      } else {
        playableCards = strongCards;
      }
    }
    return playableCards;
  };
  const whichCard = () => {
    const bot: string[] = players[turnNumber];
    const setBot: any = setPlayers[turnNumber];
    let selectedCard: string = "";
    let count = turnNumber + 1;
    setTurnNumber(count == 4 ? 0 : count);
    selectedCard = filteredDeckBot(bot);
    setGame([...game, selectedCard]);
    setBot([...bot.filter((item) => item != selectedCard)]);
  };

  const cardClick = (card: any) => {
    const filteredDeck = filteredDeckUser();
    if (game.length != 4 && turnNumber == 0 && filteredDeck.includes(card)) {
      setTurnNumber(turnNumber + 1);
      setGame([...game, card]);
      setUser([...user.filter((item) => item != card)]);
    }
  };
  return (
    <Block
      flex="1"
      col
      pos="relative"
      bc="greenBatakScreen"
      hei="100%"
      z={zIndex}
      className="batakContainer"
    >
      <BatakGameHeader appState={appState} dispatch={dispatch} />
      <Block flex="1" font="roboB" size="h3">
        <Block className="userContainer">
          {user.map((card, index) => {
            return <BatakCard key={index} card={card} cardClick={cardClick} />;
          })}
        </Block>
        <Block col jc="center">
          {bot1.map((card, index) => {
            return <BatakBotCard key={index} card={card} />;
          })}
        </Block>
        <Block flex="1" jc="center">
          {bot2.map((card, index) => {
            return <BatakBotCard key={index} card={card} />;
          })}
        </Block>
        <Block col jc="center">
          {bot3.map((card, index) => {
            return <BatakBotCard key={index} card={card} />;
          })}
        </Block>
        <Block className="gameContainer">
          {game.map((item, index) => {
            return (
              <BatakGameCard
                key={index}
                card={item}
                top={(index + lastWinner) % 4 == 0 ? "70px" : ""}
                left={(index + lastWinner) % 4 == 3 ? "70px" : ""}
                right={(index + lastWinner) % 4 == 1 ? "70px" : ""}
                bottom={(index + lastWinner) % 4 == 2 ? "70px" : ""}
              />
            );
          })}
        </Block>
        {gameCount == 13 && (
          <Block col pos="absolute" className="batakResultBox">
            <Text>You: {score[0]} </Text>
            <Text>Bot1: {score[1]} </Text>
            <Text>Bot2: {score[2]} </Text>
            <Text>Bot3: {score[3]} </Text>
            <Text as="button" onClick={() => startGame()}>
              restart
            </Text>
          </Block>
        )}
      </Block>
    </Block>
  );
};
export default BatakApp;
