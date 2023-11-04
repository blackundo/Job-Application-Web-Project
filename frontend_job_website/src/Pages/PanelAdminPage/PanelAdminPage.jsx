import { useState } from "react";
import Dashboard from "../../Components/PanelAdmin/Dashboard/Dashboard";
import styles from "./PanelAdminPage.module.css";
import { Outlet } from "react-router-dom";
import ListMenu from "../../Components/PanelAdmin/Dashboard/ListMenu/ListMenu";

function PanelAdminPage() {
  const [open, setOpen] = useState(true);
  const handleCloseDashboard = () => {
    setOpen((o) => !o);
  };
  return (
    <div className={`h-screen ${styles.grid} relative`}>
      <Dashboard handleCloseDashboard={handleCloseDashboard} open={open}>
        <ListMenu open={open} />
      </Dashboard>
      <div
        className={` ${
          !open ? "col-[span_14_/_span_14]" : "col-span-12"
        } max-sm:col-[span_14_/_span_14]`}
      >
        <div className="flex flex-col h-full">
          <div className="w-full bg-rose-400  h-12">header</div>
          <div className={` h-full`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PanelAdminPage;
