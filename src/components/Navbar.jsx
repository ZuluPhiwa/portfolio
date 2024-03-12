import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div className=" w-96 justify-center mx-auto top-[80%] left-[5%] md:left-1/3   text-black z-50 fixed ">
      <div className=" rounded-full shadow-lg py-4 justify-center bg-[#fbf0d9] ">
        <ul className=" justify-center space-x-4 flex">
          <li className="cursor-pointer  group font-bold">
            <Link to="/" offset={0} smooth={true} duration={500}>
              Home
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
          </li>
          <li className="cursor-pointer group  font-bold">
            <Link to="about" offset={50} smooth={true} duration={500}>
              About
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
          </li>
          <li className="cursor-pointer  group font-bold">
            <Link to="work" offset={50} smooth={true} duration={500}>
              Work
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
          </li>
          <li className="cursor-pointer group font-bold">
            <Link to="contact" offset={50} smooth={true} duration={500}>
              Contact
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
