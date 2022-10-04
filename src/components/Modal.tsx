import React from "react";
import DropDown from "./DropDown";

interface ModalProps {
  modal: boolean;
}

const Modal = ({ modal }: ModalProps) => {
  return (
    <>
      {modal && (
        <div className={`modal`}>
          <DropDown modal={modal} />
        </div>
      )}
    </>
  );
};

export default Modal;
