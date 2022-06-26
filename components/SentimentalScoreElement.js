import React, { useState, useEffect } from "react";
import styles from "../styles/components/SentimentalScoreElement.module.css";
import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { ExpandMoreRounded } from "@material-ui/icons";
import axios from "axios";
import moment from "moment";

function SentimentalScoreElement(props) {
  const [sentimentScore, setSentimentScore] = useState("");
  const [dateRetrieved, setDateRetrieved] = useState(props?.date);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getScore() {
      await axios
        .post(process.env.NEXT_PUBLIC_SENTIMENTAL_API, { text: props.thought })
        .then((res) => {
          setSentimentScore(res.data.result);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getScore();
  }, []);

  return (
    !loading && (
      <div className={styles.mainDiv}>
        <Accordion className={styles.accordion}>
          <AccordionSummary expandIcon={<ExpandMoreRounded />}>
            <Typography
              style={{
                width: "fit-content",
                flexShrink: 0,
                marginRight: "10vw",
              }}
            >
              {props.thought}
            </Typography>
            <Typography>{props.cognitive_error}</Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Typography>{props.rational_alternative}</Typography>
            <Typography>
              Score: {sentimentScore.polarity},{sentimentScore.type}
            </Typography>
            <Typography>
              {moment(dateRetrieved).format("MMMM Do YYYY, hh:mm:ss")}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    )
  );
}

export default SentimentalScoreElement;
