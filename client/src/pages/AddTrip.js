import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_TRIP } from '../utils/mutations';

function AddTrip() {
	let navigate = useNavigate();

  const [formState, setTripData] = useState({
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

      navigate(`/profile`)
    } catch (err){
      console.error(err);
    }
    const { name, value } = event.target;

    setTripData({
      ...formState, 
      [name]:value,
    });
  }
 
  return (
    <div className='container-sm'>
      {/* Title  */}
      <h2 className='text-center mt-5'>Add a Trip</h2>

      {/* Form to Add a Trip */}
      <div className='row'>
        <div className='col w-50 d-flex flex-column align-items-center justify-contents-center'>
          <div className="mb-3 w-50">
            <label for="location" className="form-label">Location</label>
            <input name="location" type="text" className="form-control" id="location"  />
          </div>
          <div className="mb-3 w-50">
            <label for="highlights" className="form-label">Notes</label>
            <textarea name="note" className="form-control" id="highlights" rows="3"></textarea>
          </div>
          {/* Add a Trip + Button */}
          <button type="submit" onClick={handleFormSubmit} className="btn btn-primary p-2">Create trip +</button>
        </div>
      </div>
    </div>
  )
}

export default AddTrip;


