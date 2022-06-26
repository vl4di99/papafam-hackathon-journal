import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import SentimentalScoreElement from "./SentimentalScoreElement";
import styles from "../styles/components/SentimentalScore.module.css";

function SentimentalScore() {
  const { user } = useContext(UserContext);

  const [journalRecords, setJournalRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadJournal = async () => {
      let userid = user?.email;
      await axios
        .post(
          "https://papafam-hackaton-journal.herokuapp.com/journal/byUserId",
          { userid: userid }
        )
        .then((res) => {
          setJournalRecords(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    loadJournal();
  }, []);

  return (
    !loading && (
      <div className={styles.wrapper}>
        {journalRecords.map((element, index) => (
          <SentimentalScoreElement
            userid={element.userid}
            thought={element.thought}
            cognitive_error={element.cognitive_error}
            rational_alternative={element.rational_alternative}
            date={element.date}
            key={index}
          />
        ))}
      </div>
    )
  );
}

export default SentimentalScore;
