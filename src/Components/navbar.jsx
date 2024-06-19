import React from "react";

export function Navbar() {
  return (
    <>
      <div className="navbarContainer w-full bg-[#1d0e2f] h-[50px] flex justify-between px-14 fixed z-10">
        <div className=" text-white flex gap-2 h-full items-center">
          <i class="lni lni-magento"></i>
          <p className="font-semibold">mhdsahlct@gmail.com</p>
        </div>
        <div className="text-blue-100 flex gap-10 font-light text-xl">
          <button>Services</button>
          <button>Works</button>
          <button>Resume</button>
          <button>Skills</button>
          <button>Contact</button>
          <button className="ms-10 px-4 bg-gradient-to-r from-[#7d4aea] to-[#3a1c71] rounded-xl font-bold text-lg m-1">Hire Me!</button>
        </div>
      </div>
    </>
  );
}
