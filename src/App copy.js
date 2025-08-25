import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import AddStory from "./pages/AddStory";

function App() {
  const isLoggedIn = !!localStorage.getItem("currentUser");

  return (
    <Router>
      <Routes>
        {/* Default route -> go to Login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/addstory"
          element={isLoggedIn ? <AddStory /> : <Navigate to="/login" />}
        />

        {/* Fallback for wrong URLs */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
