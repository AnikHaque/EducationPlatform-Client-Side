import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/courses");
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="max-w-lg mb-14 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none lg:text-5xl">
        Our Featured <span className="text-[#395bdf] font-bold">Courses</span>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            data-aos="zoom-in"
            className="card card-compact bg-base-100 lg:max-w-lg "
          >
            <figure>
              <img src={course.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, culpa.
              </p>
              <div className="card-actions justify-start">
                <Link to="/full-stack-development">
                  <button className="btn btn-primary text-white">
                    See More Details{" "}
                    <i className="fa-solid fa-arrow-right-long"></i>
                  </button>
                </Link>

                <button className="btn btn-primary text-white">
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
