import React from 'react';
import Loader from 'react-loader-spinner';
import s from './ErrorMessage.module.css';
import { useSelector } from 'react-redux';

const ErrorMessage = () => {
  const text = useSelector(state => state.text);

  return (
    <div className="Overlay">
      <div className="Modal">
        <Loader type="TailSpin" color="#ca1e1e" height={100} width={100} />
        <h2 className={s.text}>sorry,but:{text}</h2>
      </div>
    </div>
  );
};

export default ErrorMessage;
