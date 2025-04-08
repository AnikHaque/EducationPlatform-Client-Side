const Career = () => {
  return (
    <div className="bg-[#0b033c]">
      <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <p className="text-center text-2xl text-white font-bold">
          Choose Your Career
        </p>
        <h1 className="text-center text-5xl font-bold text-white">
          CHOOSE YOUR <span className="font-bold">CAREER</span>
        </h1>
        <div className="grid grid-cols-2 gap-10 mt-14">
          <div
            data-aos="fade-right"
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="pl-5"
                src="https://themephi.net/template/eduan/eduan/assets/img/career/1.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <p className="text-[#395bdf] font-bold text-lg">
                Build Your Career
              </p>
              <h2 className="card-title">
                Join Our UI/UX Design Course & Build Your Skill.
              </h2>

              <div className="card-actions justify-end">
                <button className="btn bg-[#9f52f4] hover:bg-black text-white">
                  Join Now <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="pl-5"
                src="https://themephi.net/template/eduan/eduan/assets/img/career/2.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <p className="text-[#395bdf] font-bold text-lg">
                Start From Today
              </p>
              <h2 className="card-title">
                Join Our Web Developemnt Course & Build Your Skill.
              </h2>

              <div className="card-actions justify-end">
                <button className="btn bg-[#9f52f4] hover:bg-black text-white">
                  Join Now <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
