import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h2 className=" text-[#403F3F] font-semibold text-xl mb-8">
        Dragon News Home
      </h2>
      <div>
        {posts.map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
