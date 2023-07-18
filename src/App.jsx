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

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const content = event.target.content.value;
    console.log(name);

    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name,
      content,
      like: 0,
    };

    addTweet(newTweet);
  };

  const addTweet = (tweet) => {
    setTweets([...tweets, tweet]);
  };

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const copyTweet = [...curr];

      const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
      likedTweet.like += 1;

      return copyTweet;
    });
  };

  const onDelete = (tweetId) => {
    setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId));
  };

  // const tweetsList = tweets.map((tweet) => {
  //   return (
  //     <Tweet
  //       key={tweet.id}
  //       name={tweet.name}
  //       content={tweet.content}
  //       like={tweet.like}
  //       onDelete={() => {}}
  //     />
  //   );
  // });
  // let [username, setUsername] = useState("Emilie");
  // const addLetter = () => {
  //   username += "y";
  // };
  return (
    <div>
      <form onSubmit={handleSubmit} className="tweet-form">
        <h4>New tweet</h4>
        <input placeholder="name" type="text" name="name" />
        <input placeholder="content" type="content" name="content" />
        <input type="submit" />
      </form>
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
                onDelete(id);
              }}
              onLike={(id) => {
                onLike(id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
