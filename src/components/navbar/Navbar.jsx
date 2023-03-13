import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/portfoliologo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <div className="navbar shadow-lg shadow-[#0b1f17] flex justify-between pl-6 pr-8 items-center py-2 bg-black lg:pl-20 lg:pr-24">
        <div className="logo w-[50px]">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="davidSmith text-2xl text-[#d9f7ed] font-extrabold lg:hidden ">
          <h1>DAVIDSMITH</h1>
        </div>
        <div className="nav hidden lg:flex">
          <ul className="flex gap-20 text-[#9ee0db]">
            <li>
              <Link to="">Home</Link>
            </li>

            <li>
              <Link to="">About</Link>
            </li>

            <li>
              <Link to="">Projects</Link>
            </li>

            <li>
              <Link to="">Skills</Link>
            </li>                

            <li>
              <Link to="">Resume</Link>
            </li>

            <li>
              <Link to="">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="hambuger text-[#5ed1af] lg:hidden">
          <GiHamburgerMenu size={"40px"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
