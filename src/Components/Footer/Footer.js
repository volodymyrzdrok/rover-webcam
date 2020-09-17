import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Copyright />
    </footer>
  );
};

export default Footer;
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'NASA`s expeditions to Mars © '}
      <Link
        color="inherit"
        href="https://github.com/volodymyrzdrok/rover-webcam"
      >
        Website on <b>Github </b>
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(8),
    paddingBottom: '10px',
  },
}));
