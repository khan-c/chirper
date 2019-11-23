import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserTweets } from "../../actions/tweet_actions";
import TweetBox from "../tweets/tweet_box";

const Profile = () => {
  const tweets = useSelector(state => Object.values(state.tweets.user));
  const currentUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserTweets(currentUser.id));
  }, [currentUser.id, dispatch]);

  if (tweets.length === 0) return <div>This user has no Tweets.</div>;
  return (
    <div>
      <h2>All of This User's Tweets</h2>
      {tweets.map(tweet => (
        <TweetBox key={tweet._id} text={tweet.text} />
      ))}
    </div>
  );
};

export default Profile;
