import React from "react";
import { Block, Text } from "styledComp";
const BlueScreen: React.FC = () => {
  return (
    <Block
      flex="1"
      jc="center"
      ai="center"
      size="init"
      bc="blueWindTop"
      clr="white"
      pad="30px"
      className="blueScreen"
    >
      <Text font="mono" size="textS">
        A problem has been detected and Windows has been shut down to prevent
        damage <br />
        to your computer.
        <br />
        <br />
        UNMOUNTABLE_BOOT_VOLUME
        <br />
        <br />
        If this is the first time you've seen this error screen,
        <br />
        restart your computer. If this screen appears again, follow
        <br />
        these steps:
        <br />
        <br />
        Check to make sure any new hardware or software is properly installed.
        <br />
        If this is a new installation, ask your hardware or software
        manufacturer
        <br />
        for any Windows updates you might need.
        <br />
        Select Safe Mode
        <br />
        <br />
        Technical Information
        <br />
        <br />
        *** STOP: 0X00000ED (0X80F128D0, 0X000009C, 0X0000000, 0X0000000)
      </Text>
    </Block>
  );
};
export default BlueScreen;
