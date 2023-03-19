import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5500/feed/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.imgUrl == null) {
          console.log('null image');
          data.imgUrl =
            'https://github.com/musaubrian/newspulse/blob/main/assets/images/notfound.png?raw=true';
        }
        setPost(data);
      });
  }, []);

  return (
    <>
      {post && (
        <div className="flex flex-col w-full bg-blue-50 p-10">
          <img
            src={post.imgUrl}
            alt="post image"
            className="w-full md:h-60 h-52 mb-3 rounded-md object-cover"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {post.title}
          </h1>
          <div className="inline-flex text-lg  text-gray-800 text-center w-full items-center justify-center my-2">
            <span className=" px-2 font-semibold">written by:</span>
            <span>{post.author.username}</span>
          </div>
          <p>{post.content}</p>
        </div>
      )}
    </>
  );
};

export default Single;
