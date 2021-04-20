import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function LoginForm({ setLoggedIn }){
        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
         

       
        
        function handleSubmit(event) {
           event.preventDefault();
             const formData = { 
             username,
             password,
           }

           console.log(formData);

         }

         fetch(/* blabla, */ { 
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
            'Accept': 'application/json'
    
          },
          Body: JSON.stringify(formData)
          .then(response => response.json)
          .then(response => console.log(response))
        }) 


         return (
           <form onSubmit={handleSubmit}>
             <h1>Login</h1>
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
             <input type="submit" value="login" />
           </form>
         );
}

export default LoginForm;