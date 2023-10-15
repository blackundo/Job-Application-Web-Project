import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/LoginPage";
import Register from "./Pages/Register/RegisterPage";
import RegisterSuccess from "./Pages/Register/RegisterSuccess";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import RolePage from "./Pages/ChooseRole/RolePage";
function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/">
            <Route path="chooseRole" element={<RolePage />} />
            <Route path="login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="registerSuccess" element={<RegisterSuccess />} />
            <Route path="forgotPass" element={<ForgotPassword />} />
            {/* 
            <Route path="LoginEmployer" element={<LoginEmp />} /> */}
            {/* */}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
