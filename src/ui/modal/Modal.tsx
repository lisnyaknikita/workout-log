import React from 'react';

import classes from './Modal.module.scss';

type ModalProps = {
    children: React.ReactNode
};

const Modal = ({children}: ModalProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.modalBody}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
