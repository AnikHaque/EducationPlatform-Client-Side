import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../Utility/LoadingSpinner";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 3;

  const categories = [
    "All",
    "Design",
    "Development",
    "Business & Marketing",
    "Data Science",
  ];

  const dummyCourses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      image: "https://innovateintern.com/imageswebp/fswd-banner.webp",
      category: "Development",
    },
    {
      id: 2,
      title: "React for Beginners",
      image:
        "https://lh7-us.googleusercontent.com/D6BrXu23nOJepuMbM-ZSNza1nfl8qLh1PtaGzyYUebo6llBebhDTSKODso4N6JZsFMXuwxSRga2pIqidn6rPkjHJTNd7opp-5HYY87OOFXqiC0nGCcHHenuytpXoG5u4jHzD4MVPdfgW0QvUijKh5q8",
      category: "Development",
    },
    {
      id: 3,
      title: "Python Programming",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQEz9KSuvhncQA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1704352101828?e=2147483647&v=beta&t=AhAuVx6qViPYYTfzEnK7ANwrvrysKCSLuNLw3qoTaQs",
      category: "Data Science",
    },
    {
      id: 4,
      title: "UI/UX Design Essentials",
      image:
        "https://amadine.com/assets/img/articles/ux-vs-ui/ux-vs-ui-design@2x.png",
      category: "Design",
    },
    {
      id: 5,
      title: "Marketing Fundamentals",
      image: "https://www.pngmart.com/files/7/Digital-Marketing-PNG-Pic.png",
      category: "Business & Marketing",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCourses(dummyCourses);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const paginatedCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  // Reset to first page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="text-center text-lg">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="max-w-lg mb-14 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none lg:text-5xl">
        All <span className="text-[#395bdf] font-bold">Courses</span>
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border ${
              selectedCategory === cat
                ? "bg-[#395bdf] text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginatedCourses.map((course) => (
          <div
            key={course.id}
            data-aos="zoom-in"
            className="card card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="h-52 w-full object-cover"
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
                <Link to={`/courses/${course.id}`}>
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

      {/* No Course Message */}
      {filteredCourses.length === 0 && (
        <p className="mt-10 text-gray-500 text-center">No courses found.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded border ${
                currentPage === index + 1
                  ? "bg-[#395bdf] text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCourses;
