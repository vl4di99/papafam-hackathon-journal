import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import SentimentalScoreElement from "./SentimentalScoreElement";

function SentimentalScore() {
  const { user } = useContext(UserContext);

  const [journalRecords, setJournalRecords] = useState([]);
  console.log(user);

  useEffect(() => {
    const loadJournal = async () => {
      let userid = user?.email;
      axios
        .post(
          "https://papafam-hackaton-journal.herokuapp.com/journal/byUserId",
          { userid: userid }
        )
        .then((res) => {
          setJournalRecords(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadJournal();
  }, []);

  return (
    <div>
      {journalRecords.map((element, index) => {
        <SentimentalScoreElement property={element} key={index} />;
      })}
    </div>
  );
}

export default SentimentalScore;
