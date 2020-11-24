import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function Yearpicker(props) {
  const classes = useStyles();
  var allYears = [];
  const year = new Date().getFullYear() + 1;
  for (let i = 60; i > 0; i--) {
    allYears.push(year - i);
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          {props.tag} Date
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id={props.tag}
          open={props.open}
          onClose={(el) => props.handleClose(props.id)}
          onOpen={(el) => props.handleOpen(props.id)}
          value={props.year}
          onChange={(el) => props.handleChange(props.id, el.target.value)}
        >
          {allYears.map((el) => (
            <MenuItem key={el} value={el}>
              {el}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
