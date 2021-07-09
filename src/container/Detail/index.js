import { useSelector } from "react-redux";
import { Grid, TextField } from "@material-ui/core";
import { useStyles } from "./style";

function Detail() {
  const classes = useStyles();
  const details = useSelector((state) => state.home.details);

  console.log(details);
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
          label="Celcius"
          type="text"
          value={details && details.current.temp_c}></TextField>
      </Grid>
      <Grid item>
        <TextField
          className={classes.custom}
          InputLabelProps={{
            className: classes.label,
          }}
          label="Your API Key"
          type="text"
          value={details && details.current.temp_f}></TextField>
      </Grid>
    </Grid>
  );
}

export default Detail;
