import Search from './Search';
import EventList from './EventList';
import Profile from './Profile'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react';


function MainContainer({currentUser}){

const [events, setEvents] = useState([])
const [search, setSearch] = useState('')

useEffect(() =>{
    fetch('http://localhost:3000/events')
        .then(res => res.json())
        .then(setEvents)
}, [])

const handleSearch = (e) => setSearch(e)

const filterEvents = events.filter(event =>
    event.description.toLowerCase().includes(search.toLowerCase())
  )

    return(
        <div className="main-container">
        <h1>MAIN CONTAINER</h1>
            <Search search={search} handleSearch={handleSearch} />
            <EventList currentUser={currentUser} events={filterEvents}/>
        </div>
    )
}

export default MainContainer;