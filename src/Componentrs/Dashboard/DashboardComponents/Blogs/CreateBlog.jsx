// src/components/AddCourseForm.js
import { useState, useEffect } from "react";
import axios from "axios";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [shortDes, setShortDes] = useState("");
  const [authorname, setAuthorName] = useState("");
  const [authorimage, setAuthorImage] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");
  const [blogcategoryID, setBlogCategoryID] = useState("");
  const [blogcategories, setBlogCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/blogcategories"
        );
        setBlogCategories(response.data.data);
      } catch (error) {
        console.error("Failed to fetch Blog categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const blogData = {
      title,
      shortDes,
      authorname,
      authorimage,
      time,
      image,
      blogcategoryID,
    };

    try {
      const response = await axios.post("http://localhost:5000/blog", blogData);
      if (response.status === 201) {
        setMessage("Blog added successfully!");
        // Reset form fields
        setTitle("");
        setShortDes("");
        setAuthorName("");
        setAuthorImage("");
        setTime("");
        setImage("");
        setBlogCategoryID("");
      }
    } catch (error) {
      setMessage("Failed to add Blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" rounded-md w-full">
      <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="shortDes"
          >
            Short Description
          </label>
          <textarea
            id="shortDes"
            value={shortDes}
            onChange={(e) => setShortDes(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Author Name
          </label>
          <input
            type="text"
            id="price"
            value={authorname}
            onChange={(e) => setAuthorName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="star"
          >
            Author Photo
          </label>
          <input
            type="text"
            step="0.1"
            id="star"
            value={authorimage}
            onChange={(e) => setAuthorImage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="star"
          >
            Set Time
          </label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryID"
          >
            Blog Category
          </label>
          <select
            id="categoryID"
            value={blogcategoryID}
            onChange={(e) => setBlogCategoryID(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Category</option>
            {blogcategories.map((blog) => (
              <option key={blog._id} value={blog._id}>
                {blog.categoryName}
              </option>
            ))}
          </select>
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

export default AddBlog;
