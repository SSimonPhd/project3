import React from 'react';
import './styles/welcome.scss';

function Welcome() {
  return (
    <div>
      <div className="welcome-background container-fluid bg-image">
        <div className="row w-100 h-100">
          <div className="col-sm h-100 d-flex flex-column justify-content-center align-items-center ml-5">
            <h2 className='welcome-title text-white'>WELCOME</h2>
            <p className='text-white'>Let your adventure begin!</p>
          </div>

          <div className="col-sm h-100 d-flex flex-column justify-content-center align-items-center ml-5">
            <button type="button" class="welcome-btn btn-outline-light btn-lg m-2">EXPLORE CHATS</button>
            <button type="button" class="welcome-btn btn-outline-light btn-lg m-2">ADD A TRIP</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome;