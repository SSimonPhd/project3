import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./pages/Login";
import Chat from "./pages/Chats";
import AddTrip from "./pages/AddTrip";

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/AddTrip" element={<AddTrip />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}
