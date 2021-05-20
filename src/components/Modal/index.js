import React from "react";
import { CSSTransition } from "react-transition-group";

import { ModalContainer } from "./styled";

const Modal = ({ show, closeHandler, children }) => {
  const isClosabled = (e) => {
    if (!!e.target.dataset.closable) closeHandler();
  };

  console.log(show);
  return (
    <CSSTransition in={show} timeout={300} unmountOnExit classNames="modal">
      <ModalContainer data-closable onClick={isClosabled}>
        {children}
      </ModalContainer>
    </CSSTransition>
  );
};

export default Modal;
