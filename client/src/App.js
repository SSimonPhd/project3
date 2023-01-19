import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Chats from './pages/Chats';
import AddTrip from './pages/AddTrip';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signup from "./pages/Signup";

import './App.css';

export default function App() {
	return (
		<Router>
			<Header />
			<div className='container-flex content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/chats' element={<Chats />} />
					<Route path='/addtrip' element={<AddTrip />} />
					<Route path='/signup' element={<Signup />} />
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}
