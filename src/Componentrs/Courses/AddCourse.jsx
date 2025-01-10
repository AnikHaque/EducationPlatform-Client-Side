import { useState } from "react";
import { useCourses } from "../../Context/CourseContext";

const AddCoursePage = () => {
  const { addCourse } = useCourses();
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    category: "Development",
    lessons: 0,
    enroll: 0,
    date: "",
    rating: 5.0,
    reviews: 0,
    instructor: {
      name: "",
      avatar: "",
    },
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("instructor.")) {
      setFormData((prev) => ({
        ...prev,
        instructor: {
          ...prev.instructor,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse(formData);
    alert("Course Added!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
          className="input"
        />
        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
          className="input"
        />
        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
          className="input"
        />
        <input
          name="lessons"
          type="number"
          placeholder="Lessons"
          onChange={handleChange}
          className="input"
        />
        <input
          name="enroll"
          type="number"
          placeholder="Enroll Count"
          onChange={handleChange}
          className="input"
        />
        <input
          name="date"
          type="text"
          placeholder="Start Date"
          onChange={handleChange}
          className="input"
        />
        <input
          name="reviews"
          type="number"
          placeholder="Reviews Count"
          onChange={handleChange}
          className="input"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          className="input"
        />
        <input
          name="instructor.name"
          placeholder="Instructor Name"
          onChange={handleChange}
          className="input"
        />
        <input
          name="instructor.avatar"
          placeholder="Instructor Avatar URL"
          onChange={handleChange}
          className="input"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg w-full"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddCoursePage;
