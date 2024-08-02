import { useEffect, useState } from "react";
import axios from "axios";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs");
        setBlogs(response.data.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  //   const handleEdit = (course) => {
  //     setSelectedCourse(course);
  //     setIsModalOpen(true);
  //   };

  //   const handleDelete = async (id) => {
  //     try {
  //       await axios.delete(`http://localhost:5000/courses/${id}`);
  //       setCourses(courses.filter((course) => course._id !== id));
  //     } catch (error) {
  //       console.error("Error deleting course:", error);
  //     }
  //   };

  //   const handleSave = async () => {
  //     try {
  //       await axios.put(
  //         `http://localhost:5000/courses/${selectedCourse._id}`,
  //         selectedCourse
  //       );
  //       setCourses(
  //         courses.map((course) =>
  //           course._id === selectedCourse._id ? selectedCourse : course
  //         )
  //       );
  //       setIsModalOpen(false);
  //     } catch (error) {
  //       console.error("Error updating course:", error);
  //     }
  //   };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="w-full">
      <h1>All Blogs</h1>
      <div className="">
        <br />
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th className=" font-extrabold">Blog Title</th>
                <th className="font-extrabold">Blog Image</th>
                <th className="font-extrabold">Author Name</th>
                <th className="font-extrabold">Author Image</th>
                <th className="font-extrabold">Publlish Time</th>
                <th className=" font-extrabold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog._id}>
                  <td>{index + 1}</td>
                  <td>{blog.title}</td>
                  <td>
                    <img
                      src={blog.image}
                      alt=""
                      className="profile-img1 max-w-10 rounded-md"
                    />
                  </td>
                  <td>{blog.authorname}</td>
                  <td>
                    <img
                      src={blog.authorimage}
                      alt=""
                      className="profile-img1 max-w-10 rounded-md"
                    />
                  </td>
                  <td>{blog.time}</td>
                  <td>
                    <button className="mr-2 bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md">
                      Edit
                    </button>
                    <button className="mr-2 bg-red-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
