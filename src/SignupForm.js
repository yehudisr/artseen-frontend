import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function SignupForm(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();
          const formData = { 
          username,
          password,
          firstname,
          lastname
        }
        console.log(formData);
      }
      return (
        <form onSubmit={handleSubmit}>
          <h1>Create your Account</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input type="submit" value="Sign Up" />
        </form>
      );
}

export default SignupForm;