import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const User = () => {
  const [userPosts, setUserPosts] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const username = JSON.parse(localStorage.getItem("username"));
  const bio = JSON.parse(localStorage.getItem("bio"));
  const id = JSON.parse(localStorage.getItem("id"));
  const imgURL = JSON.parse(localStorage.getItem("imgURL"));
  if (user === null) {
    navigate("/");
  }

  useEffect(() => {
    fetch(`http://localhost:5500/users/${id}/posts/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.status === 401) navigate("/login");
        return res.json();
      })
      .then((data) => {
        setUserPosts(data);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }, [id, token, userPosts, navigate]);
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full">
        {user !== null && (
          <div className="px-10">
            <div className="flex flex-row items-center justify-center border-b-2 p-5 mb-10 border-slate-400">
              <div className="w-3/6 inline-flex items-center md:justify-end md:px-10">
                <img
                  src={imgURL}
                  alt=""
                  className="w-4/6 md:w-2/6 mb-5 rounded-full shadow-lg object-cover"
                />
              </div>
              <div className="w-3/6 flex flex-col items-start md:px-5 justify-center">
                <h1 className="font-semibold text-3xl">{username}</h1>
                <p className="text-gray-800 text-lg">
                  {bio === null ? (
                    <span>Nothing about you yet ☹️</span>
                  ) : (
                    <span>{bio}</span>
                  )}
                </p>
                <Link
                  to="/user/edit"
                  className="text-lg my-2 text-blue-500 underline"
                >
                  update profile?
                </Link>
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-3xl capitalize">your posts:</h1>
              <div className="flex flex-col md:flex-row justify-around flex-wrap ">
                {userPosts &&
                  userPosts.map((post) => (
                    <div
                      key={post.id}
                      className="w-full md:w-2/6 bg-slate-50 rounded-md overflow-hidden shadow-lg my-5"
                    >
                      <Link to={`/user/posts/${post.id}`}>
                        <div className="w-full block">
                          <div>
                            <img
                              src={
                                post.imgURL === null
                                  ? "https://github.com/musaubrian/newspulse/blob/main/assets/images/notfound.png?raw=true"
                                  : post.imgURL
                              }
                              alt=""
                              className="h-32 w-full object-cover"
                            />
                          </div>
                          <div className="p-5">
                            <h1 className="text-2xl font-semibold text-center capitalize">
                              {post.title}
                            </h1>
                            <p className="text-center text-gray-600">
                              {post.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                {userPosts.length < 1 && (
                  <div className="w-full md:w-3/6 bg-slate-50 rounded-md shadow-lg my-5">
                    <div className="w-full block">
                      <div>
                        <img
                          src="https://github.com/musaubrian/newspulse/blob/main/assets/images/notfound.png?raw=true"
                          alt=""
                          className="h-32 w-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h1 className="text-2xl font-semibold text-center capitalize">
                          Nothing here yet
                        </h1>
                        <p className="text-center text-gray-600">
                          want to add some
                        </p>
                        <span className="inline-flex items-center w-full justify-center mt-4">
                          <Link
                            to="/user/write"
                            className="text-lg bg-blue-300 p-3 rounded-md w-2/6 text-center"
                          >
                            Write
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
