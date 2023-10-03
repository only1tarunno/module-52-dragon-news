import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaSquareTwitter,
  FaInstagram,
} from "react-icons/fa6";
import qzone1 from "../../assets/qZone1.png";
import qzone2 from "../../assets/qZone2.png";
import qzone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="space-y-4">
        <h2 className=" text-[#403F3F] font-semibold text-xl">Login With</h2>
        <div className="space-y-2">
          <button className=" btn w-full">
            <span>
              <FaGoogle></FaGoogle>
            </span>
            Login with Google
          </button>

          <button className="w-full btn">
            <span>
              <FaGithub></FaGithub>
            </span>
            Login with Github
          </button>
        </div>
      </div>
      <div className="my-6">
        <h2 className="font-medium text-xl text-[#403F3F] mb-4">Find Us On</h2>
        <div className="border rounded">
          <a href="" className="flex  py-3 px-2 items-center gap-1">
            <span>
              <FaFacebookF></FaFacebookF>
            </span>
            Facebook
          </a>
          <a
            href=""
            className="flex border-t border-b py-3 px-2 items-center gap-1"
          >
            <span>
              <FaSquareTwitter></FaSquareTwitter>
            </span>
            Twitter
          </a>
          <a href="" className="flex  py-3 px-2 items-center gap-1">
            <span>
              <FaInstagram></FaInstagram>
            </span>
            Instagram
          </a>
        </div>
      </div>
      <div className="bg-[#F3F3F3] p-4 rounded space-y-5">
        <h2 className="font-medium text-xl text-[#403F3F] mb-4">Q-Zone</h2>
        <img src={qzone1} className="w-full" alt="" />
        <img src={qzone2} className="w-full" alt="" />
        <img src={qzone3} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
