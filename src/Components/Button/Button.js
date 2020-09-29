import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { loadMoreOperation } from '../../redux/operations';

const ButtonLM = () => {
  const page = useSelector(state => state.page);
  const prevForm = useSelector(state => state.prevForm);
  const dispatch = useDispatch();
  const classes = useStyles();

  const addClickButton = () => {
    dispatch(
      loadMoreOperation(prevForm.sol, prevForm.rover, page, prevForm.camera),
    );
  };

  return (
    <Grid
      className={classes.btnLoadMore}
      container
      spacing={1}
      justify="center"
    >
      <Button variant="contained" color="primary" onClick={addClickButton}>
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
