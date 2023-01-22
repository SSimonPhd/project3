import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../utils/mutations';
// import Login from './Login';
// import Auth from '../utils/auth';

function AddTrip() {
	// if (!Auth.loggedIn()) return <Login />;

	let navigate = useNavigate();

  const [location, setLocation] = useState('');
  const [note, setNote] = useState('');
  const [createTrip, { error }] = useMutation(ADD_TRIP);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    return name === 'location' ? setLocation(value) : setNote(value);
  }

  const handleFormSubmit =  async (e) => {
    e.preventDefault();
  
		try {
			await createTrip({
				variables: { location: location, note: note },
			});

			navigate(`/profile`);
		} catch (err) {
			console.error(err);
		}
  }
	
	return (
		<div className='container-sm'>
			{/* Title  */}
			<h2 className='text-center mt-5'>Add a Trip</h2>

			{/* Form to Add a Trip */}
			<div className='row'>
				<div className='col w-50 d-flex flex-column align-items-center justify-contents-center'>
					<div className='mb-3 w-50'>
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
					<div className='mb-3 w-50'>
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
					<button
						type='submit'
						onClick={handleFormSubmit}
						className='btn btn-primary p-2'
					>
						Create trip +
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddTrip;
