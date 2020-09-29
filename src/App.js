import React from 'react';
// import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Header from './Components/Header/Header.js';
import Loader from './Components/Loader/Loader.js';
import ErrorMessage from './Components/ErrorMessage/ErrorMessage';
import Searchbar from './Components/Searchbar/Searchbar';
import Button from './Components/Button/Button';
import Footer from './Components/Footer/Footer';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Modal from './Components/Modal/Modal';

const App = () => {
  const loader = useSelector(state => state.loader);
  const error = useSelector(state => state.error);
  const photos = useSelector(state => state.photos);
  const message = useSelector(state => state.message);

  const classes = useStyles();
  return (
    <>
      <Header />
      <main>
        <Searchbar />
        <Container className={classes.cardGrid} maxWidth="md">
          {loader ? <Loader /> : <ImageGallery photos={photos} />}
          {error && <ErrorMessage />}
          {photos.length > 0 && !loader && <Button />}
        </Container>
        {message !== '' && photos.length === 0 && (
          <Typography variant="h4" align="center" className={classes.message}>
            {message}
          </Typography>
        )}
      </main>
      <Footer />
      <Modal />
      <CssBaseline />
    </>
  );
};

export default App;

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  message: {
    marginBottom: theme.spacing(18),
    color: '#3f50b4b3',
  },
}));
