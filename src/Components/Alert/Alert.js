import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { CSSTransition } from 'react-transition-group';
import './Alert.css';

const Alerting = ({ alert }) => {
  return (
    <CSSTransition
      timeout={350}
      in={alert}
      appear={true}
      unmountOnExit
      classNames="alert"
    >
      <Alert variant="filled" severity="error" className="errorComp">
        Please,select Mars sol!
      </Alert>
    </CSSTransition>
  );
};

export default Alerting;
