import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/courses/${id}`);
        setCourse(response.data.data);
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/courses/${id}`, course);
      history.push("/");
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (!course) {
    return <div className="text-center text-lg">Course not found</div>;
  }

  return (
    <div>
      <h1>Edit Course</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={course.title || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={course.price || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={course.image || ""}
            onChange={handleChange}
          />
        </label>
        {/* Add more fields as needed */}
        <button
          type="submit"
          className="bg-green-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md"
        >
          Save
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditCourse;
