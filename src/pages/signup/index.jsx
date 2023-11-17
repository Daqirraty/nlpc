import { Link, useNavigate } from "react-router-dom";
import {
  useDataContext,
  useHandleChangeDatasContext,
} from "../../components/context";

const Signup = () => {
  const inputDetails = useDataContext();
  const onchange = useHandleChangeDatasContext();


  const submit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col w-full h-screen ">
      <div className="text-5xl text-center font-extrabold text-[#306233] p-[2rem] ">
        NLPC PFA SIGN UP
      </div>

      <div className="flex justify-center py-5 ">
        <div className=" flex flex-col w-[50%]">
          <div className="p-4 text-center">
            <h1 className="font-bold text-lg">Sign Up for an Account</h1>
            <p className="">Let’s get you all set up, enjoy the experience</p>
          </div>

          <form onSubmit={submit} className="space-y-5 p-4">
            <div className="flex justify-between">
              <div className="">
                <label className="text-lg block" htmlFor="">
                  lastName
                </label>
                <input
                  name="lastName"
                  type="text"
                  required
                  value={inputDetails.lastName}
                  onChange={onchange}
                  placeholder="lastNames"
                  className="w-[20rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>

              <div className="">
                <label className="text-lg block" htmlFor="">
                  Other Name
                </label>
                <input
                  required
                  name="otherNames"
                  value={inputDetails.otherNames}
                  onChange={onchange}
                  type="text"
                  placeholder="otherName"
                  className="w-[20rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <label className="text-lg block" htmlFor="">
                  Email 
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  value={inputDetails.email}
                  onChange={onchange}
                  placeholder="email"
                  className="w-[20rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>

              <div className="">
                <label className="text-lg block" htmlFor="">
                  Password
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  value={inputDetails.password}
                  onChange={onchange}
                  placeholder="password"
                  className="w-[20rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <label className="text-lg block" htmlFor="">
                  Gender
                </label>
                <input
                  required
                  name="gender"
                  value={inputDetails.gender}
                  onChange={onchange}
                  type="text"
                  placeholder="Gender"
                  className="w-[20rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>
              <div className="">
                <label className="text-lg block" htmlFor="">
                  Phone
                </label>
                <input
                  required
                  name="phone"
                  value={inputDetails.phone}
                  onChange={onchange}
                  type="tel"
                  placeholder="phone-number"
                  className="w-[20rem] mt-[1rem] rounded-lg p-[1rem] outline-none border border-gray-700 "
                />
              </div>
            </div>
            <Link to="/auth/verify-otp">
              <button
                type="submit"
                className="mt-[3rem] text-lg text-center text-white font-semibold w-full bg-[#306233] rounded-lg px-[1rem] py-[1rem] hover:bg-[#55865a] "
              >
                Submit
              </button>
            </Link>
            <div className="text-center">
              <p className="">
                Already have an account?,{" "}
                <Link to="/auth/login" className="text-[#306233]">
                  login
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
