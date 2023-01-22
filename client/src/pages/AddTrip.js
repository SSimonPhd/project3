import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../utils/mutations';
import './styles/addtrip.scss';

function AddTrip() {
  let navigate = useNavigate();

  const [formState, setTripState] = useState({
    location: '',
    note: ''
  });

  const [createTrip, { error }] = useMutation(ADD_TRIP);

  // When the user begins typing --> handle input change
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target.value; //!
  //   setTripData({...tripData, location, note}) //!
  // }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await createTrip({
        variables: { location: formState.location, note: formState.note }
      });

      const { name, value } = event.target;

      setTripState({
        ...formState,
        [name]: value,
      });

      navigate(`/profile`)
    } catch (err) {
      console.error(err);
    }


  }

  return (
    <div className='add-trip-background container-fluid'>
      {/* Title  */}
      <h2 className='add-trip-title text-center'>Add a Trip</h2>

      {/* Form to Add a Trip */}
      <div className='add-trip-form row w-100'>
        <div className='col-sm d-flex flex-column align-items-center justify-contents-center'>
          <div className="trip-input mb-3">
            <label for="location" className="form-label">Location</label>
            <input name="location" type="text" className="form-control" id="location" placeholder='Luxor, Egypt' />
          </div>
          <div className="trip-input mb-3">
            <label for="highlights" className="form-label">Notes</label>
            <textarea name="note" className="form-control" id="highlights" rows="3" placeholder='Explore ...'></textarea>
          </div>
          {/* Add a Trip + Button */}
          <button id="create-trip-btn" type="submit" onClick={handleFormSubmit} className="create-trip btn">Create trip +</button>
        </div>
      </div>
    </div>
  )
}

export default AddTrip;


