import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { GET_TRIP } from '../utils/queries';
import { UPDATE_TRIP } from '../utils/mutations';
import { useNavigate } from 'react-router-dom';
// import { GET_TRIPS } from '../../utils/queries';

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
    <div className='container-sm'>
			{/* Title  */}
			<h2 className='text-center mt-5'>Update a Trip</h2>

			{/* Form to Add a Trip */}
			<div className='row'>
				<div className='col w-50 d-flex flex-column align-items-center justify-contents-center'>
					<div className='mb-3 w-50'>
						<label htmlFor='location' className='form-label'>
							Location
						</label>
						<input name='location' type='text' className='form-control' id='location' onChange={handleInputChange} value={location} />
					</div>
					<div className='mb-3 w-50'>
						<label htmlFor='highlights' className='form-label'>
							Notes
						</label>
						<textarea name='note' className='form-control' id='highlights' rows='3' onChange={handleInputChange} value={note}></textarea>
					</div>
					{/* Add a Trip + Button */}
					<button type='submit' className='btn btn-primary p-2' onClick={handleFormSubmit}>Save</button>
				</div>
			</div>
		</div>
  )
}

export default UpdateTrip;