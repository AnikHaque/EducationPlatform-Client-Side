import { useState } from "react";
import axios from "axios";
import "../../../../Styles/Category/AddCategory.css";

const AddBlogCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/blogcategory", {
        categoryName: categoryName,
      });
      if (response.status === 201) {
        alert("Category added successfully!");
        setCategoryName("");
      }
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Failed to add category. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="form">
        <h2>Add Blog Category</h2>
        <input
          type="text"
          value={categoryName}
          onChange={handleNameChange}
          placeholder="Enter category name"
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

export default AddBlogCategory;
