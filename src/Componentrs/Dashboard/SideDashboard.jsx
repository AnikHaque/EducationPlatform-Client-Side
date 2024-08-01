import { Link } from "react-router-dom";

const SideDashboard = () => {
  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e bg-black max-w-72">
        <div className="px-4 py-6">
          <span className="grid h-10 w-3/4 place-content-center rounded-lg  text-xs">
            <img src="https://www.codeinnovior.com/assets/images/Logo-6-inch%20(1).png"></img>
          </span>

          <ul className="mt-6 space-y-1">
            <li>
              <Link
                to="/dashboard/maindashboard"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
              >
                Dashboard
              </Link>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 ">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    <Link to="">User Management</Link>
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <Link
                      to="/dashboard/show-enrollments"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Show All Users
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 ">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    <Link to="">Enrollment Management</Link>
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <Link
                      to="/dashboard/show-enrollments"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Show Enrollments
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/my-enrollment"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      My Enrollment
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 ">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    <Link to="">Course Management</Link>
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <Link
                      to="/dashboard/add-category"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Create Category
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/show-categories"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Show Categories
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/create-course"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Create Course
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/courses"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Show Courses
                    </Link>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Calendar
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 ">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    <Link to="">Blog Management</Link>
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <Link
                      to="/dashboard/add-blogcategory"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Create Blog Category
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/show-blogcategory"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Show Blog Categories
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/add-blog"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Create Blog
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/show-categories"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Show Blogs
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 ">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    <Link to="">Certificate Management</Link>
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <Link
                      to="/dashboard/add-blog"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Create Certificate
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/show-certificate"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Show Certificates
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 ">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    <Link to="">Rewards Management</Link>
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <Link
                      to="/dashboard/add-blog"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Create Rewards
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/show-categories"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Show Rewards
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 ">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    <Link to="">Payment Management</Link>
                  </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <Link
                      to="/dashboard/add-blog"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Show All Payments
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white">
                  <span className="text-sm font-medium"> Account </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <Link
                      to="/dashboard/add-blog"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      My Profile
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/add-blog"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Change Password
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/add-blog"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="size-10 rounded-full object-cover"
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideDashboard;
