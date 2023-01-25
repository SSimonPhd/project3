import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_TRIP } from '../utils/queries';
import { UPDATE_TRIP } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';
// import { GET_TRIPS } from '../../utils/queries';
import './styles/addtrip.scss'
import { motion } from 'framer-motion';

const UpdateTrip = () => {
  let navigate = useNavigate();

	const { state } = useLocation();
	const { tripId } = state;

  const [location, setLocation] = useState('');
	const [note, setNote] = useState('');
  const [updateTrip, { error } ] = useMutation(UPDATE_TRIP);

	const handleInputChange = (e) => {
		const { name, value } = e.target;

		return name === 'location' ? setLocation(value) : setNote(value);
	};

  useQuery(GET_TRIP, 
    { 
      variables: { tripId: tripId }, fetchPolicy: 'no-cache', 
      onCompleted: (data) => {
        setLocation(data.trip.location)
        setNote(data.trip.note)
      }
    }
  );


	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			await updateTrip({
				variables: { tripId: tripId, location: location, note: note },
			});

      navigate(`/profile`);
		} catch (err) {
			console.error(err);
		}
	};

  return (
    <div className='container-fluid add-trip-background d-flex flex-column justify-content-center align-items-center'>
			{/* Title  */}
			<div className='row'>
				<div className='col-sm'>
					<h2 className='add-trip-title text-center'>Update Trip</h2>
				</div>
			</div>
			{/* Form to Update a Trip */}
			<div className='add-trip-form row d-flex justify-content-center align-items-center'>
				<div className='trip-input col d-flex flex-column align-items-center justify-contents-center'>
					<div className='mb-3 w-75'>
						<label htmlFor='location' className='form-label'>
							Location
						</label>
						<input name='location' type='text' className='form-control' id='location' onChange={handleInputChange} value={location} />
					</div>
					<div className='mb-3 w-75'>
						<label htmlFor='highlights' className='form-label'>
							Notes
						</label>
						<textarea name='note' className='form-control' id='highlights' rows='3' onChange={handleInputChange} value={note}></textarea>
					</div>
					{/* Add a Trip + Button */}
					<motion.button 
					type='submit'
					className='create-trip-btn'
					onClick={handleFormSubmit}
					whileHover={{
						scale: 1.1,
						transition: { duration: 0.3 }
					}}>
						Save
						</motion.button>
				</div>
			</div>
		</div>
  )
}

export default UpdateTrip;