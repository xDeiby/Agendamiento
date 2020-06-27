import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="filled-full-width"
          label={props.placeholder}
          style={{ margin: 8 }}
          placeholder={props.placeholder}
        //   helperText="Full width!"
          defaultValue={props.defaultValue}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        </div>
    </div>
  );
}
