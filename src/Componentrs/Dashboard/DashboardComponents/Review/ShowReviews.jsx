import { useEffect, useState } from "react";
import axios from "axios";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReviews, setSelectedReviews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/reviews");
        console.log(response.data.data);
        setReviews(response.data.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleEdit = (enrollment) => {
    setSelectedEnrollment(enrollment);
    setIsModalOpen(true);
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/fullstack/${id}`);
  //     setCourses(courses.filter((course) => course._id !== id));
  //   } catch (error) {
  //     console.error("Error deleting course:", error);
  //   }
  // };

  //   const handleSave = async () => {
  //     try {
  //       await axios.put(
  //         `http://localhost:5000/fullstack/${selectedEnrollmewnt._id}`,
  //         selectedEnrollmewnt
  //       );
  //       setEnrollments(
  //         enrollments.map((enrollment) =>
  //           enrollment._id === selectedEnrollmewnt._id
  //             ? selectedEnrollmewnt
  //             : enrollment
  //         )
  //       );
  //       setIsModalOpen(false);
  //     } catch (error) {
  //       console.error("Error updating enrollment:", error);
  //     }
  //   };

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
      <h1 className="font-bold text-4xl mt-4 mb-10">All Reviews List</h1>
      <div className="">
        <br />
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>#</th>
                <th className="text-center font-extrabold">Name</th>
                <th className="text-center font-extrabold">Image</th>
                <th className="text-center font-extrabold">Review</th>
                <th className="text-center font-extrabold">Designation</th>
                <th className="text-center font-extrabold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={review._id}>
                  <td>{index + 1}</td>
                  <td className="text-center">{review.name}</td>
                  <td className="text-center">
                    <img
                      className="max-w-10 rounded-md"
                      src={review.image}
                    ></img>
                  </td>

                  <td className="text-center">{review.description}</td>
                  <td className="text-center">{review.designation}</td>

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

export default ReviewsList;
