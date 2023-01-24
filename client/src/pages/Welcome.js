import React from 'react';
//import Auth from '../utils/auth';
// import { useNavigate } from 'react-router-dom';
import './styles/welcome.scss';

function Welcome() {
	// let navigate = useNavigate();

	// if (!Auth.loggedIn()) navigate('/login');

	return (
		<div>
			<div className='welcome-background container-fluid bg-image'>
				<div className='row w-100 h-100 d-flex justify-content-center align-items-center'>
					<div className='col-sm h-100 d-flex flex-column justify-content-center align-items-center ml-5'>
						<h2 className='welcome-title text-white'>WELCOME</h2>
						<p className='text-white'>
							Start your adventure.
						</p>
					</div>
					<div className='col-sm h-100 d-flex flex-column justify-content-center align-items-center ml-5'>
						<a href="/chats">
							<button
								type='button'
								class='welcome-btn btn-outline-light btn-lg m-2 p-2'
							>
								EXPLORE CHATS
							</button>
						</a>
						<a href="/addtrip">
							<button
								type='button'
								class='welcome-btn btn-outline-light btn-lg m-2 p-2'
							>
								ADD A TRIP
							</button>
						</a>

					</div>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
