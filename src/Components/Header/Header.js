import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          webCamMars
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));
