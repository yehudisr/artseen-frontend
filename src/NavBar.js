import { Route, Switch, NavLink, Redirect, useHistory } from 'react-router-dom';
import { useState } from 'react';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { Button, ButtonGroup, Box, Flex, Spacer } from "@chakra-ui/react";

const linkStyles = {
  width: "100px",
  padding: "8px",
  // margin: "0 6px 6px",
  textDecoration: "none",
  color: "white",
  fontSize: "14px"
}



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
   {currentUser || loggedIn ?  (<Flex>
    <Box p="4" >
      <NavLink style={linkStyles}
        to='/events'
        exact
        
      > Events</NavLink>
      </Box>
    <Box p="4" >
      <NavLink style={linkStyles}
        to={`/profile/${currentUser.id}`}
        exact
        
      >My Events</NavLink>
      </Box>
      <Box p={4}>
      <button style={linkStyles} onClick={handleLogout}>Logout</button>
      </Box>
    </Flex>) : (<Flex> <Box p="4" >
      <NavLink style={linkStyles}
        to={'/login'}
        exact
      >Login</NavLink>
      </Box>
      <Box p="4" >
      <NavLink style={linkStyles}
        to={'/signup'}
        exact
      >Signup</NavLink>
      </Box>
      </Flex>) } 
      </div>
      )
   
 

}
  

export default NavBar;

