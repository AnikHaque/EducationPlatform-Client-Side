import { useEffect, useState } from "react";
import axios from "axios";
import CourseModal from "./CourseModal";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleEdit = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/courses/${id}`);
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/courses/${selectedCourse._id}`,
        selectedCourse
      );
      setCourses(
        courses.map((course) =>
          course._id === selectedCourse._id ? selectedCourse : course
        )
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="w-full">
      <h1>All Courses</h1>
      <div className="">
        <br />
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th className="text-center font-extrabold">Course Title</th>
                <th className="text-center font-extrabold">Course Img</th>
                <th className="text-center font-extrabold">Category</th>
                <th className="text-center font-extrabold">Price</th>
                <th className="text-center font-extrabold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course._id}>
                  <td>{index + 1}</td>
                  <td>{course.title}</td>
                  <td>
                    <img
                      src={course.image}
                      alt=""
                      className="profile-img1 max-w-10 rounded-md"
                    />
                  </td>
                  <td>{course.categoryID.categoryName}</td>
                  <td>{course.price}</td>
                  <td>
                    <button
                      className="mr-2 bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md"
                      onClick={() => handleEdit(course)}
                    >
                      Edit
                    </button>
                    <button
                      className="mr-2 bg-red-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md"
                      onClick={() => handleDelete(course._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CourseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedCourse && (
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              <label>
                Title:
                <input
                  type="text"
                  value={selectedCourse.title}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      title: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </label>
              <label>
                Price:
                <input
                  type="number"
                  value={selectedCourse.price}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      price: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  value={selectedCourse.image}
                  onChange={(e) =>
                    setSelectedCourse({
                      ...selectedCourse,
                      image: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </label>
              {/* Add more fields as needed */}
              <div className="mt-4">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </CourseModal>
    </div>
  );
};

export default CourseList;
