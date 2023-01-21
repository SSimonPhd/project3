import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Chats from './pages/Chats';
import AddTrip from './pages/AddTrip';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import './App.css';

const httpLink = createHttpLink({
	uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
	const token = localStorage.getItem('id_token');
	// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsIl9pZCI6IjYzYzg0ZDg3M2FjNGZlMGNhODQzZGFiOSJ9LCJpYXQiOjE2NzQzMzI1ODIsImV4cCI6MTY3NDUwNTM4Mn0.ZgnaCm-iNvfaxXrbKelMJ7UojW9j-m_00DepmwJUTFg'
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});

export default function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Header />
				<div className='container-flex content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/welcome' element={<Welcome />} />
						<Route path='/login' element={<Login />} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/chats' element={<Chats />} />
						<Route path='/addtrip' element={<AddTrip />} />
						<Route path='/signup' element={<Signup />} />
					</Routes>
				</div>
				<Footer />
			</Router>
		</ApolloProvider>
	);
}
