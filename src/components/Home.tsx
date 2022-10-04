import React from "react";
import { Element } from "react-scroll";
import heroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <Element name="home" className="section from-black to-gray-800 ">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold ">
            I'm a Front End Developer
          </h2>
          <p className="py-4 max-w-md text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            dolore aperiam temporibus saepe illum delectus? Minus delectus
            minima, aperiam doloremque, hic vel placeat commodi cupiditate omnis
            modi voluptates ipsa eaque?
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            src={heroImage}
            alt="my profile"
          />
        </div>
      </div>
    </Element>
  );
};

export default Home;