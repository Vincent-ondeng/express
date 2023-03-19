import { Link } from "react-router-dom";
const Feed = ({ posts }) => {
  return (
    <div className="posts w-full">
      {posts.map((post) => (
        <div
          className="post flex flex-col md:flex-row justify-center w-[100vw]"
          key={post.id}
        >
          <div className="img w-2/6">
            <img
              src={post.img}
              alt="post thumbnail"
              className="object-cover w-32 h-32"
            />
          </div>
          <div className="content w-3/6 flex flex-col">
            <Link className="link" to={`/post/${post.id}`}>
              <h1 className="font-bold text-2xl md:text-3xl capitalize">
                {post.title}
              </h1>
            </Link>
            <span className="text-gray-800 text-lg py-2">
              {post.description}
            </span>
            <Link to={`/post/${post.id}`}>
              <button className="rounded-md text-semibold text-lg border-2 p-3 border-[skyblue] hover:bg-[skyblue]">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Feed;
