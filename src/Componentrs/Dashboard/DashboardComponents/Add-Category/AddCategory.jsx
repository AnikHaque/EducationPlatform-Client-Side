import { useState } from "react";
import axios from "axios";
import "../../../../Styles/Category/AddCategory.css";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryImg, setCategoryImg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleImgChange = (e) => {
    setCategoryImg(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/category", {
        categoryName: categoryName,
        categoryImg: categoryImg,
      });
      if (response.status === 201) {
        alert("Category added successfully!");
        setCategoryName("");
        setCategoryImg("");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Failed to add category. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Add Category</h2>
        <input
          type="text"
          value={categoryName}
          onChange={handleNameChange}
          placeholder="Enter category name"
          className="input"
          disabled={loading}
        />
        <input
          type="text"
          value={categoryImg}
          onChange={handleImgChange}
          placeholder="Enter category image URL"
          className="input"
          disabled={loading}
        />
        <button type="submit" className="button" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
