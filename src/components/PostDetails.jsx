import { useLoaderData, useParams } from "react-router-dom";
import Header from "../pages/sharedNav/Header/Header";
import RightSideNav from "../pages/sharedNav/RightSideNav";
import Navbar from "../pages/sharedNav/Navbar/Navbar";

const PostDetails = () => {
  const news = useLoaderData();
  const { id } = useParams();

  const singleNews = news.find((anew) => anew._id === id);
  const { title, image_url, details } = singleNews;
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-10">
        <div className="col-span-3">
          <div className=" border p-5">
            <h2 className=" text-[#403F3F] font-semibold text-xl mb-8">
              Dragon News
            </h2>
            <div>
              <img src={image_url} className="w-full" alt="" />
              <h2 className="font-bold text-2xl text-[#403F3F]">{title}</h2>
              <p>{details}</p>
            </div>
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
