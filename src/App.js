import './App.css';
import Header from './Header';
import MainContainer from './MainContainer';
import { Route, Switch } from "react-router-dom";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import React, { useState, useEffect } from "react"
import Profile from "./Profile";
import EventPage from "./EventPage";
import { useHistory } from 'react-router-dom';



function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory()
  const getUser = localStorage.getItem('user')
  const currentUser = JSON.parse(getUser)

  function handleUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
    history.push('/events')
    setLoggedIn(true)
  }
 

  return (
  
        <div className="App">
         <Route>
              <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} path="/"/>
           </Route>
          <Switch>
            
            <Route exact path="/profile/:id">
              <Profile  />
            </Route>
            <Route exact path="/events">
              <MainContainer />
            </Route>
            <Route exact path="/events/:id">
              <EventPage />
            </Route>
            <Route exact path="/login">
              <LoginForm handleUser={ handleUser } />
            </Route>
             <Route exact path="/signup">
            <SignupForm handleUser={handleUser} />
            </Route>
            
          </Switch>
        </div >
  );
}

export default App;



