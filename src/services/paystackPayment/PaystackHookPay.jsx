import { useState } from "react";
import { usePaystackPayment } from "react-paystack";
import ToastMe from "../../components/toast";
import { useNavigate } from "react-router-dom";
import { useDataContext, useHandleChangeDatasContext } from "../../components/context";


const PaystackHookPay = ({ text, isPopUp, setIsPopUp }) => {
  const redirect = useNavigate();

  const {email, amount } = useDataContext()
  const handleChange = useHandleChangeDatasContext()

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: amount *100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: process.env.REACT_APP_PUBLIC_KEY,
  };

  const onSuccess = () => {
    ToastMe("success", "Payment successful");
  };

  const onClose = () => {
    ToastMe("error", "All fields are required");
  };
  const initializePayment = usePaystackPayment(config);

  const handleSubmit = (e) => {
    e.preventDefault();
    initializePayment(onSuccess, onClose);
      return (redirect("/dashboard"))
     
  };

  return (
    <>
      {isPopUp && (
        <div className="flex fixed top-0 right-0 left-0 z-10 justify-center items-center w-full h-screen bg-black bg-opacity-75">
          <div className=" bg-white w-[45rem] py-[2rem] flex flex-col gap-y-[2rem] justify-center items-center rounded-2xl ">
            <h3 className="font-bold text-2xl">Proceed to payment</h3>

            <form action="" className="flex flex-col ">
              <div className="space-y-[2rem]">
                <div className="flex flex-col">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className=" border w-[20rem] p-2 rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Amount</label>
                  <input
                    type="text"
                    value={amount}
                    onChange={handleChange}
                    name="amount"
                    className="border w-[20rem] p-2 rounded-md"
                    required
                  />
                </div>
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
                  onClick={() => setIsPopUp(!isPopUp) } 
                  className="w-[9rem] text-white bg-red-500 p-3 font-medium rounded-lg my-5 text-center"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PaystackHookPay;
