import React, { useState } from "react";

/* Eliminar closeModal y crear context  */

const useModal = (): [boolean, () => void, () => void] => {
  const [modal, setModal] = useState(false);
  const activateModal = () => {
    setModal(!modal);
  };
  const closeModal = () => {
    setModal(false);
  };
  return [modal, activateModal, closeModal];
};

export default useModal;
