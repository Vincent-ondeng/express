import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setdescription] = useState("");
  const [content, setContent] = useState("");
  const [sending, setSending] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const token = JSON.parse(localStorage.getItem("token"));
  const id = user.id;
  let publish = true;

  if (user === null || user === "undefined") navigate("/login");
  const uploadFile = async (file) => {
    setSending(true);
    if (selectedFile === null || selectedFile === "undefined") {
      const fallbackUrl =
        "https://github.com/musaubrian/newspulse/blob/main/assets/images/notfound.png?raw=true";
      return fallbackUrl;
    } else {
      const { data, error } = await supabase.storage
        .from("images")
        .upload(`posts/${file.name}`, file, {
          cacheControl: 3600,
          upsert: true,
        });

      if (error) {
        console.log(error);
      }

      const imageUrl = `${supabaseUrl}//storage/v1/object/public/images/${data.path}`;

      console.log(imageUrl);
      return imageUrl;
    }
  };

  const newPost = async (e) => {
    e.preventDefault();
    setSending(true);
    const url = await uploadFile(selectedFile);
    const postData = { url, title, category, description, content, publish };
    fetch(`https://express-api-o02g.onrender.com/users/${id}/posts/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postData),
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.clear();
          navigate("/login");
        }
        setSending(false);
        navigate("/");
      })
      .catch((error) => console.log(error));
    // console.log(selectedFile.name);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form
        onSubmit={newPost}
        className="flex flex-col items-center bg-blue-50 w-full text-lg"
      >
        <input
          type="file"
          className="w-5/6 md:w-4/6 my-2 bg-slate-200 p-3 shadow-sm rounded-md"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <input
          type="text"
          placeholder="Post title"
          className="w-5/6 md:w-4/6 p-2 my-2 border-2 border-slate-400 bg-inherit rounded-md"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="rounded-md p-3 bg-slate-200 w-5/6 md:w-4/6 my-2"
          required
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option>-- Pick a category --</option>
          <option value="programming">Programming</option>
          <option value="art">Art</option>
          <option value="AI">AI</option>
          <option value="Food">Food</option>
          <option value="Movies">Movies</option>
          <option value="sth-else">some other category</option>
        </select>
        <textarea
          className="w-5/6 md:w-4/6 p-4 h-16 my-2 border-2 border-slate-400 bg-inherit rounded-md"
          placeholder="brief description of the topic"
          required
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        ></textarea>
        <textarea
          placeholder="Your beautifull content"
          className="w-5/6 md:w-4/6 border-2 my-2 border-slate-400 rounded-md p-4 bg-inherit h-64"
          required
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <div className="inline-flex justify-center w-full">
          <button className="mx-3 text-semibold text-lg bg-blue-400 px-5 py-3 rounded-md mt-2 mb-20 md:w-2/6 w-3/6 transition-all hover:bg-blue-600 hover:text-gray-50">
            {!sending && <span>Publish post</span>}
            {sending && <span>Publishing...</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
