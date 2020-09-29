import React, { useState } from 'react';
// import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import { fetchImagesWithMars } from './services/nasaApi';
import {
  loaderStatus,
  modalStatus,
  addTextStatus,
  addModalImg,
  errorStatus,
  addMessageStatus,
  addPhotos,
  addPhotosPlus,
  addPage,
  addPrevForm,
} from './redux/action';

const App = () => {
  const loader = useSelector(state => state.loader);
  const showModal = useSelector(state => state.showModal);
  const error = useSelector(state => state.error);
  const largeImage = useSelector(state => state.largeImage);
  const text = useSelector(state => state.text);
  const photos = useSelector(state => state.photos);
  const message = useSelector(state => state.message);
  const page = useSelector(state => state.page);
  const prevForm = useSelector(state => state.prevForm);
  const form = useSelector(state => state.form);

  const dispatch = useDispatch();

  const searchPhotos = async (propSol, propRover, propCamera) => {
    try {
      dispatch(errorStatus(false));
      dispatch(loaderStatus(true));
      dispatch(addPrevForm(form));
      const result = await fetchImagesWithMars(
        propSol,
        propRover,
        1,
        propCamera,
      );
      dispatch(addPhotos([...result]));
      dispatch(addMessageStatus(photos.length === 0 ? 'No Images Found' : ''));
    } catch (error) {
      dispatch(errorStatus(true));
      dispatch(addTextStatus(error.message));
    } finally {
      dispatch(loaderStatus(false));
    }
  };

  const loadMore = async () => {
    try {
      dispatch(errorStatus(false));
      dispatch(loaderStatus(true));
      const result = await fetchImagesWithMars(
        prevForm.sol,
        prevForm.rover,
        page + 1,
        prevForm.camera,
      );
      dispatch(addPage());
      await dispatch(addPhotosPlus(result));
    } catch (error) {
      dispatch(errorStatus(true));
      dispatch(addTextStatus(error.message));
    } finally {
      dispatch(loaderStatus(false));
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const parseLargeImage = url => {
    dispatch(addModalImg(url));
  };

  const toggleModal = e => {
    dispatch(modalStatus(!showModal));
  };

  const classes = useStyles();
  return (
    <>
      <Header />
      <main>
        <Searchbar searchPhotos={searchPhotos} />
        <Container className={classes.cardGrid} maxWidth="md">
          {loader ? (
            <Loader />
          ) : (
            <ImageGallery
              photos={photos}
              toggleModal={toggleModal}
              parseLargeImage={parseLargeImage}
            />
          )}
          {error && <ErrorMessage text={text} />}
          {photos.length > 0 && !loader && <Button loadMore={loadMore} />}
        </Container>
        {message !== '' && (
          <Typography variant="h4" align="center" className={classes.message}>
            {message}
          </Typography>
        )}
      </main>
      <Footer />

      <Modal
        largeImage={largeImage}
        toggleModal={toggleModal}
        showModal={showModal}
      />

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
