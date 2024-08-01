import { useEffect, useState } from "react";
import axios from "axios";
import { decodeToken } from "../../../../Utility/Token";
// Replace with your actual path

const MyEnrollment = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Decode the token and get the email
    const userInfo = decodeToken();
    const email = userInfo ? userInfo.email : "";
    setUserEmail(email);
  }, []);

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (userEmail) {
        try {
          const response = await axios.get(
            `http://localhost:5000/fullstack/${userEmail}`
          );
          setEnrollments(response.data.data); // Assuming the data structure returned by your API
          setError("");
        } catch (err) {
          setError("Error fetching enrollments");
          setEnrollments([]);
        }
      }
    };

    fetchEnrollments();
  }, [userEmail]);

  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-4">My Enrollments</h1>

      {error && <div className="text-red-500 mt-4">{error}</div>}

      <div className="mt-4">
        {enrollments.length > 0 ? (
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Transaction ID</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Course ID</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => (
                <tr key={enrollment._id}>
                  <td className="border px-4 py-2">{enrollment.name}</td>
                  <td className="border px-4 py-2">{enrollment.email}</td>
                  <td className="border px-4 py-2">{enrollment.phone}</td>
                  <td className="border px-4 py-2">
                    {enrollment.transactionId}
                  </td>
                  <td className="border px-4 py-2">{enrollment.status}</td>
                  <td className="border px-4 py-2">{enrollment.courseID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div>No enrollments found</div>
        )}
      </div>
    </div>
  );
};

export default MyEnrollment;
