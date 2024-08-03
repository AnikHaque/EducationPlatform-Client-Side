import { useEffect, useState } from "react";
import axios from "axios";
import EnrollmentModal from "./EnrollmentModal";

const EnrollmentList = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnrollment, setSelectedEnrollment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEnrollments = async () => {
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

    fetchEnrollments();
  }, []);

  const handleEdit = (enrollment) => {
    setSelectedEnrollment(enrollment);
    setIsModalOpen(true);
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/fullstack/${id}`);
  //     setEnrollments(enrollments.filter((enrollment) => enrollment._id !== id));
  //   } catch (error) {
  //     console.error("Error deleting enrollment:", error);
  //   }
  // };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/fullstack/${selectedEnrollment._id}`,
        selectedEnrollment
      );
      setEnrollments(
        enrollments.map((enrollment) =>
          enrollment._id === selectedEnrollment._id
            ? selectedEnrollment
            : enrollment
        )
      );
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating enrollment:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className="w-full">
      <h1>All Enrollments</h1>
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
                      className="profile-img1 max-w-10 rounded-md"
                    />
                  </td>
                  <td className="text-center">{enrollment.transactionId}</td>
                  <td className="text-center">{enrollment.status}</td>
                  <td>
                    <button
                      className="mr-2 bg-blue-500 text-white pl-4 pr-4 pt-1 pb-1 rounded-md"
                      onClick={() => handleEdit(enrollment)}
                    >
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

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        {selectedEnrollment && (
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
            >
              <label>
                Name:
                <input
                  type="text"
                  value={selectedEnrollment.name}
                  onChange={(e) =>
                    setSelectedEnrollment({
                      ...selectedEnrollment,
                      name: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  value={selectedEnrollment.email}
                  onChange={(e) =>
                    setSelectedEnrollment({
                      ...selectedEnrollment,
                      email: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  value={selectedEnrollment.phone}
                  onChange={(e) =>
                    setSelectedEnrollment({
                      ...selectedEnrollment,
                      phone: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  value={selectedEnrollment.image}
                  onChange={(e) =>
                    setSelectedEnrollment({
                      ...selectedEnrollment,
                      image: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </label>
              <label>
                Transaction Id:
                <input
                  type="text"
                  value={selectedEnrollment.transactionId}
                  onChange={(e) =>
                    setSelectedEnrollment({
                      ...selectedEnrollment,
                      transactionId: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </label>
              <label>
                Status ( pending / clear ):
                <input
                  type="text"
                  value={selectedEnrollment.status}
                  onChange={(e) =>
                    setSelectedEnrollment({
                      ...selectedEnrollment,
                      status: e.target.value,
                    })
                  }
                  className="input input-bordered w-full"
                />
              </label>
              {/* Add more fields as needed */}
              <div className="mt-4">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-secondary ml-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </EnrollmentModal>
    </div>
  );
};

export default EnrollmentList;
