import React from "react";
import { Block, Text } from "styledComp";
import { IAppState, IGlobalDispatch } from "interfaces";
interface Props {
  state: IAppState;
  dispatch: IGlobalDispatch;
}
const BioBody: React.FC<Props> = ({ state, dispatch }) => {
  const { name } = state;
  const { openApp } = dispatch;
  return (
    <Block
      col
      flex="1"
      over="auto"
      font="roboR"
      size="textN"
      ml="10px"
      mt="10px"
      className="bioBody"
      onClick={() => openApp({ name, open: true })}
    >
      <Text mb="24px">name -> Emre</Text>
      <Text mb="24px">surname -> Kayacan</Text>
      <Text mb="24px">military service -> done</Text>
      <Text mb="24px">
        education -> Namık Kemal University Electronics and Communication
        engr.2011-2018
      </Text>
      <Text mb="24px">email -> emre.kayacan@msn.com</Text>
      <Text mb="24px">git -> https://github.com/emrejz</Text>
      <Text mb="24px">
        skills -> react, redux, vue, angular, NgRx, typeScript, next,
        react-native, node, mongo, redis, graphql, socket, materialUI,
        bootstrap, styled-components, pug, HTML/CSS/SCSS
      </Text>
      <Text mb="24px">
        About me-> I graduated from university late, i had a health problem. I
        worked at the factory for one year, but i wanted to quit my job to
        advance my career in software.
        <br />I can use react,vue,angular,pure js in the front-end side.
        <br />I can use node in the back-end side.
        <br />I can use react-native in the mobile side. (I could develop an
        application if my computer isn't garbage)
        <br />I want to learn other languages or frameworks. You can send me a
        design/task for test me.
      </Text>
      <Text mb="24px">
        About this website-> designed by Bill Gates, developed by me. I used
        react in the front-end. I used typescript, react hooks and context, scss
        and styled - components in this website.
        <br />
        Todo;
        <br />
        # winamp /papi papi papi çilo
        <br /># batak /best turkish strategy game
        <br /># os notification sounds
      </Text>
    </Block>
  );
};

export default BioBody;
