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
  const [page, setPage] = useState("/")


  function handleUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
  }
  const getUser = localStorage.getItem('user')

  const currentUser = JSON.parse(getUser)


  return (
  
        <div className="App">
          <Header />
          <Navbar onChangePage={setPage} currentUser={currentUser} />
          <Switch>
            <Route exact path="/profile/:id">
              <Profile  />
            </Route>
            <Route exact path="/">
              <MainContainer currentUser={currentUser} />
            </Route>
            <Route exact path="/events/:id">
              <EventPage />
            </Route>
            <Route exact path="/login">
              <LoginForm handleUser={ handleUser } />
            </Route>
          </Switch>
        </div >
  );
}

export default App;



