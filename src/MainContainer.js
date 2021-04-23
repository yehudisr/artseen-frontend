import Search from './Search';
import EventList from './EventList';
import Profile from './Profile'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import {Route, Switch} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Container } from "@chakra-ui/react"


function MainContainer(){
const [events, setEvents] = useState([])
const [search, setSearch] = useState('')
console.log(events)
useEffect(() =>{
    fetch('http://localhost:3000/events')
        .then(res => res.json())
        .then(setEvents)
}, [])
console.log(events)

const handleSearch = (e) => setSearch(e)

const filterEvents = events.filter(event =>
    event.title.toLowerCase().includes(search.toLowerCase())
  )


    return(
        <Container maxW="xl" centerContent>
            <Search search={search} handleSearch={handleSearch} />
            <EventList  events={filterEvents}/>
        </Container>
    )
}

export default MainContainer;