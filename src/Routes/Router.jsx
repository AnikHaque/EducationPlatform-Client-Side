// Router Import
import { createBrowserRouter } from "react-router-dom";

// Components Import
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Aboutpage from "../Pages/Aboutpage/Aboutpage";
import CourseDetails from "../Componentrs/FeaturedCourses/CourseDetails";
import DashboardLayout from "../Layouts/DashboardLayout";

import MainDashboard from "../Componentrs/Dashboard/MainDashboard";
import LoginFirstPage from "../Componentrs/Login/LoginFirstPage";
import UserLogin from "../Componentrs/Login/User/UserLogin";
import UserRegistration from "../Componentrs/Login/User/UserRegistration";
import UserOtp from "../Componentrs/Login/User/UserOtp";
import AddCategory from "../Componentrs/Dashboard/DashboardComponents/Add-Category/AddCategory";
import CategoryList from "../Componentrs/Dashboard/DashboardComponents/Add-Category/Categories/GetAllCategory";
import AddCourse from "../Componentrs/Dashboard/DashboardComponents/Courses/CreateCourse";
import CourseList from "../Componentrs/Dashboard/DashboardComponents/Courses/ShowCourses";

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
        path: "/login",
        element: <LoginFirstPage></LoginFirstPage>,
      },
      {
        path: "/user-login",
        element: <UserLogin></UserLogin>,
      },
      {
        path: "/user-signup",
        element: <UserRegistration></UserRegistration>,
      },
      {
        path: "/verify-user-otp",
        element: <UserOtp></UserOtp>,
      },
      {
        path: "/about",
        element: <Aboutpage></Aboutpage>,
      },
      {
        path: "/full-stack-development",
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
          {
            path: "/dashboard/maindashboard",
            element: <MainDashboard></MainDashboard>,
          },
          {
            path: "/dashboard/add-category",
            element: <AddCategory></AddCategory>,
          },
          {
            path: "/dashboard/show-categories",
            element: <CategoryList></CategoryList>,
          },
          {
            path: "/dashboard/create-course",
            element: <AddCourse></AddCourse>,
          },
          {
            path: "/dashboard/courses",
            element: <CourseList></CourseList>,
          },
        ],
      },
    ],
  },
]);

export default router;
