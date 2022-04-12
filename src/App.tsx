import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import StudentDetails from "./pages/students/details/StudentDetails";
import StudentsList from "./pages/students/students-list/StudentsList";
import "./App.css";
import StudentCreate from "./pages/students/create/StudentCreate";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/students"} element={<StudentsList />} />
          <Route path={"/students/:id"} element={<StudentDetails />} />
          <Route path={"/students/create"} element={<StudentCreate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
