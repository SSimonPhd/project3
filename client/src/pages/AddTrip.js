import React from 'react';

function AddTrip() {
  return (
    <div className='container-sm'>
      {/* Title  */}
      <h2 className='text-center mt-5'>Add a Trip</h2>

      {/* Form to Add a Trip */}
      <div className='row'>
        <div className='col w-50 d-flex flex-column align-items-center justify-contents-center'>
          <div class="mb-3 w-50">
            <label for="location" class="form-label">Location</label>
            <input type="text" class="form-control" id="location" placeholder="Maldives" />
          </div>
          <div class="mb-3 w-50">
            <label for="highlights" class="form-label">Notes</label>
            <textarea class="form-control" id="highlights" rows="3" placeholder='Write your must see/do activities'></textarea>
          </div>
          {/* Add a Trip + Button */}
          <button type="button" class="btn btn-primary p-2">Create trip +</button>
        </div>
      </div>
    </div>
  )
}

export default AddTrip;


