import React from "react";
import Logo from "../assets/logo.jpeg";
import { LiaHomeSolid } from "react-icons/lia";
import { ImStatsBars } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import { BsArrowLeftRight } from "react-icons/bs";
import { LiaCreditCardSolid } from "react-icons/lia";
import { BsGear } from "react-icons/bs";
import { RxExit } from "react-icons/rx";

const SideNav = () => {
  return (
    <div className="fixed w-[20%] bg-white text-[#306233] shadow-2xl">
      <div className="flex flex-col  ">
        <div className="p-[1rem] bg-slate-500]">
        <img src={Logo} alt="" className="w-[5rem] md:p-3 " />
        </div>

        <div className="flex flex-col gap-y-[2rem] p-1 py-[2rem]  min-h-screen sm:p-4 ">
          <div className="flex p-3 items-center gap-3  hover:bg-[#306233] hover:text-white hover:rounded-md md:px-3">
            <span>
              <LiaHomeSolid className="me"/>
            </span>
            <p className="sm:hidden ">Home</p>
          </div>
          <div className="flex items-center p-3 gap-3  hover:bg-[#306233] hover:text-white hover:rounded-md md:px-3">
            <span>
              <ImStatsBars />
            </span>
            <p className="sm:hidden">Investment</p>
          </div>
          <div className="flex items-center p-3 gap-3  hover:bg-[#306233] hover:text-white hover:rounded-md md:px-3">
            <span>
              <LiaCreditCardSolid />
            </span>
            <p className="sm:hidden">Savings</p>
          </div>
          <div className="flex items-center p-3 gap-3  hover:bg-[#306233] hover:text-white hover:rounded-md md:px-3">
            <span>
              <BsArrowLeftRight />
            </span>
            <p className="sm:hidden">Transactions</p>
          </div>
          <div className="flex items-center p-3 gap-3  hover:bg-[#306233] hover:text-white hover:rounded-md md:px-3">
            <span>
              <RxExit />
            </span>
            <p className="sm:hidden">Log-out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
