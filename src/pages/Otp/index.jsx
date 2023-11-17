import ReactCodeInput from "react-code-input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToastMe from "../../components/toast";


const VerifyOtp = () => {
  const [otp, setOtp] = useState("");

  const handleOtpSubmit = async () => {
    ToastMe("success", "Welcome");
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className=" w-[40rem] py-[3rem] flex flex-col  items-center bg-white shadow-2xl">
        <h1 className="text-center py-5">Verify OTP</h1>
        <ReactCodeInput
          type="text"
          value={otp}
          onChange={(e) =>setOtp(e.target.value)}
          fields={6}
        />

        <Link to="/auth/login">
        <button
          onClick={handleOtpSubmit}
          className=" mt-[3rem] text-lg p-3 text-center text-white font-semibold w-[20rem] bg-[#306233] rounded-lg  hover:bg-[#55865a] "
        >
          Verify
        </button>
        </Link>
      </div>
    </div>
  );
};

export default VerifyOtp;
