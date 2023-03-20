import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl">
        Ooops.. seems something went wrong
      </h1>
      <Link to="/" className="text-blue-500 underline text-lg my-4">
        Back home
      </Link>
    </div>
  );
};

export default NotFound;
