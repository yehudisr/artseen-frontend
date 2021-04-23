import { Route, Switch, NavLink, Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { Button, ButtonGroup, Box, Flex, Spacer } from "@chakra-ui/react";

// const linkStyles = {
//   width: "100px",
//   padding: "12px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// }



function NavBar({loggedIn, setLoggedIn}) {

  const getUser = localStorage.getItem('user')
  const currentUser = JSON.parse(getUser)
  const history = useHistory()


  const handleLogout = () => {
    localStorage.removeItem('user')
    history.push('/')
    setLoggedIn(false)
  }
// if (currentUser){
  return (
    <div>
   {loggedIn ? (<Flex>
    <Box p="4" >
      <NavLink
        to='/events'
        exact
        
      > Events</NavLink>
      </Box>
    <Box p="4" >
      <NavLink
        to={`/profile/${currentUser.id}`}
        exact
        
      >My Events</NavLink>
      </Box>
      <Box p="4" >
      <button onClick={handleLogout}>Logout</button>
      </Box>
    </Flex>) : (<Flex> <Box p="4" >
      <NavLink
        to={'/login'}
        exact
      >Login</NavLink>
      </Box>
      <Box p="4" >
      <NavLink
        to={'/signup'}
        exact
      >Signup</NavLink>
      </Box>
      </Flex>) } 
      </div>
      )
   
 

}
  

export default NavBar;

