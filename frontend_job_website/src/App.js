import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/LoginPage";
import Register from "./Pages/Register/RegisterPage";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import RolePage from "./Pages/ChooseRole/RolePage";
import Home from "./Pages/Home/Home";
import FindJobPage from "./Pages/FindJobPage/FindJobPage";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import MessagePage from "./Pages/MessagePage/MessagePage";
import NotFoundPage from "./Pages/ErrorPages/NotFoundPage";
import { Provider } from "react-redux";

import Degree from "./Components/Profile/Degree/Degree";
import Profile from "./Components/Profile/Profile";
import Information from "./Components/Profile/Edit/Information";
import store from "./Stores/storeLogin";
import JobDetailForMobile from "./Pages/FindJobPage/JobDetailForMobile";

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen overflow-x-hidden">
        <BrowserRouter>
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
              <Route path="/*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <Login /> */}
      </div>
    </Provider>
  );
}

export default App;
