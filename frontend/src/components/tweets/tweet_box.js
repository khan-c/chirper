import React, { Fragment } from "react";

const TweetBox = props => {
  return (
    <Fragment>
      <h3>{props.text}</h3>
    </Fragment>
  );
};

export default TweetBox;
