// Router Import
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#0b033c] text-white font-semibold lg:py-4">
        <div className="navbar-start flex justify-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link>Item 1</Link>
              </li>
              <li>
                <Link>Parent</Link>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <img
              className="max-w-32"
              src="https://asset.uibucket.net/html/ilearning/assets/images/icons/logo.svg"
            ></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link>Courses</Link>
            </li>
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2 min-w-40">
                  <li>
                    <Link>Our Events </Link>
                  </li>
                  <li>
                    <Link>Gallary</Link>
                  </li>
                  <li>
                    <Link>Success Story</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="login"
            className="btn bg-[#9f52f4] hover:bg-black text-white me-1"
          >
            Login/Signup <i className="fa-solid fa-right-to-bracket"></i>
          </Link>
          <Link
            to="/kids-program"
            className="btn bg-black hover:bg-black text-white"
          >
            <i className="fa-solid fa-child"></i> Kids Program
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
