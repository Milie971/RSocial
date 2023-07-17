import { useState } from "react";
import { Tweet } from "./Tweet";

const DEFAULT_TWEET = [
  {
    id: 0,
    name: "Emilie",
    content: "React c'est dur mais c'est cool",
    like: 10,
  },
  {
    id: 1,
    name: "Aryan",
    content: "Money",
    like: 100,
  },
  {
    id: 2,
    name: "Mymy",
    content: "Lecture, Patisserie, Plage",
    like: 10,
  },
  {
    id: 3,
    name: "Larry",
    content: "Le chien noir",
    like: 1,
  },
];
import(Tweet);
function App() {
  const [tweets, setTweets] = useState(DEFAULT_TWEET);
  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetID));
  };
  const tweetsList = tweets.map((tweet) => {
    return (
      <Tweet
        key={tweet.id}
        name={tweet.name}
        content={tweet.content}
        like={tweet.like}
        onDelete={() => {}}
      />
    );
  });
  // let [username, setUsername] = useState("Emilie");
  // const addLetter = () => {
  //   username += "y";
  // };
  return (
    <div>
      {/* <p>{username}</p>
      <button onClick={addLetter}>Ajoute</button> */}
      <div className="tweet-container">
        {tweets.map((tweet) => {
          return (
            <Tweet
              key={tweet.id}
              id={tweet.id}
              name={tweet.name}
              content={tweet.content}
              like={tweet.like}
              onDelete={(id) => {
                console.log("DELETE", id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
