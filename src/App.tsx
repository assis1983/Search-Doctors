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
import NewNotification from "./pages/newnotification";
// import { AuthContext, AuthProvider } from "./contexts/AuthContext";
// import { useContext } from "react";

// export function PrivateRoutesAccess({
//   children
// }: {
//   children: React.ReactNode
// }) {
//   const { authentified } = useContext(AuthContext)
//   if (!authentified) {
//     return <Navigate to="/login" />
//   }
//   return <>{children}</>
// }


function App() {
  return (
    <>
      <GlobalStyles />
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={
                // <PrivateRoutesAccess>
                  <Dashboard />
                // </PrivateRoutesAccess>
              }
            />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/clientesdetails" element={<ClientesDetails />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/newplan" element={<NewPlan />} />
          <Route path="/typeplan" element={<TypePlan/>} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/newspeciality" element={<NewEspciality />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/newnotification" element={<NewNotification />} />
        </Routes>
      </BrowserRouter>
      {/* </AuthProvider> */}
      
    </>
  );
}

export default App;
