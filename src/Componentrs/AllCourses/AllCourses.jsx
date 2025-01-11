import { useState } from "react";
import Reviews from "../Reviews/Reviews";
import { useCourses } from "../../Context/CourseContext";

const categories = [
  "All Courses",
  "UX/UI Design",
  "Web Development",
  "Sales Marketing",
  "Data Science",
  "Life Style",
  "Photography",
];

const AllCoursesPage = () => {
  const { courses } = useCourses();
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  const filteredCourses =
    selectedCategory === "All Courses"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-2">Courses</h1>
        <p className="text-sm text-gray-600">Home &gt; Courses</p>
      </div>

      {/* Categories */}
      <div className="text-center mt-10">
        <h2 className="text-3xl font-bold mb-6">Explore Our Courses</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full border font-semibold text-sm transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-purple-50"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {filteredCourses.length === 0 ? (
          <p className="text-center col-span-3 text-gray-500">
            No courses available in this category.
          </p>
        ) : (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center text-sm text-yellow-500 mb-2">
                  <span>{course.rating?.toFixed(1)}</span>
                  <span className="mx-1">★</span>
                  <span>({course.reviews})</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Enroll: {course.enroll} • {course.lessons} Lessons • Start:{" "}
                  {course.date}
                </p>
                <div className="flex items-center mb-4">
                  <img
                    src={course.instructor?.avatar}
                    alt={course.instructor?.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm font-medium">
                    {course.instructor?.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-purple-600">
                    ${parseFloat(course.price).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Reviews & Footer */}
      <div className="mt-20 bg-purple-100 text-center py-10">
        <h2 className="text-2xl font-bold">Feedback From Students</h2>
        <Reviews />
      </div>

      <div className="bg-purple-800 text-white py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Subscribe For Get Update
        </h2>
        <p className="mb-6">
          30k+ students daily learn with Edugo. Subscribe for new courses.
        </p>
        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-full text-black"
          />
          <button className="px-4 py-2 bg-pink-500 rounded-r-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCoursesPage;
