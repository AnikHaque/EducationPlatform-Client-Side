import React, { useEffect, useState } from "react";
import axios from "axios";

const UserEnrollments = ({ userId }) => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const fetchUserEnrollments = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/enrollments/user/${userId}`
        );
        setEnrollments(response.data.data);
      } catch (error) {
        console.error("Error fetching user enrollments", error);
      }
    };

    fetchUserEnrollments();
  }, [userId]);

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl mb-4">User Enrollments</h2>
      <ul className="space-y-2">
        {enrollments.map((enrollment) => (
          <li
            key={enrollment._id}
            className="p-4 border border-gray-300 rounded"
          >
            <p>
              <strong>Name:</strong> {enrollment.name}
            </p>
            <p>
              <strong>Email:</strong> {enrollment.email}
            </p>
            <p>
              <strong>Address:</strong> {enrollment.address}
            </p>
            <p>
              <strong>Phone:</strong> {enrollment.phone}
            </p>
            <p>
              <strong>Transaction ID:</strong> {enrollment.transaction_id}
            </p>
            <p>
              <strong>Status:</strong> {enrollment.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserEnrollments;
