import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Alerting from '../Alert/Alert';
import { alertToggle } from '../../redux/action';
import { useSelector, useDispatch } from 'react-redux';
import { changeSol, changeCamera, changeRover } from '../../redux/slice';
import { searchPhotosOperation } from '../../redux/operations';

const Searchbar = () => {
  const dispatch = useDispatch();
  const alert = useSelector(state => state.alert);
  const form = useSelector(state => state.form);

  const hendleSubmit = e => {
    e.preventDefault();
    if (form.sol.replace(/\s/g, '') === '') {
      dispatch(alertToggle());
      setTimeout(() => {
        dispatch(alertToggle());
      }, 2800);
    } else {
      dispatch(searchPhotosOperation(form.sol, form.rover, form.camera));
    }
  };

  const classes = useStyles();
  return (
    <Container className={classes.heroContent} maxWidth="md">
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        Mars Photo Gallery
      </Typography>

      <form onSubmit={hendleSubmit} noValidate>
        <Grid container spacing={1} justify="center">
          <FormControl className={classes.formControl}>
            <NativeSelect
              name="rover"
              onChange={e => dispatch(changeRover(e.target.value))}
            >
              <option value="curiosity">Curiosity</option>
              <option value="opportunity">Opportunity</option>
              <option value="spirit">Spirit</option>
            </NativeSelect>
            <FormHelperText>Rover </FormHelperText>
          </FormControl>

          <FormControl className={classes.formControl}>
            <NativeSelect
              name="camera"
              onChange={e => dispatch(changeCamera(e.target.value))}
            >
              <option value="navcam">navigation camera</option>
              <option value="fhaz">Front camera</option>
              <option value="rhaz">Rear camera</option>
            </NativeSelect>
            <FormHelperText>Camera Type</FormHelperText>
          </FormControl>

          <FormControl className={classes.formControl}>
            <TextField
              label=""
              required
              type="number"
              name="sol"
              value={form.sol}
              onChange={e => dispatch(changeSol(e.target.value))}
              style={{ maxWidth: 154 }}
            />
            <FormHelperText>
              Martian Sol (day on Mars):
              <br /> 1000-2880
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid
          className={classes.btnSubmit}
          container
          spacing={1}
          justify="center"
        >
          <Button type="submit" variant="outlined" color="primary">
            <b>Search photo</b>
          </Button>
        </Grid>
      </form>
      <Alerting alert={alert} />
    </Container>
  );
};

export default Searchbar;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  heroContent: {
    padding: theme.spacing(1, 1, 1, 1),
  },

  btnSubmit: { padding: theme.spacing(2, 2) },
}));

// const handleChange = e => {
//   const { name, value } = e.target;
// setForm(state => ({
//   ...state,
//   [name]: value,
// }));
// };
