import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const ButtonLM = ({ loadMore }) => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.btnLoadMore}
      container
      spacing={1}
      justify="center"
    >
      <Button variant="contained" color="primary" onClick={loadMore}>
        more images
      </Button>
    </Grid>
  );
};

export default ButtonLM;

const useStyles = makeStyles(theme => ({
  btnLoadMore: {
    paddingTop: theme.spacing(4),
  },
}));
