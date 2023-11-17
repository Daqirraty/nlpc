import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ToastMe from "../../components/toast";
import { topSchemeDatas } from "../../components/data";
import {
  useCreateTopSchemeCardContext,
  useDataContext,
  useHandleChangeDatasContext,
  useSetCreateTopSchemeCardContext,
} from "../../components/context";

const EnrollModal = () => {
  const redirect = useNavigate();
  const { amount, startDate, maturityDate, inputAmount } = useDataContext();
  const change = useHandleChangeDatasContext()
  const displayCard = useCreateTopSchemeCardContext();
  const setDisplayCard = useSetCreateTopSchemeCardContext();
 

  const { id } = useParams();
  

  const start_Date = new Date(startDate);
  const maturity_Date = new Date(maturityDate);
  let Difference_In_Time = maturity_Date.getTime() - start_Date.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  let Interest = parseInt(
    inputAmount * topSchemeDatas[0].InterestRate * Difference_In_Days
  );
  let systemDeduction =
    topSchemeDatas[0].AdminFee + topSchemeDatas[0].MaintenanceFee;
  let totalInterest = parseInt(Interest - systemDeduction);


  function handleSubmit(e) {
    e.preventDefault();

    if (!inputAmount || !startDate || !maturityDate) {
      ToastMe("error", "All fields are required")
      return "All fields are required";
    } else if (inputAmount > amount) {
      return alert("insufficient funds");
    }else
    {
    ToastMe("success", "New scheme added");
    redirect("/dashboard")
    
    setDisplayCard([
      ...displayCard,
      {
        title: topSchemeDatas[0].title,
        amount: totalInterest,
        InterestRate: topSchemeDatas[0].InterestRate ,
        startDate: startDate,
        maturityDate: maturityDate,
      },
    ]);
  }
   ;
  }

  function cancelSubmit(){
    ToastMe("error", "Uncompleted, try again !")
    redirect("/dashboard")
  }

  return (
    <>
      <div className="flex fixed top-0 right-0 left-0 z-10 justify-center items-center w-full h-screen bg-black bg-opacity-75">
        <div className=" bg-white w-[45rem] py-[2rem] flex flex-col gap-y-[2rem] justify-center items-center rounded-2xl ">
          <h3 className="font-bold text-2xl">{topSchemeDatas[id].title} </h3>

          <form action="" className="flex flex-col ">
            <div className="flex gap-[2rem]">
              <div className="flex flex-col">
                <label htmlFor="">Start-Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={startDate}
                  onChange={change}
                  className=" border w-[17rem] p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Maturity-Date</label>
                <input
                  type="date"
                  name="maturityDate"
                  value={maturityDate}
                  onChange={change}
                  className="border  w-[17rem]  p-2 rounded-md"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Amount</label>
              <input
                type="tel"
                name="inputAmount"
                value={inputAmount}
                onChange={change}
                className="border w-[20rem] p-2 rounded-md"
                required
              />
            </div>
            <div className="space-y-5 my-5 text-md">
              {/* <p className="">
                Simple Interest (P * R * T /100):{" "}
                {`${inputAmount} * ${topSchemeDatas[0].InterestRate} * ${Difference_In_Days} `}
              </p> */}
              <div className="flex justify-between">
                <p>{`START DATE: ${startDate}`}</p>
                <p className="">{`MATURITY DATE: ${maturityDate}`}</p>
              </div>
              <div className="flex justify-between">
                <p>{`DIFFERENCE IN DAYS: ${Difference_In_Days}`} days</p>

                <p className="text-md">{`INTEREST: ${Interest}`}</p>
              </div>
              <p className="">{`TOTAL INTEREST: ${totalInterest}`}</p>
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleSubmit}
                className="w-[9rem] text-white bg-[#306233] p-3 font-medium rounded-lg my-5 text-center"
                type="button"
              >
                submit
              </button>
                <button
                onClick={cancelSubmit}
                  className="w-[9rem] text-white bg-red-500 p-3 font-medium rounded-lg my-5 text-center"
                  type="button"
                >
                  Cancel
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnrollModal;
