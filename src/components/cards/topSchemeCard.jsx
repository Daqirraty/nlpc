import React from "react";

const TopSchemeCards = ({title,amount, InterestRate, startDate, maturityDate, bgColor}) => {
  return (
    <div className="">
      <div className={`w-[13rem] h-[11rem] rounded-lg p-2 bg-green-500  text-white text-sm shadow-2xl space-y-3`}>
        <p className="">{title}</p>
        <p className="text-2xl font-bold">{amount}</p>
        <div className="space-y-3 text-slate-500 text-xs py-2">
          <p className="">interest rate at: {InterestRate}%</p>
          <p className="">start date: {startDate}</p>
          <p className="">maturity date: {maturityDate}</p>
        </div>
      </div>
    </div>
  );
};

export default TopSchemeCards;
