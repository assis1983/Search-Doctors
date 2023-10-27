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
import EditProfile from "./pages/editprofile";
import Questions from "./pages/commonquestions";
import EditPlans from "./pages/editplans";
import TypeSpecialties from "./pages/typespceialties";
import TypeNotifications from "./pages/typenotifications";
import EditNotification from "./pages/editnotification";
import TypeQuestion from "./pages/typequestion";
import EditFaq from "./pages/editfaq";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registeruser" element={<RegisterUser />} />
          <Route path="/clientesdetails/:id" element={<ClientesDetails />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/newplan" element={<NewPlan />} />
          <Route path="/typeplan/:id" element={<TypePlan />} />
          <Route path="/editplans/:id" element={<EditPlans />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/newspeciality" element={<NewEspciality />} />
          <Route path="/typespecialties/:id" element={<TypeSpecialties />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/newnotification" element={<NewNotification />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route
            path="/typenotifications/:id"
            element={<TypeNotifications />}
          />
          <Route path="/editnotification/:id" element={<EditNotification />} />
          <Route path="/typequestion/:id" element={<TypeQuestion />} />
          <Route path="/editfaq/:id" element={<EditFaq />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
