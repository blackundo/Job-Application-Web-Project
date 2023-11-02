import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SpinnerFullPage from "./Components/SpinnerFullPage/SpinnerFullPage";
import { Provider } from "react-redux";
import Degree from "./Components/Profile/Degree/Degree";
import Profile from "./Components/Profile/Profile";
import Information from "./Components/Profile/Edit/Information";
import store from "./Stores/storeLogin";
import JobDetailForMobile from "./Pages/FindJobPage/JobDetailForMobile";
import LoginAdminPage from "./Pages/LoginAdmin/LoginAdminPage";
import PanelAdminPage from "./Pages/PanelAdminPage/PanelAdminPage";
import ChartContent from "./Components/PanelAdmin/Content/ChartContent";

const Home = lazy(() => import("./Pages/Home/Home"));
const RolePage = lazy(() => import("./Pages/ChooseRole/RolePage"));
const Login = lazy(() => import("./Pages/Login/LoginPage"));
const Register = lazy(() => import("./Pages/Register/RegisterPage"));
const ForgotPassword = lazy(() =>
  import("./Pages/ForgotPassword/ForgotPassword")
);
const FindJobPage = lazy(() => import("./Pages/FindJobPage/FindJobPage"));
const ProfilePage = lazy(() => import("./Pages/ProfilePage/ProfilePage"));
const MessagePage = lazy(() => import("./Pages/MessagePage/MessagePage"));
const NotFoundPage = lazy(() => import("./Pages/ErrorPages/NotFoundPage"));

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen overflow-x-hidden">
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="chooseRole" element={<RolePage />} />
                <Route path="login" element={<Login />} />
                <Route path="Register" element={<Register />} />
                <Route path="forgotPass" element={<ForgotPassword />} />
                <Route path="findJobs" element={<FindJobPage />} />
                <Route
                  path="findJobs/detailsMb"
                  element={<JobDetailForMobile />}
                />
                <Route path="profileU" element={<ProfilePage />}>
                  <Route index element={<Profile />} />
                  <Route path="degree" element={<Degree />} />
                  <Route path="editP" element={<Information />} />
                </Route>
                <Route path="Message/:id" element={<MessagePage />} />
                <Route path="login/Admin" element={<LoginAdminPage />} />
                <Route path="/admin" element={<PanelAdminPage />}>
                  <Route index element={<ChartContent />} />
                </Route>
                <Route path="/*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        {/* <Login /> */}
      </div>
    </Provider>
  );
}

export default App;
