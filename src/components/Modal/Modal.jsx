import styledComponents from 'styled-components';
import React, { useEffect } from 'react';
import Portal from './Portal';

const Overlay = styledComponents.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

const Dialog = styledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px);
  width: 400px;
  padding: 24px;
  background-color: #FFF;
  box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
  border-radius: 8px;
`;

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    function onEsc(e) {
      if (e.keyCode === 27) onClose();
    }
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [onClose]);

  if (!open) return null;

  function onOverlayClick() {
    onClose();
  }

  function onDialogClick(e) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <Overlay onClick={onOverlayClick}>
        <Dialog onClick={onDialogClick}>{children}</Dialog>
      </Overlay>
    </Portal>
  );
};

export default Modal;
