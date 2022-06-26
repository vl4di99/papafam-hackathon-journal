import React from "react";
import AuthGuard from "../components/AuthGuard";
import SentimentalScore from "../components/SentimentalScore";

function score() {
  return (
    <AuthGuard>
      <SentimentalScore />
    </AuthGuard>
  );
}

export default score;
