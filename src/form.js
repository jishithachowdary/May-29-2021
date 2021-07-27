import React, { useState, useEffect } from 'react';
import { Button, UncontrolledAlert } from 'reactstrap';
import './style.css';

export default function Form() {
  const [fname, setName] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState(false);

  const handleSubmit = evt => {
    console.log('submitt');
    evt.preventDefault();
    alert('submitting');
    setState(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={fname}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lname}
            onChange={e => setLname(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Pincode:
          <input
            type="text"
            value={pincode}
            onChange={e => setPincode(e.target.value)}
          />
        </label>
        <br />
        <br />
        <Button type="submit" color="primary">
          Submitt
        </Button>
      </form>
      {state && (
        <div>
          <UncontrolledAlert color="info" fade={false}>
            sucessfully submitted
          </UncontrolledAlert>
          <p>Details submitted are</p>
          <p>First Name-{fname} </p>
          <p>Last Name-{lname} </p>
          <p>Email-{email} </p>
          <p>Phone Number-{phone} </p>
          <p>City-{city}</p>
          <p>Pincode={pincode}</p>
        </div>
      )}
    </div>
  );
}
