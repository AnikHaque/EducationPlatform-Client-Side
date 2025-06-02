import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Simulate API or pass this data via context/global state in future
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

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const found = dummyCourses.find((c) => c.id === parseInt(id));
    setCourse(found);
  }, [id]);

  if (!course) {
    return <div className="text-center text-xl py-10">Course not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {course.title}
          </h1>
          <p className="text-sm text-gray-500 mb-4">
            Category: {course.category}
          </p>
          <p className="text-gray-700 text-lg mb-6">{course.description}</p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-xl font-semibold text-[#395bdf]">
                {course.price} BDT
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Duration</p>
              <p className="text-xl font-semibold">{course.duration}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <p className="text-sm text-gray-500">Level</p>
              <p className="text-xl font-semibold">{course.level}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="btn bg-[#395bdf] hover:bg-black text-white">
              Enroll Now <i className="fa-solid fa-arrow-right-long ml-2"></i>
            </button>
            <Link
              to="/"
              className="btn border border-gray-400 hover:bg-gray-100"
            >
              Back to Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
