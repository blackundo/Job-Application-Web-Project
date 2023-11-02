import Dashboard from "../../Components/PanelAdmin/Dashboard/Dashboard";

import { Outlet } from "react-router-dom";

function PanelAdminPage() {
  return (
    <>
      <div className="grid grid-cols-12 h-screen">
        <Dashboard />
        <div className="col-span-10  h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PanelAdminPage;
