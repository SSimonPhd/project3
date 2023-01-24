import React, { useState } from 'react';
import Trip from '../components/Trip';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TRIPS } from '../utils/queries';
import Auth from '../utils/auth';
import { REMOVE_TRIP } from '../utils/mutations';

import './styles/profile.scss';

const Profile = () => {
	let navigate = useNavigate();

	const [tripData, setTripData] = useState({ trips: [] });

	useQuery(GET_TRIPS, { fetchPolicy: 'no-cache', onCompleted: setTripData });

	const [removeTrip] = useMutation(REMOVE_TRIP);

	const handleDeleteTripEvent = async (e) => {
		e.preventDefault();

		if (window.confirm('Delete trip?')) {
			try {
				// Execute mutation and pass in defined parameter data as variables
				await removeTrip({
					variables: { tripId: e.target.dataset.id },
				});

				window.location.reload();
			} catch (err) {
				console.error(err);
			}
		}
	};

	const trips = tripData.trips.map((trip) => {
		return (
			<Trip
				key={trip._id}
				location={trip.location}
				note={trip.note}
				id={trip._id}
				onDelete={handleDeleteTripEvent}
			/>
		);
	});

  return (
    <div className='profile-background container-fluid bg-image'>
      {/* Title */}
      <h2 className='profile-title text-center'>Your Trips</h2>
      <div className='row mt-5 h-75 d-flex flex-row justify-content-center'>
        {/* <div className='col-sm w-75 d-flex flex-row justify-content-around flex-wrap'> */}
          {/* Here's where the trip data will be presented -- example mock up below */}
          { tripData.trips.length === 0 ? (<div>Loading...</div>) : trips }
        {/* </div> */}
      </div>
    </div>
  )
}

export default Profile;
