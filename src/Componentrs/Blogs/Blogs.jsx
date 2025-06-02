import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Getting Started with React",
    date: "June 1, 2025",
    excerpt:
      "Learn how to set up a React project and understand the core concepts of components, props, and state.",
    category: "React",
    image:
      "https://miro.medium.com/v2/resize:fit:600/1*2s1wDawTeYaGohs6zlHq4A.png",
  },
  {
    id: 2,
    title: "Tailwind CSS Tips for Faster Styling",
    date: "May 28, 2025",
    excerpt:
      "Boost your productivity with these handy Tailwind CSS techniques and best practices.",
    category: "Tailwind",
    image:
      "https://wpdean.com/wp-content/uploads/2024/05/how-to-use-tailwind.jpg",
  },
  {
    id: 3,
    title: "State Management in React",
    date: "May 20, 2025",
    excerpt:
      "Explore various state management approaches in React including useState, useReducer, and Context API.",
    category: "React",
    image:
      "https://blog.openreplay.com/images/react-state-management-with-easy-peasy/images/hero.png",
  },
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2;

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1); // reset to page 1 when category changes
  };

  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our <span className="text-blue-600">Blog</span>
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{blog.date}</p>
              <p className="text-gray-700">{blog.excerpt}</p>
              <button className="mt-4 inline-block text-blue-600 hover:underline font-medium">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          No blog posts found for this category.
        </p>
      )}

      {/* Pagination */}
      {filteredBlogs.length > blogsPerPage && (
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                }`}
              >
                {page}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
