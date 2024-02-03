import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
