import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function SignupForm(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
        const formData = { 
        email,
        password,
        firstname,
        lastname
      }
      console.log(formData);

    fetch(`http://localhost:3000/users`, { 
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
       Body: JSON.stringify(formData)
      .then(response => response.json)
      .then(response => console.log(response))
    }) 

      }
      return (
        <form onSubmit={handleSubmit}>
          <h1>Create your Account</h1>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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