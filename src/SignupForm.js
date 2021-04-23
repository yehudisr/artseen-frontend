import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom'

function SignupForm({ handleUser }){

const history = useHistory()

    const initialState = {
      email: "",
      password: "",
      firstname: "",
      lastname: ""
    }

    const [formData, setFormData] = useState(initialState)

    function handleSubmit(event) {
      event.preventDefault();
      
      console.log(formData);

    fetch(`http://localhost:3000/users`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(formData)
      }) 
        .then(res => res.json)
        .then(res => {
              
              handleUser(res)
              history.push('/')
        })
   

        setFormData(initialState)
      }

      function handleChange(e){
        setFormData({
          ...formData,
            [e.target.name]: e.target.value
        })
      }

      return (
        <form onSubmit={handleSubmit}>
          <h1>Create your Account</h1>
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
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          <input type="submit" value="signup" />
        </form>
      );
}

export default SignupForm;