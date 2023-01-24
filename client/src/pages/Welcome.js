import React from 'react';
//import Auth from '../utils/auth';
// import { useNavigate } from 'react-router-dom';
import './styles/welcome.scss';
import { motion } from 'framer-motion';

function Welcome() {
	// let navigate = useNavigate();

	// if (!Auth.loggedIn()) navigate('/login');

	return (
		<div
		>
			<div className='welcome-background container-fluid bg-image'>
				<div className='row w-100 h-100 d-flex justify-content-center align-items-center'>
					<div className='col-sm h-100 d-flex flex-column justify-content-center align-items-center ml-5'>
						<motion.h2
							className='welcome-title text-white'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
							whileHover={{
								scale: 1.1,
								transition:{duration: 1}
							}}>
							WELCOME
						</motion.h2>
						<p className='text-white'>
							Start your adventure.
						</p>
					</div>
					<div className='col-sm h-100 d-flex flex-column justify-content-center align-items-center ml-5'>
						<a href="/chats">
							<motion.button
								type='button'
								class='welcome-btn btn-outline-light btn-lg m-2 p-2'
								whileHover={{
									scale: 1.1,
									transition:{duration: 0.5}}}
							>
								EXPLORE CHATS
							</motion.button>
						</a>
						<a href="/addtrip">
							<motion.button
								type='button'
								className='welcome-btn btn-outline-light btn-lg m-2 p-2'
								whileHover={{
									scale: 1.1,
									transition:{duration: 0.5}
								}}
							>
								ADD A TRIP
							</motion.button>
						</a>

					</div>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
