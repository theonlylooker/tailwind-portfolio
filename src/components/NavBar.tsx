import React from "react";
import useModal from "../hooks/useModal";
import DropDown from "./DropDown";
import Modal from "./Modal";
import { FaTimes, FaBars } from "react-icons/fa";
const NavBar = () => {
  const [modal, Amodal, CModal] = useModal();
  return (
    <div className="flex justify-between items-center w-full h20 bg-black text-white fixed px-4">
      <h1 className="text-5xl font-signature ml-2">Onlylooker</h1>
      <div className="hidden md:block">
        <DropDown />
      </div>
      <div
        className="md:hidden mr-4 text-gray-500 cursor-pointer z-10"
        onClick={Amodal}
      >
        {modal ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <Modal modal={modal} CModal={CModal} />
    </div>
  );
};

export default NavBar;
