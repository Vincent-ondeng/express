import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Single = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://express-api-o02g.onrender.com/feed/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPost(data);
      });
  }, [id]);

  return (
    <>
      {isLoading && <Loading />}
      {post && (
        <div className="flex flex-col px-4 md:px-10 w-full md:w-5/6 bg-slate-100 md:bg-slate-200 mb-10 rounded-md md:shadow-lg items-center text-justify">
          <img
            src={
              post.imgURL === null
                ? "https://github.com/musaubrian/newspulse/blob/main/assets/images/notfound.png?raw=true"
                : post.imgURL
            }
            alt="post thumbnail"
            className="w-full md:h-60 h-40 my-5 rounded-md object-cover shadow-lg"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-center capitalize">
            {post.title}
          </h1>
          <div className="inline-flex text-lg  text-gray-800 text-center w-full items-center justify-center mt-2">
            <span className=" px-2 font-semibold">written by:</span>
            <span>{post.author.username}</span>
          </div>
          <div className="inline-flex text-lg  text-gray-800 text-center w-full items-center justify-center">
            <span className="pl-4 pr-2 font-semibold">Category:</span>
            {post.description === null ? (
              <span>{post.category}</span>
            ) : (
              <span>uncategorized</span>
            )}
          </div>
          <div className="text-lg md:text-xl  mt-5 w-full px-2 mb-10 md:w-5/6">
            <p className="text-justify text-md w-full text-gray-900 whitespace-pre-wrap">
              {post.content}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Single;
