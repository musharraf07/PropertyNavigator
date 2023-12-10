import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginIn from './pages/loginin';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import About from './pages/about'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<LoginIn />} />
        <Route path="/sign-out" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} /> 
      </Routes>
    </BrowserRouter>
  );
}
