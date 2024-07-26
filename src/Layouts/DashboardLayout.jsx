import { Outlet } from "react-router-dom";
import SideDashboard from "../Componentrs/Dashboard/SideDashboard";

const DashboardLayout = () => {
  return (
    <div>
      <div className="flex">
        <SideDashboard></SideDashboard>
        <div className="main-content container mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
