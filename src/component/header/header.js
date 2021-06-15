import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
     	flexGrow:1,
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <Typography variant="h5" color="primary">
            Team 9 - IBM Accelerate - Lab 01
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

