import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import StudentSignup from "./pages/signup/StudentSignup";
import EmployerSignup from "./pages/signup/EmployerSignup";
import Courses from "./pages/courses/Courses";
import Internships from "./pages/interships/Internships";
import Jobs from "./pages/jobs/Jobs";
import StudentDashboard from "./pages/dashboards/StudentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/registration/student" element={<StudentSignup />}></Route>
      <Route path="/hire-talent" element={<EmployerSignup />}></Route>
      <Route path="/student/dashboard" element={<StudentDashboard />}></Route>
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/internships" element={<Internships />}></Route>
      <Route path="/jobs" element={<Jobs />}></Route>
    </Routes>
  );
}

export default App;
