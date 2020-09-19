import React, { useState } from 'react';
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

const App = () => {
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [largeImage, setLargeImage] = useState(null);
  const [text, setText] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [prevForm, setForm] = useState({
    sol: null,
    rover: null,
    camera: null,
  });
  const [message, setMessage] = useState(
    'To view images, make a selection and click "Search photo"',
  );

  const searchPhotos = async (propSol, propRover, propCamera) => {
    try {
      setError(false);
      setLoader(true);
      setForm({ sol: propSol, rover: propRover, camera: propCamera });
      const result = await fetchImagesWithMars(
        propSol,
        propRover,
        page,
        propCamera,
      );
      setPhotos(result);
      setMessage(result.length === 0 ? 'No Images Found' : '');
    } catch (error) {
      setError(true);
      setText(error.message);
    } finally {
      setLoader(false);
    }
  };

  const loadMore = async () => {
    try {
      setError(false);
      setLoader(true);
      const result = await fetchImagesWithMars(
        prevForm.sol,
        prevForm.rover,
        page + 1,
        prevForm.camera,
      );
      setPage(page + 1);
      await setPhotos([...photos, ...result]);
    } catch (error) {
      setError(true);
      setText(error.message);
    } finally {
      setLoader(false);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  const parseLargeImage = url => {
    setLargeImage(url);
  };

  const toggleModal = e => {
    setShowModal(!showModal);
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
