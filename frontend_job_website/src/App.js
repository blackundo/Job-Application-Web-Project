import "./App.css";
import { BrowserRouter } from "react-router-dom";
import DefaultRouter from "./router/DefaultRouter";
import { LicenseInfo } from "@mui/x-license-pro";

LicenseInfo.setLicenseKey(
  "e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y"
);
function App() {
  return (
    <div className="h-screen overflow-x-hidden">
      <BrowserRouter>
        <DefaultRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
