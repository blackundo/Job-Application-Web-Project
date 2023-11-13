import "./App.css";
import { BrowserRouter } from "react-router-dom";
import DefaultRouter from "./router/DefaultRouter";

function App() {
  // const dispatch = useDispatch();
  // const token = localStorage.getItem("accessToken");

  // useEffect(() => {
  //   if (!token) {
  //     const refreshToken = "get refresh token"
  //     dispatch(refreshAccessToken(refreshToken));
  //   }
  // }, [token]);

  const profile = JSON.parse(localStorage.getItem("Profile"));
  const role = profile && profile != undefined ? profile.role : null;
  console.log(role);

  return (
    <div className="h-screen overflow-x-hidden">
      <BrowserRouter>
        <DefaultRouter role={role} />
      </BrowserRouter>
    </div>
  );
}

export default App;
