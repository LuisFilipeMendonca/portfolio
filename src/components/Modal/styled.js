import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(31, 31, 31, 0.9);
  z-index: 100;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;

  & div {
    position: relative;
  }

  & div button {
    position: absolute;
    font-size: 4rem;
    color: #fd8b68;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  & div:hover button {
    opacity: 1;
  }

  & video {
    width: 100%;
    max-width: 50rem;
    border: 2px solid #fd8b68;
  }

  &.modal-enter {
    transform: scale(0);
    opacity: 0;
  }

  &.modal-enter-active {
    transform: scale(1);
    opacity: 1;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }

  &.modal-exit {
    transform: scale(1);
    opacity: 1;
  }

  &.modal-exit-active {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
`;
