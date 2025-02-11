import React from 'react'

import Navbar from "./components/Navbar";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SignUpPage from './pages/SignUpPage';

import { Routes, Route } from "react-router-dom";
import { axiosInstance } from './lib/axios';

const App = () => {
  axiosInstance
  return (
    <div>
      
      <Navbar />

      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profle" element={<ProfilePage />} />
      </Routes>

    </div>
  )
}

export default App
