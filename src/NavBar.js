import { Route, Switch, NavLink } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  }

 

function NavBar({ loggedIn }){

    const [showLogin, setShowLogin] = useState(false)
    const [showSignup, setShowSignup] = useState(false)
  
  
    function handleLoginToggle(){
      setShowLogin(showLogin => !showLogin)
    }
  
    function handleSignupToggle(){
      setShowSignup(showSignup => !showSignup)
    }

    return(
       <div>

            { !loggedIn && (
            <>
           <button onClick={handleLoginToggle}>Login</button>
           <button onClick={handleSignupToggle}>Signup</button>
           
            </>)}

            {showSignup && <SignupForm />}
            {showLogin && <LoginForm />}

           { loggedIn &&  
           <>
            <NavLink 
            to='/events'
            exact
            style={linkStyles} 
            >Search Events</NavLink>

           <NavLink 
           to='/profile'
           exact
           style={linkStyles} 
            >My Events</NavLink>

            </>
            }

       </div>
    )
}

export default NavBar;

{/* <NavLink 
to='/login'
exact
style={linkStyles} 
 >Login</NavLink>
 <NavLink 
to='/signup'
exact
style={linkStyles} 
 >Signup</NavLink> */}