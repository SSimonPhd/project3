import React from 'react';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import './styles/welcome.scss';

function Welcome() {
	let navigate = useNavigate();

	if (!Auth.loggedIn()) navigate('/login');

	return (
		<div>
			<div className='world-background container-fluid bg-image'>
				<div className='row w-100 h-100'>
					<div className='col-sm h-100 d-flex flex-column justify-content-center align-items-center ml-5'>
						<h2 className='page-title text-white'>WELCOME</h2>
						<p className='text-white'>
							Nulla vitae elit libero, a pharetra augue mollis interdum.
						</p>
						<button
							type='button'
							class='green-btn btn-outline-light btn-lg m-2 p-2'
						>
							EXPLORE CHATS
						</button>
						<button
							type='button'
							class='green-btn btn-outline-light btn-lg m-2 p-2'
						>
							ADD A TRIP
						</button>
					</div>
					<div className='col-sm d-flex flex-column justify-content-center align-items-center'>
						{/* <button type="button" class="green-btn btn-outline-light btn-lg m-2 p-2">Explore chats</button>
            <button type="button" class="green-btn btn-outline-light btn-lg m-2 p-2">Add a trip</button> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Welcome;
