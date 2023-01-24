import React from 'react';
import './trip.scss'
import { motion } from 'framer-motion';

const Trip = (props) => {
  return (
    // added this col from Profile and commented out in profile
    <div className='trip-column col-sm w-75 d-flex flex-row justify-content-around'>
      <div className="trip-card card">
        <div className="card-body text-center">
          <h5 className="card-title">{props.location}</h5>
          <p className="card-text">Notes: {props.note}</p>
          {/* <button type="button" className="btn btn-primary me-2">Update</button> */}
          <motion.button 
          type="button"
          className="delete-btn"
          data-id={props.id}
          onClick={props.onDelete}
          whileHover={{
            scale: 1.05,
            transition:{duration: 0.3}}}
            >
            DELETE
            </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Trip;