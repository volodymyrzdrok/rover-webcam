import React from 'react';
import Loader from 'react-loader-spinner';
import s from './ErrorMessage.module.css';

const ErrorMessage = ({ text }) => {
  return (
    <div className={s.loaderSpinner}>
      <Loader type="TailSpin" color="#ca1e1e" height={100} width={100} />
      <h2 className={s.text}>sorry,but:{text}</h2>
    </div>
  );
};

export default ErrorMessage;
