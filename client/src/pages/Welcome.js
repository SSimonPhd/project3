import React from 'react';
import './styles/welcome.scss';

function Welcome() {
  return (
    <div>
      <div className="world-background container bg-image">
        <div className="row w-100 h-100">
          <div className="col-sm h-100 d-flex flex-column justify-content-center align-items-center">
            <h2 className='text-white'>Welcome</h2>
            <p className='text-white'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          <div className="col-sm d-flex flex-column justify-content-center align-items-center">
            <button type="button" class="btn btn-primary m-2">Explore chats</button>
            <button type="button" class="btn btn-primary m-2">Add a trip +</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;