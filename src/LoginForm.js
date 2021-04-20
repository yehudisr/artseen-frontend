import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function LoginForm({ setLoggedIn, setCurrentUser }){
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("")
         

        const formData = { 
          email,
          password,
        }
        console.log(formData)
        
        function handleSubmit(event) {
           event.preventDefault();
             
           fetch(`http://localhost:3000/users`, { 
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
      
            },
            Body: JSON.stringify(formData)
            
            })

            .then(response => response.json())
            .then(response => console.log(response)) 

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
             <label htmlFor="password">Password</label>
             <input
               type="password"
               id="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
             />
             <input type="submit" value="login" />
           </form>
         );
}

export default LoginForm;