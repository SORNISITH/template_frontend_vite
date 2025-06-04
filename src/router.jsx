import { createBrowserRouter } from "react-router";
import Main from "@/app/portfolio/main.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/portfolio",
    Component: Main,
  },
]);

export default router;
