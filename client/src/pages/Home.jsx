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
    <main className="md:w-9/12 flex flex-col md:p-5 w-full px-4">
      {isLoading && <Loading />}
      {!isLoading && posts.length < 1 && (
        <div className="w-full inline-flex items center justify-center h-[75vh]">
          <h1 className="text-3xl md:text-xl font-semibold">
            Nothing here yet
          </h1>
        </div>
      )}
      {!isLoading && posts.length > 0 && <Feed posts={posts} />}
    </main>
  );
};

export default Home;
