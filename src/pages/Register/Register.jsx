import { Link } from "react-router-dom";
import Navbar from "../sharedNav/Navbar/Navbar";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const pass = e.target.pass.value;
    const accepted = e.target.checkbox.checked;
    console.log(name, photo, email, pass, accepted);
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex justify-center items-center flex-col min-h-screen">
        <div className="bg-[#F3F3F3] p-10 w-1/2">
          <h2 className="text-[#403F3F] font-semibold text-2xl lg:text-4xl text-center">
            Register your account
          </h2>
          <span className="block w-full h-[2px] bg-[#E7E7E7] my-10"></span>
          {/* form starts  */}
          <form onSubmit={handleRegister}>
            <label
              htmlFor="name"
              className="text-[#403F3F] font-semibold text-xl"
            >
              Your Name
            </label>
            <input
              type="name"
              name="name"
              placeholder="Enter your name"
              id="name"
              className="w-full  bg-white p-5 mt-3 mb-6 focus:outline-none"
            />
            <label
              htmlFor="photo"
              className="text-[#403F3F] font-semibold text-xl"
            >
              Photo URL
            </label>
            <input
              type="photo"
              name="photo"
              placeholder="Enter your photo URL"
              id="photo"
              className="w-full  bg-white p-5 mt-3 mb-6 focus:outline-none"
            />
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

            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="ml-1">
              Accept <a href="/"> Term & Conditions</a>
            </label>

            <input
              type="submit"
              value="Login"
              className="w-full font-semibold text-xl text-white bg-[#403F3F] py-5 cursor-pointer my-6"
            />
          </form>
          <p className="text-center text-[#706F6F] font-semibold">
            Already Have An Account ?
            <Link to="/Login" className="text-[#FF8C47] ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
