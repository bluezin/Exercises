/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { CgCloseR } from 'react-icons/cg';
import '../styles/components/Modal.css';

const Modal = ({ setBooleano }) => {
  return (
    <div className="Modal">
      <div className="div-Modal">
        <CgCloseR onClick={() => setBooleano(false)} className="close" />
        <p>The form is empty :(</p>
        <p>there must be more than 2 full lockers</p>
      </div>
    </div>
  );
};

export default Modal;
