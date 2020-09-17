import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Modal.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.henleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.henleKeyDown);
  }
  henleKeyDown = e => {
    e.code === 'Escape' && this.props.toggleModal();
  };
  render() {
    return (
      <CSSTransition
        in={this.props.showModal}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <div className="Overlay" onClick={this.props.toggleModal}>
          <div className="Modal">
            <img
              src={this.props.largeImage}
              alt="modalImage"
              className="modalImage"
            />
          </div>
        </div>
      </CSSTransition>
    );
  }
}
