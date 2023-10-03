import Navbar from "../sharedNav/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    console.log(email, pass);
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex justify-center items-center flex-col min-h-screen">
        <div className="bg-[#F3F3F3] p-10 w-1/2">
          <h2 className="text-[#403F3F] font-semibold text-2xl lg:text-4xl text-center">
            Login your account
          </h2>
          <span className="block w-full h-[2px] bg-[#E7E7E7] my-10"></span>
          {/* form starts  */}
          <form onSubmit={handleLogin}>
            <label
              htmlFor="email"
              className="text-[#403F3F] font-semibold text-xl"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              id="email"
              className="w-full  bg-white p-5 mt-3 mb-6 focus:outline-none"
            />
            <label
              htmlFor="pass"
              className="text-[#403F3F] font-semibold text-xl"
            >
              Password
            </label>
            <input
              type="password"
              name="pass"
              placeholder="Enter your password"
              id="pass"
              className="w-full  bg-white p-5 mt-3 mb-6 focus:outline-none"
            />

            <input
              type="submit"
              value="Login"
              className="w-full font-semibold text-xl text-white bg-[#403F3F] py-5 cursor-pointer mb-6"
            />
          </form>
          <p className="text-center text-[#706F6F] font-semibold">
            Dont’t Have An Account ?
            <Link to="/register" className="text-[#FF8C47] ml-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
