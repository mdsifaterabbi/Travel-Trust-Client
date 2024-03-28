import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Menu = () => {
  return (
    <>
      <div className="xl:w-[80vw] xl:mx-auto">
        <div className="navbar bg-base-100 pt-[10px] pb-[20px]">
          <div className="navbar-start hidden lg:flex">
            <Link to="/home" className="text-xl">
              <img
                src="./homePage/Logo_Travel_Trust.png"
                alt="Logo_Travel_Trust"
                className=""
              ></img>
            </Link>
          </div>

          <div className="lg:navbar-center xl:navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/service">Passport</Link>
              </li>
              <li>
                <Link to="/portfolio">Visa</Link>
              </li>
              <li>
                <Link to="/about">Legalization</Link>
              </li>
              <li>
                <Link to="/blog">Translations</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="bg-[#40b0fd] text-white hover:bg-[#40b0fd] hover:text-white rounded-none"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          {/* For extra small, small, medium devices */}
          <div className="lg:hidden w-[100vw] relative">
            <div className="block lg:hidden absolute left-0 w-[150px]">
              <a className="btn btn-ghost text-[14px]">
                <Link to="/home" className="text-[16px]">
                  <img
                    src="./homePage/Logo_Travel_Trust.png"
                    alt="Logo_Travel_Trust"
                    className=""
                  ></img>
                </Link>
              </a>
            </div>
            <div className="block lg:hidden absolute right-[10px]">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-[0px]"
                >
                  <li>
                    <Link to="/service">Passport sm</Link>
                  </li>
                  <li>
                    <Link to="/portfolio">Visa</Link>
                  </li>
                  <li>
                    <Link to="/about">Legalization</Link>
                  </li>
                  <li>
                    <Link to="/blog">Translations</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="bg-[#40b0fd] text-white hover:bg-[#40b0fd] hover:text-white rounded-none"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
