import Degree from "../Components/Profile/Degree/Degree";
import Profile from "../Components/Profile/Profile";
import Information from "../Components/Profile/Edit/Information";
import JobDetailForMobile from "../Pages/FindJobPage/JobDetailForMobile";
import LoginAdminPage from "../Pages/LoginAdmin/LoginAdminPage";
import PanelAdminPage from "../Pages/PanelAdminPage/PanelAdminPage";
import ChartContent from "../Components/PanelAdmin/Content/ChartContent";
import CompanyManager from "../Components/PanelAdmin/CompanyManager/CompanyManager";
import DetailsCompany from "../Components/PanelAdmin/CompanyManager/Details/DetailsCompany";
import { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import CandidateManager from "../Components/PanelAdmin/CandidateManager/CandidateManager";
import Home from "../Pages/Home/Home";
import RolePage from "../Pages/ChooseRole/RolePage";
import Login from "../Pages/Login/LoginPage";
import Register from "../Pages/Register/RegisterPage";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import MessagePage from "../Pages/MessagePage/MessagePage";
import NotFoundPage from "../Pages/ErrorPages/NotFoundPage";
import FindJobPage from "../Pages/FindJobPage/FindJobPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import SpinnerFullPage from "../Components/SpinnerFullPage/SpinnerFullPage";
import RouterRole from "./RouterRole";
import CompanyPages from "../Pages/CompanyPages/CompanyPages";
import Jobs from "../Components/CompanyView/Content/Jobs";
import Candidate from "../Components/CompanyView/Content/Candidate";
import Interview from "../Components/CompanyView/Content/Interview";
import PostJobs from "../Components/CompanyView/Post/PostJobs";
import InformationJob from "../Components/CompanyView/Post/InformationJob";
import DetailsJobs from "../Components/CompanyView/Post/DetailsJobs";
import WriteJobs from "../Components/CompanyView/Post/WriteJobs";
import PreviewPost from "../Components/CompanyView/Post/PreviewPost";
import AccountSetting from "../Components/CompanyView/Content/AccountSetting";
import JobApplied from "../Components/Profile/JobApplied/JobApplied";
import EditJobs from "../Components/CompanyView/Content/EditJobs";
import CompanyPage from "../Components/CompanyView/CompanyPage";
import UpdateMainField from "../Components/CompanyView/Content/UpdateMainField";
import ChangePasswordPage from "../Pages/ChangePasswordPage/ChangePasswordPage";
import JobManager from "../Components/PanelAdmin/JobManager/JobManager";
import { Routes, Route } from "react-router-dom";

// const roles = ["Candidate", "Company", "admin", null];
function Router() {
  const profile = JSON.parse(localStorage.getItem("Profile"));
  const role = profile?.user?.role?.roleName ?? null;

  return (
    <Suspense fallback={<SpinnerFullPage />}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route
            path="chooseRole"
            element={
              <RouterRole role={role} roles={["Candidate", "Company", null]}>
                <RolePage />
              </RouterRole>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="change_password"
            element={
              <RouterRole role={role} roles={["Candidate", "Company"]}>
                <ChangePasswordPage />
              </RouterRole>
            }
          />
          <Route
            path="login/Admin"
            element={
              <RouterRole role={role} roles={[null]}>
                <LoginAdminPage />
              </RouterRole>
            }
          />
          <Route path="Register" element={<Register />} />
          <Route path="forgotPass" element={<ForgotPassword />} />

          <Route
            path="findJobs"
            element={
              <RouterRole role={role} roles={["Candidate", "Company", null]}>
                <FindJobPage />
              </RouterRole>
            }
          />
          <Route
            path="findJobs/detailsMb"
            element={
              <RouterRole role={role} roles={["Candidate", "Company", null]}>
                <JobDetailForMobile />
              </RouterRole>
            }
          />

          <Route
            path="user"
            element={
              <RouterRole role={role} roles={["Candidate"]}>
                <ProfilePage />
              </RouterRole>
            }
          >
            <Route index element={<Profile />} />
            <Route path="degree" element={<Degree />} />
            <Route path="editP" element={<Information />} />
            <Route path="job_applied" element={<JobApplied />} />
          </Route>

          <Route
            path="Message/:id"
            element={
              <RouterRole role={role} roles={["Candidate"]}>
                <MessagePage />
              </RouterRole>
            }
          />

          <Route
            path="/admin"
            element={
              <RouterRole role={role} roles={["Admin", null]}>
                <PanelAdminPage />
              </RouterRole>
            }
          >
            <Route index element={<ChartContent />} />
            <Route path="dashboard" element={<ChartContent />} />
            <Route path="companyManager" element={<CompanyManager />} />
            <Route path="candidateManager" element={<CandidateManager />} />
            <Route path="jobManager" element={<JobManager />} />

            <Route
              path="companyManager/details/:id"
              element={<DetailsCompany />}
            />
          </Route>
          {/* {role === "Admin" && (
           
          )} */}
          <Route path="/company" element={<CompanyPages />}>
            <Route index element={<Jobs />} />
            <Route path="jobs" element={<Jobs />} />

            <Route path="edit_jobs/:id" element={<EditJobs />} />
            <Route path="account_setting" element={<AccountSetting />} />

            <Route path="update_main_field" element={<UpdateMainField />} />

            <Route path="company_pages" element={<CompanyPage />} />
            <Route path="candidate" element={<Candidate />} />
            <Route path="interview" element={<Interview />} />
            <Route path="post_jobs" element={<PostJobs />}>
              <Route index element={<InformationJob />} />

              <Route path="details" element={<DetailsJobs />} />
              <Route path="description" element={<WriteJobs />} />
              <Route path="preview" element={<PreviewPost />} />
            </Route>
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Router;
