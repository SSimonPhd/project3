import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

const projectID = 'c324e0ea-5ec2-4823-a4d1-46eea70540a8';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const authObject = {
			'Project-ID': projectID,
			'User-Name': username,
			'User-Secret': password,
		};

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
	};

	// Create a user when they sign up for site
	// May need to move to Sign Up page if we go that route
	const createUser = async (props) => {
		const { username, password, email, firstName, lastName } = props;

		let data = `{
      "username": ${username},
      "secret": ${password},
      "email": ${email},
      "first_name": ${firstName},
      "last_name": ${lastName}'
    }`;

		const config = {
			method: 'post',
			url: 'https://api.chatengine.io/users',
			headers: {
				'PRIVATE-KEY': '{{private_key}}', //need to make .env variable
			},
			data: data,
		};

		try {
			await axios(config).then(function (response) {
				console.log(JSON.stringify(response.data));
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
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
													className='input'
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
													className='input'
													required
												/>
											</Form.Group>
											<Form.Group
												className='mb-3'
												controlId='formBasicCheckbox'
											>
												<p className='small'>
													<a className='text-primary' href='#!'>
														Forgot password?
													</a>
												</p>
											</Form.Group>
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
												<a href="{''}" className='text-primary fw-bold'>
													Sign Up
												</a>
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
