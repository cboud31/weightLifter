import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '75vw',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    margin: '0 auto',
    marginTop: '2rem',
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField id="outlined-basic" label="Search" variant="outlined" />
    </div>
  );
};

export default SearchBar;
