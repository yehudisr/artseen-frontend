import { Route, Switch, NavLink, Redirect, useHistory } from 'react-router-dom';
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



function NavBar({ currentUser }) {

  const history = useHistory()
  const handleLogout = () => {
    localStorage.removeItem('user')
    history.push('/login')
  }
if (currentUser){
  return (
    <div>
      <NavLink
        to='/'
        exact
        style={linkStyles}
      >Search Events</NavLink>

      <NavLink
        to={`/profile/${currentUser.id}`}
        exact
        style={linkStyles}
      >My Events</NavLink>

      <button onClick={handleLogout}>logout</button>
    </div>
  )
} else {
  return <div/>
}
}
  

export default NavBar;

