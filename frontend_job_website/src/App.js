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
function App() {
  return (
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
            <Route path="profileU" element={<ProfilePage />} />
            <Route path="Message/:id" element={<MessagePage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
