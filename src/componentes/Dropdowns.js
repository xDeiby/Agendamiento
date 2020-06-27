/* eslint-disable no-use-before-define */
import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { LocalStorageObjects } from '../static_data/localstorage';

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function DropdownSelect(props) {
  const classes = useStyles();


const onChangeSelect = (e, value) => {
  props.setChange(value);
  value ? LocalStorageObjects.saveObject(props.value, value) : localStorage.removeItem(props.value);
}

  

  return (
    <Autocomplete
    //   id="country-select-demo"
      style={{ width: 300 }}
      options={props.data}
      classes={{
        option: classes.option,
      }}
      onChange={onChangeSelect}
      defaultValue={props.initValue}
      autoHighlight
      getOptionLabel={(option) => option[props.value]}
      renderOption={(option) => (
        <React.Fragment>
          {/* <span>{countryToFlag(option.code)}</span> */}
          {option[props.value]}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.tittle}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

