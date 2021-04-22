import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import styled, { ThemeProvider } from "styled-components";
import { Button, ButtonGroup } from "@chakra-ui/react"

const Div = styled.div`
    border: 1px solid;
    `


function ProfileEventCard({ event, eventListing, onHandleRemove }){
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)

    // const [curEvent, setCurEvent] = useState(event)
    const [displayComments, setDisplayComments] = useState(false)
    const [booked, setBooked] = useState(false)
    const [seen, setSeen] = useState(false)

    function handleUpdate(e){
        setBooked(booked => !booked)
        setSeen(seen => !seen)
        console.log(e.target.name)
        console.log(e.target.value)
 
        fetch(`http://localhost:3000/event_listings/${eventListing.id}`, {
             method: 'PATCH',
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             body: JSON.stringify({[e.target.name]: e.target.value})
         })
            .then(res => res.json())
            .then(console.log)
    }

    function handleDelete(){

        console.log(eventListing.id)
        
        fetch(`http://localhost:3000/event_listings/${eventListing.id}`, {
             method: 'DELETE'
             })
             .then(data => {onHandleRemove(eventListing.id)})
    }

    return(
        <Div className="card">
            <h3>{event.title}</h3>
           <a href={`/events/${event.id}`}>
            <img src={event.image} alt={event.title} style={{width: "300px"}}/></a>
              
         {/* <NavLink 
            to={`/events/${event.id}`}
            exact 
            >Event Page</NavLink> */}

            { eventListing.booked ? <Button name="booked" value={false} onClick={handleUpdate}>already booked</Button> : <Button name="booked" value={true} onClick={handleUpdate}>book it</Button> }

           {eventListing.seen ? <p>seen</p> : <Button name="seen" value={true} onClick={handleUpdate}>Seen</Button>}
            <Button onClick={handleDelete}>Delete</Button>
        </Div>
    )
}

export default ProfileEventCard;