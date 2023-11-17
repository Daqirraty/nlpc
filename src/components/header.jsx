import React from "react";
import profileIcon from "../assets/profile-icon.jpeg";
import {useDataContext} from "../components/context"

const Header = () => {

  const {lastName, otherNames, email} =  useDataContext()

  return(
    <div className="font-Poppins fixed top-0 bg-white w-[80%]">
      <div className="flex items-center gap-5 justify-end h-[5rem] p-3 sm:flex shadow-2xl ">
        <div className="text-xs">

          <p className="">{`${lastName || email.replace(/@.*/, "")} ${otherNames}`} </p>
          <p className="">{`${email}`}</p>
        </div>
        <div className="">
          <img
            src={profileIcon}
            alt=""
            className="rounded-[50%] w-[4rem] h-[4rem] sm:w-[5rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
