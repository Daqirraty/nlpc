import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="">
          <h1 className="font-bold text-5xl text-center py-5">Welcome to NLPC PFA </h1>
        </div>
        <div className=" w-[50rem] p-3 py-[3rem] flex justify-between items-center bg-white shadow-2xl">
          <Link to="/auth/login">
            <button className=" mt-[3rem] text-lg p-3 text-center text-white font-semibold w-[20rem] bg-[#306233] rounded-lg  hover:bg-[#55865a] ">
              Login
            </button>
          </Link>

          <Link to="/auth/sign-up">
            <button className=" mt-[3rem] text-lg p-3 text-center text-white font-semibold w-[20rem] bg-[#306233] rounded-lg  hover:bg-[#55865a] ">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
