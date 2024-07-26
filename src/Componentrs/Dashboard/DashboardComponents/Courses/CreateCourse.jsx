// src/components/AddCourseForm.js
import { useState, useEffect } from "react";
import axios from "axios";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [shortDes, setShortDes] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState(false);
  const [discountPrice, setDiscountPrice] = useState("");
  const [image, setImage] = useState("");
  const [star, setStar] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/categories");
        setCategories(response.data.data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const courseData = {
      title,
      shortDes,
      price,
      discount,
      discountPrice: discount ? discountPrice : "0",
      image,
      star,
      categoryID,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/course",
        courseData
      );
      if (response.status === 201) {
        setMessage("Course added successfully!");
        // Reset form fields
        setTitle("");
        setShortDes("");
        setPrice("");
        setDiscount(false);
        setDiscountPrice("");
        setImage("");
        setStar("");
        setCategoryID("");
      }
    } catch (error) {
      setMessage("Failed to add course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" rounded-md w-full">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
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
            Price
          </label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="discount"
          >
            Discount
          </label>
          <input
            type="checkbox"
            id="discount"
            checked={discount}
            onChange={(e) => setDiscount(e.target.checked)}
            className="mr-2 leading-tight"
          />
        </div>
        {discount && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="discountPrice"
            >
              Discount Price
            </label>
            <input
              type="text"
              id="discountPrice"
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        )}
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
            Star Rating
          </label>
          <input
            type="text"
            step="0.1"
            id="star"
            value={star}
            onChange={(e) => setStar(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoryID"
          >
            Category
          </label>
          <select
            id="categoryID"
            value={categoryID}
            onChange={(e) => setCategoryID(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.categoryName}
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

export default AddCourse;
