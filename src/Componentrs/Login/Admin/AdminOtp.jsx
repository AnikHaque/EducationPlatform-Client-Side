import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminOtp.css";

const AdminOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "";
  const [formData, setFormData] = useState({
    otp: ["", "", "", "", "", ""],
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const updatedOtp = [...formData.otp];
    updatedOtp[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      otp: updatedOtp,
    }));
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const otp = formData.otp.join("");
      const verifyResult = await axios.post(
        "http://localhost:5000/verifyOtpAdmin",
        {
          email,
          otp,
        }
      );
      if (verifyResult.data.status === "success") {
        navigate("/");
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="otp-container mt-10 mb-10">
      <h2 className="font-bold text-4xl">OTP Verification</h2>
      <form onSubmit={handleVerifyOTP}>
        <div className="otp-input-container text-4xl">
          {formData.otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleInputChange(e, index)}
              className="otp-input ml-2"
              required
            />
          ))}
        </div>
        <button type="submit" className="verify-btn">
          Verify OTP
        </button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
};

export default AdminOtp;
