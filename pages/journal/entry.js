import React from "react";
import { useContext } from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Question from "../../components/Journal/Question";
import styles from "../../styles/JournalEntry.module.css";

const useStyles = makeStyles({
  typo: {
    flexGrow: 1,
    textAlign: "center",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    scrollPadding: "20px",
    spacing: "20px",
    padding: "20px",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    scrollPadding: "20px",
    spacing: "20px",
    padding: "20px",
  },
});

//create a function to create the card
function Entry() {
  const classes = useStyles();
  return (
    <div className={styles.wrapper}>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography className={classes.typo} variant="h5" component="h2">
                Journal Entry
              </Typography>
              <Question />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Entry;
