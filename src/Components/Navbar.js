"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import mainLogo from "../../public/Assets/Logos/Additional Logos/SVG/05copyinverted.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(isScrolled);
  return (
    <React.Fragment>
      <div className=" bg-black fixed w-full flex justify-center  items-center">
        <div
          className={`flex bg-black translate-y-2 p-2 z-100 w-[95%] justify-between ${
            isScrolled
              ? "border-2 border-white rounded-full"
              : "border-2 border-black"
          } text-white p-[0.5rem] items-center`}
        >
          <div className="flex items-center ">
            <Image className="" src={mainLogo} height={60}></Image>
            <p>STUDIO</p>
          </div>
          <div>
            <ul className="flex px-[0.5rem] items-center">
              <li className="px-[0.5rem] cursor-pointer">Work</li>
              <li className="px-[0.5rem] cursor-pointer">About</li>
              <li className="px-[0.5rem] cursor-pointer">Contact</li>

              <li className="px-[0.5rem]">
                <button className="broder-white bg-rose-400  rounded-full w-[8rem] p-[0.5rem] text-white ">
                  Book Call
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
