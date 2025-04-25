import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import CreateUser from "./features/users/CreateUser";
import UpdateUser from "./features/users/UpdateUser";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/adduser", element: <CreateUser /> },
    { path: "/editeuser/:id", element: <UpdateUser /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
