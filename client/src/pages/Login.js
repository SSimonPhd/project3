import React, { useState } from 'react';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import env from 'react-dotenv';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './styles/login.scss';
import './styles/signup.scss';
import { motion } from 'framer-motion';

const projectID = env.REACT_APP_CE_PUBLIC_KEY;

const Login = () => {
	let navigate = useNavigate();

	const [userFormData, setUserFormData] = useState({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const [login] = useMutation(LOGIN_USER);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			'Project-ID': projectID,
			'User-Name': userFormData.email,
			'User-Secret': userFormData.password,
		};

		try {
			await axios.get('https://api.chatengine.io/chats', {
				headers: authObject,
			});

			localStorage.setItem('username', userFormData.email);
			localStorage.setItem('password', userFormData.password);

			setError('');

			const { data } = await login({
				variables: {
					email: userFormData.email,
					password: userFormData.password,
				},
			});

			Auth.login(data.login.token);
		} catch (err) {
			console.error(err);
		}

		navigate(`/welcome`);
	};

	return (
		<div className='login-background container-fluid'>
			<Container >
				<Row className='vh-100 d-flex justify-content-center align-items-center'>
					<Col md={8} lg={6} xs={12}>
						<Card className='shadow'>
							<Card.Body>
								<div className='mb-3 mt-md-4'>
									<h2 className='login-title fw-bold mb-2 text-uppercase text-center'>
										Welcome Back{' '}
									</h2>
									<p className='mb-5 text-center'>Adventure and friendship await you!</p>
									<div className='mb-3'>
										<Form onSubmit={handleSubmit}>
											<Form.Group className='mb-3' controlId='formBasicEmail'>
												<Form.Label className='text-center'>
													Email address
												</Form.Label>
												<Form.Control
													type='email'
													placeholder='Enter email'
													name='email'
													onChange={handleInputChange}
													value={userFormData.email}
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
													name='password'
													onChange={handleInputChange}
													value={userFormData.password}
													required
												/>
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='formBasicCheckbox'
											></Form.Group>
											<div className='d-grid d-flex justify-content-center align-items-center'>
												<motion.button type='submit' className='sign-up-btn'
													whileHover={{
														scale: 1.05,
														transition: { duration: 0.3 }
													}}>
													Login
												</motion.button>
											</div>
											<h2 className='error'>{error}</h2>
										</Form>
										<div className='mt-3 '>
											<p className='mb-0  text-center'>
												Don't have an account?{' '}
												<motion.button
													type='button'
													className='sign-in-btn'
													onClick={() => {
														navigate('/signup');
													}}
													whileHover={{
														scale: 1.05,
														transition: { duration: 0.3 }
													}}
												>
													Sign Up
												</motion.button>
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
