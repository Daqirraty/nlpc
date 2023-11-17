import React from "react";
import { BsPlusSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const SchemeCards = ({
  title,
  AdminFee,
  MaintenanceFee,
  InterestRate,
  address
}) => {
  return (
    <div className="space-y-5">
      <Link to={address}>
        <div
          className="w-[11rem] h-[11rem] p-2 bg-white shadow-2xl border-4 rounded-md text-sm cursor-pointer"
        >
          <p className="text-center font-bold py-2">{title}</p>
          <p className="">Admin Fee: &#8358;{AdminFee}</p>
          <p className="">Interest Rate: {InterestRate}%</p>
          <p className="">Maintenance Fee: &#8358;{MaintenanceFee}</p>
          <div className="flex justify-center  py-3">
            <BsPlusSquare size={25} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SchemeCards;
