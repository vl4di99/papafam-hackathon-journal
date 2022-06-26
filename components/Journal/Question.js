import React from "react";
import { useContext } from "react";
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

export default function Question() {
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
              />
              <TextField
                id="outlined-basic"
                label="What type of cogntive error is these beliefs"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                maxRows={10}
              />
              <TextField
                id="outlined-basic"
                label="What is a more rational alternative to these thoughts?"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                maxRows={10}
              />

              <Button variant="contained" color="primary" fullWidth>
                Save
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
