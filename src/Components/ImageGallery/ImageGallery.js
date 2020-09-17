import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { CSSTransition } from 'react-transition-group';
import './ImageGallery.css';

const ImageGallery = ({ toggleModal, photos, parseLargeImage }) => {
  const classes = useStyles();
  return (
    <CSSTransition
      timeout={500}
      in={photos.length > 0}
      unmountOnExit
      classNames="item"
    >
      <Grid container spacing={4}>
        {photos.map(el => (
          <Grid
            key={el.id}
            item
            xs={12}
            sm={6}
            md={4}
            className="cardContainer"
          >
            <Card
              className={classes.card}
              onClick={() => parseLargeImage(el.img_src)}
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
    </CSSTransition>
  );
};

export default ImageGallery;

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
}));
