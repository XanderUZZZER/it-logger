import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a name and last name' });
    } else {
      console.log(firstName, lastName);

      // Clear fields
      setFirstName('');
      setLastName('');
    }
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First name
            </label>
          </div>
          <div className="row">
            <div className="input-field">
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
              />
              <label htmlFor="lastName" className="active">
                Last name
            </label>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  )
};

export default AddTechModal
