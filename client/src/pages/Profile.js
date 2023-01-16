import React from 'react';
//TODO: work on getting trip information from the database
//TODO: create individual trip component
//TODO: decide where/how to update & delete trip data

function Profile() {

  return (
    <div className='container-sm'>
      {/* Title */}
      <h2 className='text-center mt-5'>Your Upcoming Trips</h2>

      {/* Option #1 -- Trips as buttons --> click button and takes you to a new page to read/update/delete trip */}
      <div className='row mt-5 h-75 d-flex flex-row justify-content-center'>
        <div className='col-sm w-75 d-flex flex-row justify-content-around'>
          {/* Here's where the trip data will be presented -- example mock up below */}

          {/* < Trip /> */}
          <button type="button" class="btn btn-primary btn-lg">Maldives</button>
          <button type="button" class="btn btn-primary btn-lg">Maldives</button>
          <button type="button" class="btn btn-primary btn-lg">Maldives</button>
        </div>
      </div>

      {/* Option #2 -- Trips as cards --> click update/delete to change data, read on this page */}
      <div className='row mt-5 h-75 d-flex flex-row justify-content-center'>
        <div className='col-sm w-75 d-flex flex-row justify-content-around'>
          {/* Here's where the trip data will be presented -- example mock up below */}

          {/* < Trip /> */}
          <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Maldives</h5>
                <p class="card-text">Notes: snorkeling, sunsets, food</p>
                <button type="button" class="btn btn-primary me-2">Update</button>
                <button type="button" class="btn btn-primary">Delete</button>
              </div>
          </div>
          
          <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Maldives</h5>
                <p class="card-text">Notes: snorkeling, sunsets, food</p>
                <button type="button" class="btn btn-primary me-2">Update</button>
                <button type="button" class="btn btn-primary">Delete</button>
              </div>
          </div>

          <div class="card">
              <div class="card-body text-center">
                <h5 class="card-title">Maldives</h5>
                <p class="card-text">Notes: snorkeling, sunsets, food</p>
                <button type="button" class="btn btn-primary me-2">Update</button>
                <button type="button" class="btn btn-primary">Delete</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;