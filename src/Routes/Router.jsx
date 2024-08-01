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
import EditCourse from "../Componentrs/Dashboard/DashboardComponents/Courses/EditCourse";
import AdminLogin from "../Componentrs/Login/Admin/AdminLogin";
import AdminRegistration from "../Componentrs/Login/Admin/AdminRegistration";
import AdminOtp from "../Componentrs/Login/Admin/AdminOtp";
import AddBlog from "../Componentrs/Dashboard/DashboardComponents/Blogs/CreateBlog";
import Kids from "../Componentrs/Kids/Kids";
import KidsPage from "../Pages/KidsPage/KidsPage";
import EnrollmentList from "../Componentrs/Dashboard/DashboardComponents/Enrollment/ShowEnrollments";
import MyEnrollment from "../Componentrs/Dashboard/DashboardComponents/Enrollment/MyEnrollment";

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
        path: "/admin-signup",
        element: <AdminRegistration></AdminRegistration>,
      },
      {
        path: "/verify-user-otp",
        element: <UserOtp></UserOtp>,
      },
      {
        path: "/verify-admin-otp",
        element: <AdminOtp></AdminOtp>,
      },
      {
        path: "/admin-login",
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "/kids-program",
        element: <Kids></Kids>,
      },
      {
        path: "/about",
        element: <Aboutpage></Aboutpage>,
      },
      {
        path: "/kids-program",
        element: <KidsPage></KidsPage>,
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
          {
            path: "/dashboard/show-enrollments",
            element: <EnrollmentList></EnrollmentList>,
          },
          {
            path: "/dashboard/my-enrollment",
            element: <MyEnrollment></MyEnrollment>,
          },
          {
            path: "/dashboard/edit-course/:id",
            element: <EditCourse></EditCourse>,
          },
          {
            path: "/dashboard/add-blog",
            element: <AddBlog></AddBlog>,
          },
        ],
      },
    ],
  },
]);

export default router;
