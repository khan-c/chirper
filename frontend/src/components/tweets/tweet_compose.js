import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { composeTweet } from "../../actions/tweet_actions";
import TweetBox from "./tweet_box";

const TweetCompose = () => {
  const aNewTweet = useSelector(state => state.tweets.new);
  const [text, setText] = useState("");
  const [newTweet, setNewTweet] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (aNewTweet) {
      setNewTweet(aNewTweet.text);
    }
  }, [aNewTweet]);

  const handleSubmit = e => {
    e.preventDefault();
    let tweet = {
      text
    };

    dispatch(composeTweet(tweet));
  };

  const update = e => setText(e.currentTarget.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="textarea"
            value={text}
            onChange={update}
            placeholder="Write a tweet!"
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <br />
      <TweetBox text={newTweet} />
    </div>
  );
};

export default TweetCompose;
