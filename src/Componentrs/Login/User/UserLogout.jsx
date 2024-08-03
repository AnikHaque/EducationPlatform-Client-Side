import { useNavigate } from "react-router-dom";
import axios from "axios";

const LogoutButton = () => {
 
  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
