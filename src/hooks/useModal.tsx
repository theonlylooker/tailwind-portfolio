import React, { useState } from "react";

const useModal = (): [boolean, () => void] => {
  const [modal, setModal] = useState(false);
  const activateModal = () => {
    setModal(!modal);
  };
  return [modal, activateModal];
};

export default useModal;
