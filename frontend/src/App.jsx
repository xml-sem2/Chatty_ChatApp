import React, { useEffect } from 'react'

import Navbar from "./components/Navbar";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import SignUpPage from './pages/SignUpPage';

import { Routes, Route } from "react-router-dom";

import {Loader} from "lucide-react";
import { useAuthStore } from './store/useAuthStore';
const App = () => {
  const {authUser,checkAuth,isCheckingAuth}=useAuthStore();
  useEffect(() => {
    checkAuth();
  },[checkAuth]);

  console.log({authUser});

  if(isCheckingAuth && !authUser)
     return (
        <div className='flex items-center justify-center h-screen'>
          <Loader className = "size-10 animate-spin"/>
        </div>
  );
  
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
