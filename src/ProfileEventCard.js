import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import styled, { ThemeProvider } from "styled-components";

const Div = styled.div`
    border: 1px solid;
    `


function ProfileEventCard({ event }){
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)

    // const [curEvent, setCurEvent] = useState(event)
    const [displayComments, setDisplayComments] = useState(false)


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

    // function handleSeen(){
      
       
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
        const newObj = {
            [e.target.name]: e.target.value,
            user_id: currentUser.id,
            event_id: event.id
        }
        console.log(newObj)
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

            <button name="booked" value={true} onClick={handleUpdate}>Booked</button>

            <button name="seen" value={true} onClick={handleUpdate}>Seen</button>
            <button name="seen" value={true} onClick={handleDelete}>Delete</button>
        </Div>
    )
}

export default ProfileEventCard;