import React from "react";
import logo from "../assets/pictures/Logo.svg";

function NavBar() {
  return (
    <nav className=" w-full flex pt-[14px] pb-[15px] bg-[--color-box] border-b">
      <div className="container">
        <div className="flex items-center justify-center gap-[8px]">
          <img src={logo} alt="logo" />
          <h2 className="font-bold text-(--color-text) text-[1.8rem]">
            Web<span className="text-(--color-main)">Education</span>
          </h2>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
