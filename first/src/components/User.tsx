import React from 'react';
import logo from './logo.svg';
import '../User.css'

interface UserData {
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  email: string;
  gender?: string
}

function User({firstName, lastName, dateOfBirth, email, gender}: UserData) {
    return (
      <div className="container">
        <h3>first name: { firstName }</h3>
        <h3>last name: { lastName }</h3>
        <h3>Date of Birth:{ dateOfBirth }</h3>
        <h3>Email: { email }</h3>
        <h3>Gender: { gender }</h3>
      </div>
    );
  }
  
  export default User;