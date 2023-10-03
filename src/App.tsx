import GlobalStyles from "./styles/global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/dashboard";
import Login from "./pages/login";
import RegisterUser from "./pages/registerUsers";
import ClientesDetails from "./pages/clientesdetails";
import Plans from "./pages/plans";
import Faq from "./pages/faq";
import Specialties from "./pages/specialties";
import Notifications from "./pages/notifications";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/clientesdetails" element={<ClientesDetails />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
