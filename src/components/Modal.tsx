import React from "react";
import DropDown from "./DropDown";

interface ModalProps {
  modal: boolean;
  CModal: () => void;
}

const Modal = ({ modal, CModal }: ModalProps) => {
  return (
    <>
      {modal && (
        <div className={`modal`}>
          <DropDown modal={modal} CModal={CModal} />
        </div>
      )}
    </>
  );
};

export default Modal;
