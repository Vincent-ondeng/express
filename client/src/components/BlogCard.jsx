import { Link } from 'react-router-dom';
const Feed = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <div className="img">
            <img src={post.img} alt="IMG" />
          </div>
          <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.content}</p>
            <button>Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Feed;
