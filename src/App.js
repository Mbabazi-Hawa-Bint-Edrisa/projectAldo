import React from 'react';
import { Route, Routes } from "react-router-dom";
import "./global.css";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import SignUp from "./pages/SignUp";
import LoginForm from "./pages/LoginIn";
import BookingForm from "./components/bookingForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/loginin" element={<LoginForm />} />
        <Route path="/bookingForm" element={<BookingForm />} />
      </Routes>
    </div>
  );
}

export default App;
