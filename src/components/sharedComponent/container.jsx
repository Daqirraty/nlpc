import React from 'react'
import SideNav from "../../components/sideNav";
import Header from '../header';

const Container = ({children}) => {
  return (
    <div className="flex font-Poppins">
      <div className="w-[20%] sm:w-full">
        <SideNav />
      </div>

      <div className=" w-[80%] sm:w-full">
        <Header/>
        {children}
      </div>
    </div>
  )
}

export default Container