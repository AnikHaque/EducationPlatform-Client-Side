const AboutIntro = () => {
  return (
    <div>
      <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex items-center justify-center -mx-4 ">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover w-40 h-40 rounded-xl shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="https://themephi.net/template/eduan/eduan/assets/img/about/8/a-1.jpg"
                alt=""
              />
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-32 xl:h-60 rounded-xl sm:w-32 xl:w-96 mt-10"
                src="https://themephi.net/template/eduan/eduan/assets/img/about/8/a-2.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded-xl shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 "
                src="https://themephi.net/template/eduan/eduan/assets/img/about/8/a-2.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-xl lg:ml-20">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
            <div className="">
              <h1 className="text-[#f14d5d] font-bold">
                ALL THE BEST PLATFORM
              </h1>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-xl mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none lg:text-[45px]">
                A New Different Way To
                <br className="hidden md:block" />
                Improve Your Skills.
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Education is one of the most essential and valuable assets that
                an individual can possess, It plays a pivotal role in shaping.
              </p>
            </div>
            <div>
              <div className="">
                <div className="">
                  <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded-lg shadow-xl group hover:shadow-2xl">
                      <div className="p-5">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full">
                          <i className="fa-solid fa-chart-simple text-[#395bdf] text-4xl"></i>
                        </div>
                        <p className="mb-2 font-bold">Build Your Career</p>
                        <p className="text-sm leading-5 text-gray-900">
                          Online Course Quickly From Anywhere & anytime.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded-lg shadow-xl group hover:shadow-2xl">
                      <div className="p-5">
                        <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full">
                          <i className="fa-solid fa-certificate  text-[#395bdf] text-4xl"></i>
                        </div>
                        <p className="mb-2 font-bold">Grow Your Skills</p>
                        <p className="text-sm leading-5 text-gray-900">
                          Online Course Quickly From Anywhere & anytime.
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-active bg-[#395bdf] text-white pl-5 mt-4">
                        Explore More
                        <i className="fa-solid fa-arrow-right-long mt-1 pl-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
