import React, { useEffect, useState } from "react";
import { Block, Text } from "styledComp";

const StartRight: React.FC = () => {
  const [date, setDate] = useState<string>("");
  const [cond, setCond] = useState<boolean>(true);
  useEffect(() => {
    const sto = setTimeout(() => {
      let date = new Date();
      let min =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      if (cond) {
        setDate(hour + ":" + min);
        setCond(!cond);
      } else {
        setDate(hour + " " + min);
        setCond(!cond);
      }
    }, 1000);
    return () => {
      clearTimeout(sto);
    };
  }, [cond]);
  return (
    <Block jc="space-between" ai="center" className="startRight">
      <Text>{date}</Text>
    </Block>
  );
};

export default StartRight;
