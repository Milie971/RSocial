import { useState } from "react";
import { Tweet } from "./Tweet";

import(Tweet);
function App() {
  let [tweets, setTweets] = useState();
  let [username, setUsername] = useState("Emilie");
  const addLetter = () => {
    username += "y";
  };
  return (
    <div>
      <p>{username}</p>
      <button onClick={addLetter}>Ajoute</button>
      <div className="tweet-container">
        <Tweet name="Cloe" content="J'ai hate d'aller en Guadeloupe" like={5} />
        <Tweet
          name="Victoria"
          content="Je vais voir mes filleuiles"
          like={15}
        />
        <Tweet
          name="Larry"
          content="Il est temps de mettre en place mes projets"
          like={20}
        />
        <Tweet
          name="Emilie"
          content="React c'est dur mais c'est cool"
          like={10}
        />
      </div>
    </div>
  );
}

export default App;
