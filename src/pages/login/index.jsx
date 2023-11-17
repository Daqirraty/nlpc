
import { Link } from "react-router-dom";
import {useDataContext, useHandleChangeDatasContext} from "../../components/context"

const Login = () => {

const inputDetails = useDataContext()
const onchange = useHandleChangeDatasContext ()


  return (
    <div className="flex flex-col w-full h-screen ">
      <div className="text-5xl text-center font-extrabold text-[#306233] p-[2rem]">
        NLPC PFA LOGIN
      </div>

      <div className="flex justify-center items-center">
        <div className="flex flex-col w-[50%] p-[5rem] shadow-2xl rounded-xl">
          <div className="text-center">
            <h1 className="font-bold text-2xl">Hi, welcome back</h1>
          </div>

          <form className="flex flex-col justify-center items-center"
          // onSubmit={handleSubmit}
          >
            <div className="py-[2rem]">
              <label className="text-lg block" htmlFor="">
                Email Address
              </label>
              <input
                required
                id="email"
                name="email"
                type="email"
                onChange={onchange}
                value={inputDetails.email}
                className="w-[25rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
              />
            </div>
           <div className="">
           <label className="text-lg block" htmlFor="">
              Password
            </label>
            <input
              required
              id="password"
              name="password"
              type="password"
              onChange={onchange}
              value={inputDetails.password}
              className="w-[25rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
            />
           </div>
            <Link to="/dashboard">
              <button
                type="submit"
                className="mt-[3rem] text-lg text-center text-white font-semibold w-[25rem] bg-[#306233] rounded-lg px-[1rem] py-[1rem] hover:bg-[#55865a] "
              >
                login
              </button>
            </Link>
            <div className="text-center py-3">
            <p className="">Don't have an account?, <Link to="/auth/sign-up" className="text-[#306233]">sign up</Link> </p>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
