import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

const Modal = ({ toggleModal, largeImage, showModal }) => {
  useEffect(() => {
    const henleKeyDown = e => {
      e.code === 'Escape' && toggleModal();
    };

    window.addEventListener('keydown', henleKeyDown);
    return () => {
      window.removeEventListener('keydown', henleKeyDown);
    };
  }, [toggleModal]);

  return (
    <CSSTransition
      in={showModal}
      timeout={300}
      classNames="alert"
      unmountOnExit
    >
      <div className="Overlay" onClick={toggleModal}>
        <div className="Modal">
          <img src={largeImage} alt="modalImage" className="modalImage" />
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
