import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Feed from "../components/BlogCard";

const User = () => {
  const [userPosts, setUserPosts] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const username = user.username;
  //   const bio = user.bio;
  const id = user.id;

  useEffect(() => {
    fetch(`http://localhost:5500/users/${id}/posts/live`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserPosts(data);
      });
  }, []);
  return (
    <div className="flex flex-col bg-slate-50 w-full">
      <nav className="bg-slate-300 w-full flex flex-row items-center">
        <ul className="flex flex-row">
          <li className="px-3">
            <Link to="/write">Write</Link>
          </li>
          <li>Logout</li>
        </ul>
      </nav>

      <div>
        <h1>welcome {username}</h1>
      </div>
      <div>
        <h1>Your posts</h1>
        <div>{userPosts.map}</div>
      </div>
    </div>
  );
};

export default User;
