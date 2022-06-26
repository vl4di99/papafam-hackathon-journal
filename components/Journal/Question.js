import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Button,
  MenuItem,
  Grid,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { UserContext } from "../../context/UserContext";

export default function Question() {
  const { user } = useContext(UserContext);
  const userid = user?.email;

  const [thought, setThought] = useState("");
  const [cognitive_error, setCognitive_Error] = useState("");
  const [rational_alternative, setRational_Alternative] = useState("");

  const saveJournalRecord = async (e) => {
    e.preventDefault();
    let date = new Date();
    await axios
      .post("https://papafam-hackaton-journal.herokuapp.com/journal", {
        thought: thought,
        cognitive_error: cognitive_error,
        rational_alternative: rational_alternative,
        userid: userid,
        date: date,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Saved successfully");
          setThought("");
          setCognitive_Error("");
          setRational_Alternative("");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("The record hasn't got saved!");
      });
  };

  return (
    //create a material ui form that will be used to create a new journal entry about their day and add spacing between the text fields to make it look more organized.
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Paper>
              <TextField
                id="outlined-basic"
                label="What negative thoughts did you have today?"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                maxRows={10}
                value={thought}
                onChange={(e) => {
                  setThought(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="What type of cogntive error is these beliefs"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                maxRows={10}
                value={cognitive_error}
                onChange={(e) => {
                  setCognitive_Error(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="What is a more rational alternative to these thoughts?"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                maxRows={10}
                value={rational_alternative}
                onChange={(e) => {
                  setRational_Alternative(e.target.value);
                }}
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={saveJournalRecord}
              >
                Save
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
