import { Link } from "react-router-dom";
const Feed = ({ posts }) => {
  return (
    <div className="w-full">
      {posts.map((post) => (
        <div
          className="post flex flex-col md:flex-row justify-around items-center w-full shadow-md mb-10 p-5 md:px-10 md:py-5 rounded-md bg-slate-50"
          key={post.id}
        >
          <div className="img w-full md:w-3/6 items-center justify-center rounded-md overflow-hidden">
            <img
              src={post.imgURL}
              alt="post thumbnail"
              className="object-cover w-full h-40 md:h-52"
            />
          </div>
          <div className="content w-full my-4 md:w-3/6 flex flex-col items- justify-start md:px-5 md:text-left">
            <Link className="link" to={`/post/${post.id}`}>
              <h1 className="font-black text-2xl md:text-4xl capitalize">
                {post.title}
              </h1>
            </Link>
            <span className="text-gray-800 text-lg py-2">
              {post.description}
            </span>
            <Link to={`/post/${post.id}`}>
              <span className="text-semibold text-lg  w-full  text-blue-500 hover:underline transition-all">
                Read More
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Feed;
