import { Outlet } from "react-router-dom";
import SideDashboard from "../Componentrs/Dashboard/SideDashboard";

const DashboardLayout = () => {
  return (
    <div>
      <div className="dashboard-layout">
        <SideDashboard></SideDashboard>
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
