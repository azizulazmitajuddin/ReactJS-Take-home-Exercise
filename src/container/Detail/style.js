import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  custom: {
    width: 300,
    textAlign: "left",
    "&.MuiSelect-select:focus": {
      backgroundColor: "#fff !important",
    },
  },
  label: {
    fontWeight: "bold",
    color: "red",
    "&.Mui-focused": {
      fontWeight: "bold",
      color: "red",
    },
  },
});
