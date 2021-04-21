import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './SignupForm'
import { useHistory } from "react-router-dom"

function LoginForm({ setLoggedIn, handleUser }){
        const [email, setEmail] = useState("");
        // const [password, setPassword] = useState("")
         

        const [showSignup, setShowSignup] = useState(false)

        const history = useHistory()

        function handleSignupToggle(){
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
            body: JSON.stringify({email: email})
            
            })

            .then(response => response.json())
            .then(response => {
              handleUser(response)
              history.push('/')
            }) 

         }


         return (

          <div>
              <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /> */}
                <input type="submit" value="login" />
              </form>

                <button onClick={handleSignupToggle}>Signup</button>
                  
                          
                { showSignup && <SignupForm />}

              </div>
         );
}

export default LoginForm;