import GlobalStyles from "./styles/global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/dashboard";
import Login from "./pages/login";
import RegisterUser from "./pages/registerUsers";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="registeruser" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
