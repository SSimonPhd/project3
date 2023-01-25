import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../utils/mutations';
import Login from './Login';
import Auth from '../utils/auth';

import './styles/addtrip.scss';
import { motion } from 'framer-motion';

function AddTrip() {
	let navigate = useNavigate();

	const [location, setLocation] = useState('');
	const [note, setNote] = useState('');
	const [createTrip, { error }] = useMutation(ADD_TRIP);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		return name === 'location' ? setLocation(value) : setNote(value);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
			
		try {
			await createTrip({
				variables: { location: location, note: note },
			});

			navigate(`/profile`);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='add-trip-background container-fluid d-flex flex-column justify-content-center align-items-center'>
			{/* Title  */}
			<div className='row'>
				<div className='col-sm'>
					<h2 className='add-trip-title text-center'>Add a Trip</h2>
				</div>
			</div>
			{/* Form to Add a Trip */}
			<div className='add-trip-form row d-flex justify-content-center align-items-center'>
				<div className='trip-input col d-flex flex-column align-items-center justify-contents-center'>
					<div className='mb-3 w-75'>

						<label htmlFor='location' className='form-label'>
							Location
						</label>
						<input
							name='location'
							type='text'
							className='form-control'
							id='location'
							onChange={handleInputChange}
						/>
					</div>
					<div className='mb-3 w-75'>
						<label htmlFor='highlights' className='form-label'>
							Notes
						</label>
						<textarea
							name='note'
							className='form-control'
							id='highlights'
							rows='3'
							onChange={handleInputChange}
						></textarea>
					</div>
					{/* Add a Trip + Button */}
					<motion.button
						type='submit'
						onClick={handleFormSubmit}
						className='create-trip-btn'
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.3 }
						}}
					>
						CREATE TRIP +
					</motion.button>
				</div>
			</div>
		</div>
	);
}

export default AddTrip;
