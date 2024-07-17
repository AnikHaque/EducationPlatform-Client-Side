const FeaturedCourses = () => {
  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none lg:text-5xl">
        Our Featured{" "}
        <span className="text-[#395bdf] font-extrabold">Courses</span>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div
          data-aos="zoom-in"
          className="card card-compact bg-base-100 lg:max-w-lg "
        >
          <figure>
            <img
              src="https://cdn.sanity.io/images/tlr8oxjg/production/cbce8b3ffe9e0b82f5d710b56ed210546228c415-1232x690.png?w=3840&q=80&fit=clip&auto=format"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Full Stack Web Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              culpa.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">
                See More Details{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="card card-compact bg-base-100 lg:max-w-lg "
        >
          <figure>
            <img
              src="https://dianapps.com/blog/wp-content/uploads/2023/03/Mobile-App-Development-Company.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mobile App Development with Flutter</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              illum?
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">
                See More Details{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="card card-compact bg-base-100 lg:max-w-lg "
        >
          <figure>
            <img
              src="https://cdn.sanity.io/images/tlr8oxjg/production/5ff5d5ece10bed416bef03604a02a5224b30cd82-1456x816.png?w=3840&q=80&fit=clip&auto=format"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              UI/UX Mastery with Figma, Photoshop & Illustrator{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              autem.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">
                See More Details{" "}
                <i className="fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
