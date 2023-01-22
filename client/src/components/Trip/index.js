import React from 'react';

const Trip = (props) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <h5 className="card-title">{props.location}</h5>
        <p className="card-text">{props.note}</p>
        {/* <button type="button" className="btn btn-primary me-2">Update</button> */}
        <button type="button" className="btn btn-primary" data-id={props.id} onClick={props.onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Trip;