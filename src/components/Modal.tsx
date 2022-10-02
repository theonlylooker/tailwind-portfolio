import React from "react";
import DropDown from "./DropDown";

interface ModalProps {
  modal: boolean;
}

const Modal = ({ modal }: ModalProps) => {
  return (
    <div
      className={`md:hidden absolute grid place-items-center top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 ${
        modal ? "block" : "hidden"
      }`}
    >
      <DropDown modal={modal} />
    </div>
  );
};

export default Modal;
