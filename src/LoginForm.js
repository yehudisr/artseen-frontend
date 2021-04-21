import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './SignupForm'
import { useHistory } from "react-router-dom"

function LoginForm({ handleUser }) {

  const initialState = {
    email: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialState)


  const [showSignup, setShowSignup] = useState(false)

  const history = useHistory()

  function handleSignupToggle() {
    setShowSignup(showSignup => !showSignup)
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:3000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'

      },
      body: JSON.stringify(formData)

    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        handleUser(res)
        history.push('/')
      })

  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  return (

    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <input type="submit" value="login" />
      </form>

      <button onClick={handleSignupToggle}>Signup</button>


      { showSignup && <SignupForm handleUser={handleUser} />}

    </div>
  );
}

export default LoginForm;