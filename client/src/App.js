import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header';

import Login from "./pages/Login";
import Chats from "./pages/Chats";
import AddTrip from "./pages/AddTrip";
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/addtrip" element={<AddTrip />} />
        </Routes>
      </Router>
    </div>
  );
}