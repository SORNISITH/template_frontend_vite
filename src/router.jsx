import { createBrowserRouter } from "react-router";
import Main from "@/app/portfolio/main.jsx";
import HomePage from "@/app/homepage/main.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/portfolio",
    Component: Main,
  },
]);

export default router;
