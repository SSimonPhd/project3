import React, { useState } from 'react';
import Trip from '../components/Trip';
import { useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TRIPS } from '../utils/queries';
import Auth from '../utils/auth';
import { REMOVE_TRIP } from '../utils/mutations';

//TODO: work on getting trip information from the database
//TODO: create individual trip component
//TODO: decide where/how to update & delete trip data

const Profile = () => {
	let navigate = useNavigate();

	if (!Auth.loggedIn()) navigate('/login');

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
		<div className='container-sm'>
			{/* Title */}
			<h2 className='text-center mt-5'>Your Upcoming Trips</h2>
			<div className='row mt-5 h-75 d-flex flex-row justify-content-center'>
				<div className='col-sm w-75 d-flex flex-row justify-content-around'>
					{/* Here's where the trip data will be presented -- example mock up below */}
					{tripData.trips.lenght === 0 ? <div>Loading...</div> : trips}
				</div>
			</div>
		</div>
	);
};

export default Profile;
