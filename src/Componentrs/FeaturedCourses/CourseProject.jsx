const CourseProject = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
          <p className="mb-1 text-xs lg:text-3xl font-bold tracking-wide uppercase md:mb-2">
            Full Stack Projects
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded lg:h-80 xl:h-96"
              src="https://images-platform.99static.com//5UA6GKOzTRFCSKT2-l72ukVdJxk=/0x0:1920x1920/fit-in/500x500/99designs-contests-attachments/94/94690/attachment_94690232"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Tour & Travel Agency
            </h5>
            <p className="text-gray-700">
              O for awesome, this chocka full cuzzie is as rip-off as a cracker.
              Meanwhile, in behind the bicycle shed, Hercules Morse.
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded  lg:h-80 xl:h-96"
              src="https://themefisher.com/blog/flipmart.webp"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Ecommerce Application
            </h5>
            <p className="text-gray-700">
              I'll be sure to note that in my log. Smooth as an android's
              bottom, eh, Data? When has justice ever been as simple as a rule
              book?
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-64 mb-6 rounded lg:h-80 xl:h-96"
              src="https://themefisher.com/blog/simply.webp"
              alt=""
            />
            <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
              Real State Application
            </h5>
            <p className="text-gray-700">
              Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              suscipit leo. Carpe diem vulputate est nec commodo rutrum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProject;
