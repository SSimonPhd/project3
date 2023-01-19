import React, { Component } from 'react';
import {useNavigate} from 'react-router-dom';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Particle from '../tsParticles/tsParticle';

const Signup = () => {
    let navigate = useNavigate();
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
									<p className=' mb-5'>Please enter your Sign Up info!</p>
									<div className='mb-3'>
										<Form >
                                            <Form.Group
                                                    className='mb-3'
                                                    controlId='formBasicFirstName'
                                                >
                                                    <Form.Label>First name</Form.Label>
                                                    <Form.Control
                                                        type='First name'
                                                        placeholder='First name'
                                                        													
                                                    />
                                                </Form.Group>
                                            <Form.Group
                                                    className='mb-3'
                                                    controlId='formBasicLastName'
                                                >
                                                    <Form.Label>Last name</Form.Label>
                                                    <Form.Control
                                                        type='Last name'
                                                        placeholder='Last name'
                                                        													
                                                    />
											</Form.Group>
											<Form.Group className='mb-3' controlId='formBasicEmail'>
												<Form.Label className='text-center'>
													Email address
												</Form.Label>
												<Form.Control
													type='email'
													placeholder='Enter email'
																									
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
																										
												/>
											</Form.Group>
											
											<div className='d-grid'>
												<Button variant='primary' type='submit' onClick={()=>{
													navigate("/login");
												}}>
													Signup
												</Button>
											</div>
											
										</Form>
										<div className='mt-3'>
											<p className='mb-0  text-center'>
                                            Already registered{' '}
												<a  className='text-primary fw-bold' onClick={()=>{
													navigate("/login");
												}}>
													Sign In
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

export default Signup;