import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function LoginForm({ setLoggedIn, handleUser }){
        const [email, setEmail] = useState("");
        // const [password, setPassword] = useState("")
         

  
        
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
              setLoggedIn(true)
              // setCurrentUser(response)
              // setLoggedIn(true)
              // console.log(currentUser)
              
            }) 

         }


         return (
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
         );
}

export default LoginForm;