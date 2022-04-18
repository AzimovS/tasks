import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import StudentDetails from "./pages/students/details/StudentDetails";
import StudentsList from "./pages/students/students-list/StudentsList";
import StudentCreate from "./pages/students/create/StudentCreate";
import StudentEdit from "./pages/students/edit/StudentEdit";
import FacultiesList from "./pages/faculties/faculties-list/FacultiesList";
import FacultyCreate from "./pages/faculties/create/FacultyCreate";
import FacultyDetails from "./pages/faculties/details/FacultyDetails";
import FacultyEdit from "./pages/faculties/edit/FacultyEdit";
import { StudentProvider } from "./contexts/StudentContext";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <StudentProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path={"/"} element={<HomePage />} />
            <Route path={"/students"} element={<StudentsList />} />
            <Route path={"/students/:id"} element={<StudentDetails />} />
            <Route path={"/students/create"} element={<StudentCreate />} />
            <Route path={"/students/edit/:id"} element={<StudentEdit />} />
            <Route path={"/faculties"} element={<FacultiesList />} />
            <Route path={"/faculties/:id"} element={<FacultyDetails />} />
            <Route path={"/faculties/create"} element={<FacultyCreate />} />
            <Route path={"/faculties/edit/:id"} element={<FacultyEdit />} />
          </Routes>
        </div>
      </StudentProvider>
    </Router>
  );
}

export default App;
