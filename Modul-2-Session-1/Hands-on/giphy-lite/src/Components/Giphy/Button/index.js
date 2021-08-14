import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Tombol = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary">
                Cari
            </Button>
        </div>
    )
}

export default Tombol