import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchDataSuccessAction, fetchDataFailedAction } from "./action";
import { Grid, LinearProgress, TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { useStyles } from "./style";

function Home() {
  const classes = useStyles();
  let history = useHistory();
  const error = useSelector((state) => state.home.error);
  const dispatch = useDispatch();

  const [apiKey, setApiKey] = useState("ff9f895b2e884d6680530135202710");
  const [city, setCity] = useState("Kuala%20Lumpur");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await fetchData("http://api.weatherapi.com/v1/current.json?key=" + apiKey + "&q=" + city);
  };

  const fetchData = async (url) => {
    return fetch(url, { method: "GET" })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => {
        dispatch(fetchDataSuccessAction(data));
        history.push("/detail");
      })
      .catch((err) => {
        dispatch(fetchDataFailedAction(err));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      style={{ height: "97vh" }}>
      <Grid item>
        <TextField
          className={classes.custom}
          InputLabelProps={{
            className: classes.label,
          }}
          label="Your API Key"
          type="text"
          name="apiKey"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}></TextField>
      </Grid>
      <Grid item>
        <FormControl className={classes.custom}>
          <InputLabel className={classes.label} id="demo-simple-select-label">
            City Name
          </InputLabel>
          <Select
            className={classes.custom}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={city}
            onChange={(e) => setCity(e.target.value)}>
            <MenuItem className={classes.menuItem} key={1} value={"Kuala%20Lumpur"}>
              Kuala Lumpur
            </MenuItem>
            <MenuItem className={classes.menuItem} key={2} value={"Singapore"}>
              Singapore
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        {loading && <LinearProgress className={classes.loading} />}
        <Button className={classes.button} variant="contained" disabled={loading} onClick={() => handleSubmit()}>
          Submit
        </Button>
        {error && <div className={classes.error}>{error}</div>}
      </Grid>
    </Grid>
  );
}

export default Home;
