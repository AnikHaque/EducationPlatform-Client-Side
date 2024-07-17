const Hero = () => {
  return (
    <div className="bg-[#f4f7ff]">
      <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"
          >
            <div className="">
              <h1 className="text-[#f14d5d] font-bold">
                ALL THE BEST PLATFORM
              </h1>
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none lg:text-5xl">
                Best Online <span className="text-[#395bdf]">Courses &</span>
                <br className="hidden md:block" />
                <span className="text-[#395bdf]">Upgrade</span> Your Skills
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Choose from 85,000 online video courses additions published
                Every month & upgrade your skills. Get started with us.
              </p>
            </div>
            <div>
              <div>
                <button className="btn btn-active bg-[#395bdf] text-white pl-5">
                  Explore All Courses{" "}
                  <i className="fa-solid fa-arrow-right-long mt-1 pl-1"></i>
                </button>
                <button className="btn btn-outline text-black ml-2">
                  <i className="fa-solid fa-play text-[#f14d5d]"></i> Watch Our
                  Video
                </button>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex items-center justify-center -mx-4 lg:pl-8"
          >
            <div className="px-3">
              <img
                className="object-cover w-full rounded "
                src="https://themephi.net/template/eduan/eduan/assets/img/banner/8/1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
