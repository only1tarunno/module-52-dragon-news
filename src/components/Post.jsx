import PropTypes from "prop-types";
import "./post.css";
import { Link } from "react-router-dom";
import { FaStar, FaEye, FaBookmark, FaShareNodes } from "react-icons/fa6";

const Post = ({ post }) => {
  const { _id, author, title, image_url, details, rating, total_view } = post;
  return (
    <div className="border border-[#E7E7E7] rounded mb-8">
      <div className="card-header p-8 bg-[#F3F3F3] overflow-hidden flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div>
            <img
              src={author?.img}
              className="h-10 w-10 object-cover rounded-full"
              alt=""
            />
          </div>
          <div className="text-[#403F3F] font-semibold space-y-2">
            <h3>{author?.name}</h3>
            <h4 className="text-sm">{author?.published_date}</h4>
          </div>
        </div>
        <div className="text-[#706F6F] text-2xl flex items-center gap-3">
          <FaBookmark></FaBookmark>
          <FaShareNodes></FaShareNodes>
        </div>
      </div>
      <div className="card-body space-y-2">
        <h2 className="text-[#403F3F] font-bold text-xl">{title}</h2>
        <img src={image_url} className="w-full" alt="" />
        <p className="detailsStyle">{details}</p>
        <Link to={`/news/${_id}`} className="text-[#FF8C47] font-bold">
          Read More
        </Link>
        <div className="flex justify-between items-center pt-8 mt-8 border-t">
          <div className="flex items-center gap-2">
            <div className="text-[#FF8C47] flex items-center gap-1 font-2xl">
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
              <FaStar></FaStar>
            </div>
            <p className="font-medium">{rating?.number}</p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-[#706F6F] font-medium">
              <span>
                <FaEye></FaEye>
              </span>
              {total_view}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
