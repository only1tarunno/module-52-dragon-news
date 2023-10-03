import { Link } from "react-router-dom";
import Header from "../sharedNav/Header/Header";
import LeftSideNav from "../sharedNav/LeftSideNav";
import Navbar from "../sharedNav/Navbar/Navbar";
import RightSideNav from "../sharedNav/RightSideNav";
import Marquee from "react-fast-marquee";
import Posts from "../../components/Posts";

const Home = () => {
  return (
    <div>
      <div className="mb-14">
        <Header></Header>
        <div className="bg-[#F3F3F3] p-4 rounded-md my-8 flex items-center gap-3">
          <button className="text-white font-medium btn rounded hover:bg-[#d72050] bg-[#D72050]">
            Latest
          </button>
          <Marquee pauseOnHover={true}>
            <Link>
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as...
            </Link>
          </Marquee>
        </div>
        <Navbar></Navbar>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="lg:col-span-2">
          <Posts></Posts>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
