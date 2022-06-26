import React from "react";

function SentimentalScoreElement(props) {
  const data = props.property;
  return <div>{data.userid}</div>;
}

export default SentimentalScoreElement;
