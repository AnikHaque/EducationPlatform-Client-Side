import { Link } from "react-router-dom";

const LoginFirstPage = () => {
  return (
    <div>
      <div className="">
        <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between overflow-hidden bg-pink-400 rounded  group hover:shadow-2xl">
              <div className="p-5">
                <Link to="/user-login">
                  <p className="mb-2 font-bold text-center text-white text-6xl">
                    USER
                  </p>
                </Link>

                {/* <p className="text-sm leading-5 text-gray-900">
                  Don't have Account?{" "}
                  <Link className="text-blue-400">Registration Here</Link>
                </p> */}
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden  bg-orange-500 rounded  group hover:shadow-2xl">
              <div className="p-5">
                <p className="mb-2 font-bold text-center text-white text-6xl">
                  Teacher
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden  bg-purple-500 rounded group hover:shadow-2xl">
              <div className="p-5">
                <p className="mb-2 font-bold text-center text-white text-6xl">
                  ADMIN
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
            <div className="flex flex-col justify-between overflow-hidden  bg-green-500 rounded  group hover:shadow-2xl">
              <div className="p-5">
                <p className="mb-2 font-bold text-center text-white text-6xl">
                  OTHER
                </p>
              </div>
              <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFirstPage;
