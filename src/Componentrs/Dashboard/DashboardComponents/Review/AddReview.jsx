// src/components/AddCourseForm.js
import { useState } from "react";
import axios from "axios";

const AddReview = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [designation, setDesignation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const reviewData = {
      name,
      description,
      designation,
      image,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/review",
        reviewData
      );
      if (response.status === 201) {
        setMessage("Review successful!");
        // Reset form fields
        setName("");
        setDesignation("");
        setDescription("");
        setImage("");
      }
    } catch (error) {
      setMessage("Failed to add Enrollment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-center font-bold text-4xl mt-4 mb-8">
        Please Add Your Valuable Review
      </h1>
      <div className=" rounded-md w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Your Name
            </label>
            <input
              type="text"
              id="title"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Your Image
            </label>
            <input
              type="text"
              id="title"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Your Review
            </label>
            <input
              type="text"
              id="price"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="price"
            >
              Your Designation
            </label>
            <input
              type="text"
              id="price"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#08979D] to-[#9AE1E2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-green-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default AddReview;
