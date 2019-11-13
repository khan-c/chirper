import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTweets } from "../../actions/tweet_actions";
import TweetBox from "./tweet_box";

const Tweets = () => {
  const tweets = useSelector(state => Object.values(state.tweets.all));

  const useFetching = fetchAction => {
    useEffect(() => {
      fetchAction();
    }, [fetchAction]);
  };

  useFetching(fetchTweets, useDispatch());

  if (tweets.length === 0) return <div>There are no Tweets</div>;
  return (
    <div>
      <h2>All Tweets</h2>
      {tweets.map(tweet => (
        <TweetBox key={tweet.id} text={tweet.text} />
      ))}
    </div>
  );
};

export default Tweets;
