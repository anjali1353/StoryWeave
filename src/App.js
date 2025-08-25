import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AddStory from "./pages/AddStory";
import Header from "./components/Header"; 
import Profile from "./pages/Profile"; 

function App() {
  return (
    <HashRouter>
      <Header />   {/* 👈 new Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddStory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
