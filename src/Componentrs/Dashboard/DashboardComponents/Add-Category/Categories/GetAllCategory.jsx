import { useEffect, useState } from "react";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/categories");
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className=" p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.id} className="p-4 border rounded shadow">
            <img
              src={category.categoryImg}
              alt={category.categoryName}
              className="w-full h-32 object-cover mb-2"
            />
            <h3 className="text-xl font-semibold">{category.categoryName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
