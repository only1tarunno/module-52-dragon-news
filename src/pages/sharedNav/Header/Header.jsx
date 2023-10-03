import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className=" space-y-3">
      <img src={logo} className="w-[150] mx-auto md:w-[472] mt-5" alt="" />
      <h2 className="text-[#706F6F] text-center text-lg">
        Journalism Without Fear or Favour
      </h2>
      <h3 className="text-[#403F3F] text-center font-medium text-xl">
        {moment().format("dddd, MMMM D, YYYY")}
      </h3>
    </div>
  );
};

export default Header;
