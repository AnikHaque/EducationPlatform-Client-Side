import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditEnrollment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [enrollment, setEnrollment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnrollment = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/fullstack/${id}`
        );
        setEnrollment(response.data.data);
      } catch (error) {
        console.error("Error fetching enrollment:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrollment();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnrollment({ ...enrollment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/fullstack/${id}`, enrollment);
      history.push("/");
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (!enrollment) {
    return <div className="text-center text-lg">Enrollment not found</div>;
  }

  return (
    <div>
      <h1>Edit Enrollment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="name"
            value={enrollment.name || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={enrollment.email || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={enrollment.phone || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Transaction Id:
          <input
            type="text"
            name="phone"
            value={enrollment.transactionId || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={enrollment.status || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={enrollment.image || ""}
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

export default EditEnrollment;
