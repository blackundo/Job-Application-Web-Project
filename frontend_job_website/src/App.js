import "./App.css";
import { BrowserRouter } from "react-router-dom";
import DefaultRouter from "./router/DefaultRouter";
import { useEffect } from "react";
import { refreshAccessToken } from "./Utils/RefreshToken";

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
