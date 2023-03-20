import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.scss";
import routes from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="w-[100vw]  bg-slate-100 flex flex-col items-center justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
