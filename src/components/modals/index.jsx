// import React, { useState } from "react";
// import { topSchemeDatas } from "../data";
// import ToastMe from "../toast";
// import { Link, redirect, useParams } from "react-router-dom";

// const Modal = ({ handleEnroll }) => {
//   const [formData, setFormData] = useState({
//     startDate: "",
//     endDate: "",
//     amount: "",
//   });
//   const {id} = useParams()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.amount || !formData.phone)
//       return alert("Amount and Date is required");
//   };

//   const startDate = new Date(formData.startDate);
//   const endDate = new Date(formData.endDate);
//   let Difference_In_Time = endDate.getTime() - startDate.getTime();
//   let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//   let Interest = parseInt( formData.amount * topSchemeDatas[0].InterestRate * Difference_In_Days)
//   let systemDeduction = topSchemeDatas[0].AdminFee + topSchemeDatas[0].MaintenanceFee
//   let totalInterest = parseInt(Interest - systemDeduction)

//   return (
//     <>
//       <div className="flex fixed top-0 right-0 left-0 z-10 justify-center items-center w-full h-screen bg-black bg-opacity-75">
//         <div className=" bg-white w-[45rem] py-[2rem] flex flex-col gap-y-[2rem] justify-center items-center rounded-2xl ">
//           {/* <h3 className="font-bold text-2xl">{topSchemeDatas[id].title} </h3> */}

//           <form  action="" className="flex flex-col ">
//             <div className="flex gap-[2rem]">
//               <div className="flex flex-col">
//                 <label htmlFor="">Start-Date</label>
//                 <input
//                   type="date"
//                   value={formData.startDate}
//                   onChange={(e) =>
//                     setFormData({ ...formData, startDate: e.target.value })
//                   }
//                   className=" border w-[17rem] p-2 rounded-md"
//                   required
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label htmlFor="">End-Date</label>
//                 <input
//                   type="date"
//                   value={formData.endDate}
//                   onChange={(e) =>
//                     setFormData({ ...formData, endDate: e.target.value })
//                   }
//                   className="border  w-[17rem]  p-2 rounded-md"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="flex flex-col">
//               <label htmlFor="">Amount</label>
//               <input
//                 type="tel"
//                 value={formData.amount}
//                 onChange={(e) =>
//                   setFormData({ ...formData, amount: e.target.value })
//                 }
//                 className="border w-[20rem] p-2 rounded-md"
//                 required
//               />
//             </div>
//             <div className="space-y-5 my-5 text-md">
//              <p className="">
//              Simple Interest (P * R * T /100):{" "}
//               {`${formData.amount} * ${topSchemeDatas[0].InterestRate} * ${Difference_In_Days} `}
//              </p>
//               <div className="flex justify-between">
//                 <p>{`START DATE: ${formData.startDate}`}</p>
//                 <p className="">{`MATURITY DATE: ${formData.endDate}`}</p>
//               </div>
//               <div className="flex justify-between">
//                 <p>{`DIFFERENCE IN DAYS: ${Difference_In_Days}`}</p>

//                 <p className="text-md">
//                   {`INTEREST: ${Interest}`}
//                 </p>
//               </div>
//               <p className="">
//                 {/* {Interest - (topSchemeDatas[0].AdminFee + topSchemeDatas[0].MaintenanceFee)} */}
//                 {`total Interest: ${totalInterest}`}

//               </p>
//             </div>

//             <div className="flex justify-between">
//               <button
//                 onClick={() => {
//                   // initializePayment(onSuccess, onClose);
//                   ToastMe("success", "New scheme added");
//                   redirect("/dashboard");
//                 }}
//                 className="w-[9rem] text-white bg-[#306233] p-3 font-medium rounded-lg my-5 text-center"
//                 type="button"
//               >
//                 submit
//               </button>
//               {/* <Link to="/dashboard">
//               <button
//                 // onClick={handleEnroll}
//                 className="w-[9rem] text-white bg-red-500 p-3 font-medium rounded-lg my-5 text-center"
//                 type="button"
//               >
//                 Cancel
//               </button>
//               </Link> */}
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;
