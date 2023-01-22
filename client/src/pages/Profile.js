import React from 'react';
import Trip from '../components/Trip'

import { useQuery } from '@apollo/client';
import { GET_TRIPS } from '../utils/queries';
import './styles/profile.scss';

function Profile() {
  const { loading, data } = useQuery(GET_TRIPS, { fetchPolicy: "no-cache" });
  const tripList = data?.trips || [];
  
  console.log(tripList);

  const trips = tripList.map((tripData) => {
    return <Trip key={tripData._id} location={tripData.location} note={tripData.note} id={tripData._id} />;
  });

  return (
    <div className='profile-background container-fluid bg-image'>
      {/* Title */}
      <h2 className='profile-title text-center'>Your Trips</h2>
      <div className='row mt-5 h-75 d-flex flex-row justify-content-center'>
        <div className='col-sm w-75 d-flex flex-row justify-content-around'>
          {/* Here's where the trip data will be presented -- example mock up below */}
          { loading ? (<div>Loading...</div>) : trips }
        </div>
      </div>
    </div>
  )
}

export default Profile;