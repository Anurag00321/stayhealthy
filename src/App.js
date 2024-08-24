import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import Layout from "./Components/Landing_page/LandingPage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout";
import InstantConsultation from "./Components/InstantConsultation/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation";
import SelfCheckup from "./Components/SelfCheckup/SelfCheckup";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Notification from "./Components/Notification/Notification";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [notificationDropdownOpen, setNotificationDropdownOpen] =
    useState(false);

  const toggleNotificationDropdown = () => {
    setNotificationDropdownOpen(!notificationDropdownOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          notificationDropdownOpen={notificationDropdownOpen}
          toggleNotificationDropdown={toggleNotificationDropdown}
        />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/reports" element={<ReportsLayout />} />
          <Route
            path="/instantConsultation"
            element={<InstantConsultation />}
          />
          <Route
            path="/bookingConsultation"
            element={<BookingConsultation />}
          />
          <Route path="/selfCheckup" element={<SelfCheckup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
