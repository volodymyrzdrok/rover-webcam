import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import './ImageGallery.css';
import { modalStatus, addModalImg } from '../../redux/slice';

const ImageGallery = ({ photos }) => {
  const showModal = useSelector(state => state.showModal);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(modalStatus(!showModal));
  };

  return (
    <Grid container spacing={4}>
      {photos.map(el => (
        <Grid key={el.id} item xs={12} sm={6} md={4} className="cardContainer">
          <Card
            className="card"
            onClick={() => dispatch(addModalImg(el.img_src))}
          >
            <CardMedia
              onClick={toggleModal}
              className="cardMedia"
              image={el.img_src}
              title={el.name}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGallery;
