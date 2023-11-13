import Degree from "../Components/Profile/Degree/Degree";
import Profile from "../Components/Profile/Profile";
import Information from "../Components/Profile/Edit/Information";
import JobDetailForMobile from "../Pages/FindJobPage/JobDetailForMobile";
import LoginAdminPage from "../Pages/LoginAdmin/LoginAdminPage";
import PanelAdminPage from "../Pages/PanelAdminPage/PanelAdminPage";
import ChartContent from "../Components/PanelAdmin/Content/ChartContent";
import CompanyManager from "../Components/PanelAdmin/CompanyManager/CompanyManager";
import DetailsCompany from "../Components/PanelAdmin/CompanyManager/Details/DetailsCompany";
import { Suspense, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";
import CandidateManager from "../Components/PanelAdmin/CandidateManager/CandidateManager";
// import { refreshAccessToken } from "./Utils/RefreshToken";
const Home = lazy(() => import("../Pages/Home/Home"));
const RolePage = lazy(() => import("../Pages/ChooseRole/RolePage"));
const Login = lazy(() => import("../Pages/Login/LoginPage"));
const Register = lazy(() => import("../Pages/Register/RegisterPage"));
const ForgotPassword = lazy(() =>
  import("../Pages/ForgotPassword/ForgotPassword")
);
const FindJobPage = lazy(() => import("../Pages/FindJobPage/FindJobPage"));
const ProfilePage = lazy(() => import("../Pages/ProfilePage/ProfilePage"));
const MessagePage = lazy(() => import("../Pages/MessagePage/MessagePage"));
const NotFoundPage = lazy(() => import("../Pages/ErrorPages/NotFoundPage"));
import { Route, Routes } from "react-router-dom";

import SpinnerFullPage from "../Components/SpinnerFullPage/SpinnerFullPage";

function RouterForCandidate() {
  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="chooseRole" element={<RolePage />} />
          <Route path="login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="forgotPass" element={<ForgotPassword />} />
          <Route path="findJobs" element={<FindJobPage />} />
          <Route path="findJobs/detailsMb" element={<JobDetailForMobile />} />
          <Route path="profileU" element={<ProfilePage />}>
            <Route index element={<Profile />} />
            <Route path="degree" element={<Degree />} />
            <Route path="editP" element={<Information />} />
          </Route>
          <Route path="Message/:id" element={<MessagePage />} />
          <Route path="login/Admin" element={<LoginAdminPage />} />
          <Route path="/admin" element={<PanelAdminPage />}>
            <Route index element={<ChartContent />} />
            <Route path="dashboard" element={<ChartContent />} />
            <Route path="companyManager" element={<CompanyManager />} />
            <Route path="candidateManager" element={<CandidateManager />} />
            <Route
              path="companyManager/details/:id"
              element={<DetailsCompany />}
            />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default RouterForCandidate;
