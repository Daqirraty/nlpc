import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BiWallet } from "react-icons/bi";
import { LuMailCheck } from "react-icons/lu";
import { MdAddCard } from "react-icons/md";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import SchemeCards from "./cards/schemeCards";
import {topSchemeDatas, tableData } from "./data";
import PaystackHookPay from "../services/paystackPayment/PaystackHookPay";
import { FiEye, FiEyeOff } from "react-icons/fi";
import TopSchemeCard from "../components/cards/topSchemeCard";
import { useCreateTopSchemeCardContext, useDataContext } from "./context";

ChartJS.register(ArcElement, Tooltip, Legend);

const Main = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isEnroll, setIsEnroll] = useState(false);

  const { amount } = useDataContext();
  const topCard = useCreateTopSchemeCardContext();

  function handleEnroll() {
    setIsEnroll(!isEnroll);
  }

  const dataChart1 = {
    labels: ["Flex", "Savings", "Loan", "Fix-lock", "Investment"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const columns = [
    {
      name: "Sn",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Type",
      selector: (row) => row.type,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
  ];
  const customStyles = {
    rows: {
      style: {
        minHeight: "55px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  return (
    <div className="bg-white min-h-screen p-2 my-[5rem] text-[#306233]">
      <div className="grid grid-cols-5 p-2  px-[2rem] sm:px-3">
        {topCard.length === 0 ? (
          <p>no scheme bought</p>
        ) : (
          topCard.map((topCardData, index) => {
            return <TopSchemeCard key={index} {...topCardData} />;
          })
        )}
      </div>

      <div className=" my-[2rem] py-[2rem] bg-white shadow-xl rounded-lg px-[1rem] sm:w-full md:w-full">
        <div className="flex flex-col items-center text- py-[3rem] rounded-lg my-[2rem] h-fit">
          <p className="text-2xl">Wallet Balance (NGN)</p>
          <span className="flex justify-center items-center gap-[3rem]">
            <p className="text-2xl font-bold leading-loose">
              {isEyeOpen ? `${amount}` || 0 : <p>********</p>}
            </p>

            <div className="">
              {isEyeOpen ? (
                <FiEye onClick={() => setIsEyeOpen(!isEyeOpen)} className="" />
              ) : (
                <FiEyeOff
                  onClick={() => setIsEyeOpen(!isEyeOpen)}
                  className=""
                />
              )}
            </div>
          </span>
        </div>
        <div className="flex justify-center items-center gap-[5rem] text-white">
          <div className="flex flex-col justify-center items-center sm:w-[5rem] cursor-pointer">
            <div
              onClick={() => setIsPopUp(!isPopUp)}
              className="flex justify-center items-center bg-[#306233] rounded-[50%] w-[3rem] h-[3rem]"
            >
              <MdAddCard />
            </div>
            <p className="text-[#306233] font-bold">
              <PaystackHookPay />
              Top up
            </p>
          </div>

          <div className="flex flex-col justify-center items-center sm:w-[5rem] cursor-pointer">
            <div
              onClick={() => {}}
              className="flex justify-center items-center bg-[#306233] rounded-[50%] w-[3rem] h-[3rem]"
            >
              <LuMailCheck />
            </div>
            <p className="text-[#306233] font-bold">Send</p>
          </div>
          <div className="flex flex-col justify-center items-center sm:w-[5rem] cursor-pointer">
            <div
              onClick={() => {}}
              className="flex justify-center items-center  bg-[#306233] rounded-[50%] w-[3rem] h-[3rem]"
            >
              <BiWallet />
            </div>
            <p className="text-[#306233] font-bold">Withdraw</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-5 sm:flex sm:flex-col md:flex md:flex-col">
        <div
          className="w-[50%] pb-[3rem] p-[1rem] my-[2rem] h-[25rem] rounded-lg
           bg-white shadow-xl md:w-full  sm:w-full sm:p-[.4rem] sm:pb-[3rem]  "
        >
          <p className="text-lg font-bold">Schemes chart</p>
          <Doughnut
            data={dataChart1}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>

        <div className="w-[50%] grid grid-cols-3 place-items-center p-3 gap-3">
          {topSchemeDatas.map((topSchemeDatas, index) => {
            return (
              <SchemeCards
                key={index}
                {...topSchemeDatas}
                isEnroll={isEnroll}
                handleEnroll={handleEnroll}
                address={`/enroll-modal/${index}`}
              />
            );
          })}
        </div>
      </div>
      <div className="sm:w-full">
        <p className="text-2xl py-[2rem]">Transaction History</p>
        <hr />
        <DataTable
          className="bg-red-700"
          columns={columns}
          data={tableData}
          customStyles={customStyles}
        />
      </div>

      <div>
        <PaystackHookPay setIsPopUp={setIsPopUp} isPopUp={isPopUp} />
      </div>
    </div>
  );
};

export default Main;
