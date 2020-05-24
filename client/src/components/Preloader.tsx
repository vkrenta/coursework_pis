import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  loader: {
    top: -50,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    position: 'absolute',
  },
});

export default function Preloader() {
  const classes = useStyles();
  return <CircularProgress size={200} className={classes.loader} />;
}
