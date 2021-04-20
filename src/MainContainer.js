import Search from './Search';
import EventList from './EventList';
import Profile from './Profile'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react';


function MainContainer(){

const [events, setEvents] = useState([])

useEffect(() =>{
    fetch('http://localhost:3000/events')
        .then(res => res.json())
        .then(setEvents)
}, [])

    return(
        <div className="main-container">
        <h1>MAIN CONTAINER</h1>
            <Search />
            <EventList events={events}/>
        </div>
    )
}

export default MainContainer;