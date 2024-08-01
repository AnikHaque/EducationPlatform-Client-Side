// src/components/AddCourseForm.js
import { useState, useEffect } from "react";
import axios from "axios";
import { decodeToken } from "../../../../Utility/Token";

const AddEnrollment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [courseID, setCourseID] = useState("");
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Decode token to retrieve user information
  const userInfo = decodeToken();
  console.log(userInfo);

  // Extract user ID from user information
  const userEmail = userInfo ? userInfo.email : "";
  console.log(userEmail);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const enrollmentData = {
      name,
      email,
      phone,
      transactionId,
      image,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/fullstack",
        enrollmentData
      );
      if (response.status === 201) {
        setMessage("Enrollment successful!");
        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setImage("");
        setTransactionId("");
      }
    } catch (error) {
      setMessage("Failed to add Enrollment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
            Your Enail (Type {userEmail})
          </label>
          <input
            type="text"
            id="title"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Your Mobile Number
          </label>
          <input
            type="text"
            id="price"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Your Image
          </label>
          <input
            type="text"
            id="price"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Transaction ID
          </label>
          <input
            type="text"
            id="image"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-500">{message}</p>}
    </div>
  );
};

export default AddEnrollment;
