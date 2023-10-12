import axios from "axios";
import { React, useEffect, useState } from "react";

export const Emoji = () => {
  const [emoji, setEmoji] = useState({});

  useEffect(() => {
    axios
      .get("https://api.emojisworld.fr/v1/random?limit=1")
      .then((res) => {
        console.log(res.data.results);
        setEmoji(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const changeEmoji = () => {
    axios
      .get("https://api.emojisworld.fr/v1/random?limit=1")
      .then((res) => {
        console.log(res.data.results);
        setEmoji(res.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>
        {emoji[0]?.name} {emoji[0]?.emoji}
      </h1>
      <button onClick={changeEmoji}>Otro emoji</button>
    </div>
  );
};
