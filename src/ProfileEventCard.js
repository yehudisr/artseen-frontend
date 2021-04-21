import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import styled, { ThemeProvider } from "styled-components";

const Div = styled.div`
    border: 1px solid;
    `


function ProfileEventCard({ event, eventListing }){
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)

    // const [curEvent, setCurEvent] = useState(event)
    const [displayComments, setDisplayComments] = useState(false)
    const [booked, setBooked] = useState(false)
    const [seen, setSeen] = useState(false)
   


    // function handleBooked(){
      
       
    //     fetch(`http://localhost:3000/users/${currentUser.id}/events`, { 
    //         method: 'PATCH',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'
      
    //         },
    //         body: JSON.stringify({event_id: id, user_id: currentUser.id, saved: true, booked: true, seen: false})
    //         })
    //         .then (res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })

    // }

    // function handleUpdate(){
      
       
    //     fetch(`http://localhost:3000/users/${currentUser.id}/events`, { 
    //         method: 'PATCH',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Accept': 'application/json'
      
    //         },
    //         body: JSON.stringify({event_id: id, user_id: currentUser.id, saved: true, booked: true, seen: false})
    //         })
    //         .then (res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })

    // }

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

    }

    return(
        <Div className="card">
            <h3>{event.title}</h3>
            <img src={event.image} alt={event.title} style={{width: "300px"}}/>
              
         <NavLink 
            to={`/events/${event.id}`}
            exact 
            >Event Page</NavLink>

            { eventListing.booked ? <button name="booked" value={false} onClick={handleUpdate}>already booked</button> : <button name="booked" value={true} onClick={handleUpdate}>book it</button> }

           {eventListing.seen ? <p>seen</p> : <button name="seen" value={true} onClick={handleUpdate}>Seen</button>}
            {/* <button name="seen" value={true} onClick={handleDelete}>Delete</button> */}
        </Div>
    )
}

export default ProfileEventCard;