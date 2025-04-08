import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dummy data
  const dummyCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      image: "https://innovateintern.com/imageswebp/fswd-banner.webp",
    },
    {
      id: 2,
      title: "React for Beginners",
      image:
        "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
    },
    {
      id: 3,
      title: "Python Programming",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQEz9KSuvhncQA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1704352101828?e=2147483647&v=beta&t=AhAuVx6qViPYYTfzEnK7ANwrvrysKCSLuNLw3qoTaQs",
    },
  ];

  useEffect(() => {
    // Simulate API delay
    const timer = setTimeout(() => {
      setCourses(dummyCourses);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="max-w-lg mb-14 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none lg:text-5xl">
        Our Featured <span className="text-[#395bdf] font-bold">Courses</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            data-aos="zoom-in"
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="h-52 w-full"
                src={course.image}
                alt={course.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, culpa.
              </p>
              <div className="card-actions justify-start">
                <Link to="/full-stack-development">
                  <button className="btn bg-[#9f52f4] hover:bg-black text-white">
                    See More Details{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>

                <button className="btn bg-[#395bdf] hover:bg-black text-white">
                  10000 Taka Bdt
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
