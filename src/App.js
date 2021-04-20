import './App.css';
import Header from './Header';
import MainContainer from './MainContainer';
import { Route, Switch } from "react-router-dom";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Navbar from "./NavBar";
import React, { useState } from "react"
import Profile from "./Profile";
import EventPage from "./EventPage";


function App() {
  const [page, setPage] = useState("/events")
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState({})


  return (
    <div className="App">
      <Header />
       <Navbar onChangePage={setPage} loggedIn={loggedIn}/>
      <Switch>
        <Route exact path="/login">
          <LoginForm setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/events">
          <MainContainer />
        </Route> 
        <Route exact path="/events/:id">
          <EventPage />
        </Route>
      </Switch>
      
      
    </div>
     );
}

export default App;



