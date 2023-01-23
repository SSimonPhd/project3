import React, { useState } from 'react';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Particle from '../tsParticles/tsParticle';
import { useNavigate } from 'react-router-dom';
import env from 'react-dotenv';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

const projectID = env.REACT_APP_CE_PUBLIC_KEY;

const Login = () => {
	let navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [login] = useMutation(LOGIN_USER);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			'Project-ID': projectID,
			'User-Name': username,
			'User-Secret': password,
		};

		try {
			const { data } = await login({
				variables: {
					username,
					password,
				},
			});

			Auth.login(data.login.token);
		} catch (err) {
			console.error(err);
		}

		try {
			await axios.get('https://api.chatengine.io/chats', {
				headers: authObject,
			});

			localStorage.setItem('username', username);
			localStorage.setItem('password', password);

			window.location.reload();
			setError('');
		} catch (err) {
			setError('Oops, incorrect credentials.');
		}

		console.log('Successfully logged in. Routing to profile page');
		navigate('/profile');
	};

	return (
		<div>
			<Particle />
			<Container>
				<Row className='vh-100 d-flex justify-content-center align-items-center'>
					<Col md={8} lg={6} xs={12}>
						<div className='border border-3 border-primary'></div>
						<Card className='shadow'>
							<Card.Body>
								<div className='mb-3 mt-md-4'>
									<h2 className='fw-bold mb-2 text-uppercase '>
										©The Essentials{' '}
									</h2>
									<p className=' mb-5'>Please enter your login and password!</p>
									<div className='mb-3'>
										<Form onSubmit={handleSubmit}>
											<Form.Group className='mb-3' controlId='formBasicEmail'>
												<Form.Label className='text-center'>
													Email address
												</Form.Label>
												<Form.Control
													type='email'
													placeholder='Enter email'
													value={username}
													onChange={(e) => setUsername(e.target.value)}
													required
												/>
											</Form.Group>

											<Form.Group
												className='mb-3'
												controlId='formBasicPassword'
											>
												<Form.Label>Password</Form.Label>
												<Form.Control
													type='password'
													placeholder='Password'
													value={password}
													onChange={(e) => setPassword(e.target.value)}
													required
												/>
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='formBasicCheckbox'
											></Form.Group>
											<div className='d-grid'>
												<Button variant='primary' type='submit'>
													Login
												</Button>
											</div>
											<h2 className='error'>{error}</h2>
										</Form>
										<div className='mt-3'>
											<p className='mb-0  text-center'>
												Don't have an account?{' '}
												<button
													type='button'
													className='text-primary fw-bold'
													onClick={() => {
														navigate('/signup');
													}}
												>
													Sign Up
												</button>
											</p>
										</div>
									</div>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
