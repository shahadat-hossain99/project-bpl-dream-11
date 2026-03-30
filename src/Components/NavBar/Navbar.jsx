import React from "react";
import DollerImg from "../../assets/dollar.png";
import LogoImg from "../../assets/logo.png";

const Navbar = ({ coin }) => {
  return (
    <div className="container mx-auto w-11/12 max-w-400 py-7">
      <div className="navbar bg-base-100 ">
        <div className="flex-1">
          <img src={LogoImg} alt="" />
        </div>
        <div className="flex-none">
          <button className="btn  flax justify-between items-center gap-2 font-bold">
            {coin} coins
            <img src={DollerImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
