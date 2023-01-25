import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Container, Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { addPerson, deleteMessage } from 'react-chat-engine';
import env from 'react-dotenv';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './styles/signup.scss';
import { motion } from 'framer-motion';

const projectID = env.REACT_APP_CE_PUBLIC_KEY;

const Signup = () => {
	let navigate = useNavigate();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [userFormData, setUserFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [addUser] = useMutation(ADD_USER);

	const private_key = env.REACT_APP_CE_PRIVATE_KEY;
	const chatID = env.REACT_APP_CE_CHAT_ID;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	// Create a user when they sign up for site
	const createUser = async (e) => {
		e.preventDefault();

		const authObject = {
			'PRIVATE-KEY': private_key,
		};

		const props = {
			publicKey: projectID,
			userName: env.REACT_APP_CE_ADMIN_USERNAME,
			userSecret: env.REACT_APP_CE_ADMIN_SECRET,
		};

		try {
			await axios
				.post(
					'https://api.chatengine.io/users/',
					{
						username: userFormData.email,
						secret: userFormData.password,
						email: userFormData.email,
						first_name: firstName,
						last_name: lastName,
					}, // Body object
					{ headers: authObject } // Headers object
				)
				.then((r) => console.log(r));

			localStorage.setItem('username', userFormData.email);
			localStorage.setItem('password', userFormData.password);

			addPerson(props, chatID, userFormData.email);
			deleteMessage(props, chatID, '583275');

			const { data } = await addUser({
				variables: { ...userFormData },
			});

			Auth.login(data.addUser.token);

			navigate('/Welcome');
		} catch (err) {
			console.error(err);
			console.log('Failed to send user to DB');
		}
	};

	return (
		<div className='container-fluid sign-up-background'>
			<Container >
				<Row className='vh-100 d-flex justify-content-center align-items-center'>
					<Col md={8} lg={6} xs={12}>
						<Card className='shadow'>
							<Card.Body>
								<div className='mb-3 mt-md-4'>
									<h2 className='fw-bold mb-2 text-uppercase text-center'>
										Welcome Solo Travelers{' '}
									</h2>
									<p className='text-center mb-5'>Please enter your Sign Up info!</p>
									<div className='mb-3'>
										<Form onSubmit={createUser}>
											<Form.Group
												className='mb-3'
												controlId='formBasicFirstName'
											>
												<Form.Label>First name</Form.Label>
												<Form.Control
													className="form-bubble"
													type='First name'
													placeholder='First name'
													value={firstName}
													onChange={(e) => setFirstName(e.target.value)}
													required
												/>
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='formBasicLastName'
											>
												<Form.Label>Last name</Form.Label>
												<Form.Control
													className="form-bubble"
													type='Last name'
													placeholder='Last name'
													value={lastName}
													onChange={(e) => setLastName(e.target.value)}
													required
												/>
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='formBasicUsername'
											>
												<Form.Label>Username</Form.Label>
												<Form.Control
													className="form-bubble"
													type='text'
													placeholder='Username'
													name='username'
													onChange={handleInputChange}
													value={userFormData.username}
													required
												/>
											</Form.Group>
											<Form.Group className='mb-3' controlId='formBasicEmail'>
												<Form.Label className='text-center'>
													Email address
												</Form.Label>
												<Form.Control
													className="form-bubble"
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
													className="form-bubble"
													type='password'
													placeholder='Password'
													name='password'
													onChange={handleInputChange}
													value={userFormData.password}
													required
												/>
											</Form.Group>

											<div className='d-grid d-flex justify-content-center align-items-center'>
												<motion.button className='sign-up-btn' type='submit'
												whileHover={{
													scale: 1.05,
													transition:{duration: 0.3}}}>
													Signup
												</motion.button>
											</div>
										</Form>
										<div className='mt-3'>
											<p className='mb-0  text-center'>
												Already registered{' '}
												<motion.button
													type='button'
													className='sign-in-btn'
													onClick={() => {
														navigate('/login');
													}}
													whileHover={{
														scale: 1.05,
														transition:{duration: 0.3}}}>
													Login
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

export default Signup;
