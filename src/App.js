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
  const [currentUser, setCurrentUser] = useState(null)

  function handleUser(user){
    setCurrentUser(user)
   
  }


  return (
    <div className="App">
     <Header />
       <Navbar onChangePage={setPage} /> 
      <Switch>
        <Route exact path="/profile/:id">
          <Profile currentUser={currentUser}/>
        </Route>
        <Route exact path="/events/:id">
          <EventPage />
        </Route>
        <Route exact path="/login">
        <LoginForm handleUser={handleUser}/>
        </Route>
        <Route exact path="/">
          <MainContainer currentUser={currentUser} />
        </Route> 
      </Switch>
    </div>
     );
}

export default App;



