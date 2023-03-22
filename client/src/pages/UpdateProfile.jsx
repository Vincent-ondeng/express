import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

const UpdateProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user.bio === null) user.bio = "You NEED to update this!!!";

  const [username, setUserName] = useState(user.username);
  const [selectedImage, setImage] = useState(null);
  const [userBio, setUserBio] = useState(user.bio);
  const [updating, setUpdateStatus] = useState(false);
  const [updateResponse, setUpdateResponse] = useState("");
  const navigate = useNavigate();
  const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
  const token = JSON.parse(localStorage.getItem("token"));
  //   console.log(token);

  const uploadFile = async (file) => {
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`users/${file.name}`, file, { cacheControl: 3600, upsert: true });

    if (error) {
      console.log(error);
    }

    const imageUrl = `${supabaseUrl}/storage/v1/object/public/images/${data.path}`;

    return imageUrl;
  };
  const updateDets = (imgURL) => {
    const updateData = {
      imgURL,
      username,
      userBio,
    };
    fetch(`http://localhost:5500/users/${user.id}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => {
        if (res === 200) {
          localStorage.removeItem("username");
          localStorage.removeItem("bio");
          localStorage.removeItem("imgURL");
        }
        return res.json();
      })
      .then((data) => {
        setUpdateResponse(data);
        console.log(updateResponse, data);
        localStorage.setItem(
          "username",
          JSON.stringify(updateResponse.username)
        );
        navigate("/user/me");
        setUpdateStatus(false);
      })
      .catch((error) => {
        console.log(error);
        setUpdateStatus(false);
      });
  };

  const updateProfile = async (e) => {
    setUpdateStatus(true);
    e.preventDefault();

    if (selectedImage === null || selectedImage === "undefined") {
      let imgURL = user.imgURL;
      updateDets(imgURL);
    } else {
      const imgUrl = await uploadFile(selectedImage);
      updateDets(imgUrl);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form
        onSubmit={updateProfile}
        className="flex flex-col items-center bg-blue-50 w-full text-lg"
      >
        <h1 className="text-2xl my-2 underline font-semibold">
          Update Profile
        </h1>
        <input
          type="file"
          className="w-5/6 md:w-4/6 my-2 bg-slate-200 p-3 shadow-sm rounded-md"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label className="w-5/6 md:w-4/6 text-gray-800 mt-2">Username:</label>
        <input
          type="text"
          placeholder="e.g chuckie"
          className="w-5/6 md:w-4/6 p-2 mb-2 border-2 border-slate-400 bg-inherit rounded-md"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <label className="w-5/6 md:w-4/6 text-gray-800 mt-2">Bio:</label>
        <textarea
          className="w-5/6 md:w-4/6 mb-2 rounded-md border-2 border-slate-400 bg-inherit h-32 p-2"
          maxLength={60}
          value={userBio}
          onChange={(e) => setUserBio(e.target.value)}
          placeholder="Something about you (not longer than 60 characters)"
        ></textarea>
        <div className="inline-flex justify-center w-full">
          <button className="mx-3 text-semibold text-lg bg-blue-400 px-5 py-3 rounded-md mt-2 mb-20 md:w-2/6 w-3/6 transition-all hover:bg-blue-600 hover:text-gray-50">
            {!updating && <span>update profile</span>}
            {updating && <span>updating...</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
