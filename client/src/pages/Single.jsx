import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Single = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5500/feed/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.imgUrl == null) {
          data.imgUrl =
            "https://github.com/musaubrian/newspulse/blob/main/assets/images/notfound.png?raw=true";
        }
        setPost(data);
      });
  }, [id]);

  return (
    <>
      {isLoading && <Loading />}
      {post && (
        <div className="flex flex-col w-full bg-slate-50 rounded-md p-10">
          <img
            src={post.imgUrl}
            alt="post thumbnail"
            className="w-full md:h-60 h-52 mb-3 rounded-md object-cover"
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
            <span>{post.category}</span>
          </div>
          <div className="text-xl md:p-5 mt-5 w-full">
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
