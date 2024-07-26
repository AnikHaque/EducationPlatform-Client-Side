import { useEffect, useState } from "react";
import axios from "axios";

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/courses");
        setCourses(response.data.data);
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
    <div className=" ">
      <h1>All Courses</h1>
      <div className="">
        <br></br>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                {/* <th>Image</th> */}
                <th className="text-center font-extrabold">Course Title</th>
                <th className="text-center font-extrabold">Course Img</th>
                <th className="text-center font-extrabold">Category</th>
                <th className="text-center font-extrabold">Price</th>
                <th className="text-center font-extrabold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <th>1</th>
                  {/* <td>{bookedItem.img}</td> */}
                  <td>{course.title}</td>
                  <td>
                    <img
                      src={course.image}
                      alt=""
                      className="profile-img1 max-w-10 rounded-md"
                    />
                  </td>
                  <td>{course.categoryID.categoryName}</td>
                  <td>{course.price}</td>

                  <td>
                    <button className="mr-2 bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                      Edit{" "}
                    </button>
                    <button className="mr-2 bg-red-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                      Delete
                    </button>
                    <button className=" bg-pink-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md ">
                      View
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

export default CourseList;
