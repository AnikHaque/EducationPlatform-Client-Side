import { useEffect, useState } from "react";
import axios from "axios";

const EnrollmentList = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/fullstacks");
        console.log(response.data.data);
        setEnrollments(response.data.data);
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
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
      <h1>All Courses</h1>
      <div className="">
        <br />
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th className="text-center font-extrabold">Name</th>
                <th className="text-center font-extrabold">Email</th>
                <th className="text-center font-extrabold">Phone</th>
                <th className="text-center font-extrabold">Image</th>
                <th className="text-center font-extrabold">Transaction Id</th>
                <th className="text-center font-extrabold">Status</th>
                <th className="text-center font-extrabold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment, index) => (
                <tr key={enrollment._id}>
                  <td>{index + 1}</td>
                  <td className="text-center">{enrollment.name}</td>
                  <td className="text-center">{enrollment.email}</td>

                  <td className="text-center">{enrollment.phone}</td>
                  <td>
                    <img
                      src={enrollment.image}
                      alt=""
                      className="profile-img1 max-w-10  rounded-md"
                    />
                  </td>
                  <td className="text-center">{enrollment.transactionId}</td>
                  <td className="text-center">{enrollment.status}</td>

                  <td>
                    <button className="mr-2 bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md">
                      Update
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

export default EnrollmentList;
