import GlobalStyles from "./styles/global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/dashboard";
import Login from "./pages/login";
import RegisterUser from "./pages/registerUsers";
import ClientesDetails from "./pages/clientesdetails";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
