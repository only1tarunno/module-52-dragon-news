import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCalendarDays } from "react-icons/fa6";
import moment from "moment";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setposts(data));
  }, []);

  return (
    <div className="sticky top-10 ">
      <div className="h-[768px] overflow-y-scroll pr-5">
        <h2 className="text-[#403F3F] font-semibold text-xl mb-4">
          All Caterogy
        </h2>
        <div className="leftSidebar">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              className="text-xl font-medium block p-[15px]"
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
        <div className="mt-8">
          {posts.slice(10, 13).map((post) => (
            <div className="mb-7 space-y-3" key={post._id}>
              <img
                src={post.thumbnail_url}
                className="w-full object-cover"
                alt=""
              />
              <h2 className="text-[#403F3F] font-semibold text-xl">
                {post.title}
              </h2>
              <div className="flex items-center justify-between">
                <h3>Sports</h3>
                <p className="flex items-center gap-1">
                  <span>
                    <FaCalendarDays></FaCalendarDays>
                  </span>
                  {moment().format("MMM D, YYYY")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
