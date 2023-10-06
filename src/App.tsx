import GlobalStyles from "./styles/global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/dashboard";
import Login from "./pages/login";
import RegisterUser from "./pages/registerUsers";
import ClientesDetails from "./pages/clientesdetails";
import Plans from "./pages/plans";
import NewPlan from "./pages/newplan";
import Faq from "./pages/faq";
import Specialties from "./pages/specialties";
import Notifications from "./pages/notifications";
import TypePlan from "./pages/typeplano";
import NewEspciality from "./pages/newespeciality";

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
          <Route path="/newplan" element={<NewPlan />} />
          <Route path="/typeplan" element={<TypePlan/>} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/newspeciality" element={<NewEspciality />} />
          <Route path="/notifications" element={<Notifications />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
