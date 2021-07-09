import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  custom: {
    width: 300,
    textAlign: "left",
    "&.MuiSelect-select:focus": {
      backgroundColor: "#fff !important",
    },
  },
  loading: {
    width: 300,
    margin: "0 auto",
  },
  menuItem: {
    "&.Mui-selected": {
      backgroundColor: "#357cff",
      color: "white",
      fontWeight: 600,
    },
    "&.Mui-focused": {
      backgroundColor: "#357cff",
      color: "white",
      fontWeight: 600,
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
  button: {
    width: 300,
    color: "#fff",
    backgroundColor: "#ff6c6c",
    textTransform: "capitalize",
    "&.MuiButton-contained:hover": {
      backgroundColor: "#ff6c6c !important",
    },
  },
  error: {
    margin: 10,
    color: "#ff6c6c",
    fontWeight: "bold",
  },
});
