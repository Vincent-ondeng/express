import React, { useEffect, useState } from 'react';
import Feed from '../components/BlogCard';

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5500/feed')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="home">
      {isLoading && (
        <div className="text-center text-3xl font-semibold text-gray-800 p-5 inline-flex items-center justify-center">
          Fetching posts...
        </div>
      )}
      {posts && <Feed posts={posts} />}
    </div>
  );
};

export default Home;
