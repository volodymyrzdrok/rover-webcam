import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';
import { useSelector, useDispatch } from 'react-redux';
import { modalStatus } from '../../redux/slice';

const Modal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const henleKeyDown = e => {
      e.code === 'Escape' && dispatch(modalStatus());
    };

    window.addEventListener('keydown', henleKeyDown);
    return () => {
      window.removeEventListener('keydown', henleKeyDown);
    };
  }, [dispatch]);

  const showModal = useSelector(state => state.showModal);
  const largeImage = useSelector(state => state.largeImage);

  return (
    <CSSTransition
      in={showModal}
      timeout={300}
      classNames="alert"
      unmountOnExit
    >
      <div
        className="Overlay"
        onClick={() => dispatch(modalStatus(!showModal))}
      >
        <div className="Modal">
          <img src={largeImage} alt="modalImage" className="modalImage" />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
