const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#ffffff] lg:py-4">
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img
              className="max-w-32"
              src="https://www.codeinnovior.com/assets/images/Logo-6-inch%20(1).png"
            ></img>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="">Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Courses</a>
            </li>
            <li>
              <details>
                <summary>Pages</summary>
                <ul className="p-2 min-w-40">
                  <li>
                    <a>Our Events </a>
                  </li>
                  <li>
                    <a>Gallary</a>
                  </li>
                  <li>
                    <a>Success Story</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#395bdf] text-white me-1">
            Login/Signup <i className="fa-solid fa-right-to-bracket"></i>
          </a>
          <a className="btn bg-black text-white">
            <i className="fa-solid fa-child"></i> Kids Program
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
