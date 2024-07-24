// Router Import
import { createBrowserRouter } from "react-router-dom";

// Components Import
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Aboutpage from "../Pages/Aboutpage/Aboutpage";
import CourseDetails from "../Componentrs/FeaturedCourses/CourseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/about",
        element: <Aboutpage></Aboutpage>,
      },
      {
        path: "/full-stack-development",
        element: <CourseDetails></CourseDetails>,
      },
    ],
  },
]);

export default router;
