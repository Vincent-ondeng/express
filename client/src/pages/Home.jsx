import React, { useEffect, useState } from "react";
import Feed from "../components/BlogCard";
import Loading from "../components/Loading";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5500/feed")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="md:w-9/12 flex flex-col md:p-5 w-full px-4">
      {isLoading && <Loading />}
      {posts && <Feed posts={posts} />}
    </div>
  );
};

export default Home;
