import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import styled, { ThemeProvider } from "styled-components";

const Div = styled.div`
    border: 1px solid;
    `


function ProfileEventCard({ event, currentUser }){

    console.log(event)
    const {title, id, comments, image} = event
    const [displayComments, setDisplayComments] = useState(false)


    function handleBooked(){
      
       
        fetch(`http://localhost:3000/users/${currentUser.id}/events`, { 
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
      
            },
            body: JSON.stringify({event_id: id, user_id: currentUser.id, saved: true, booked: true, seen: false})
            })
            .then (res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    function handleSeen(){
      
       
        fetch(`http://localhost:3000/users/${currentUser.id}/events`, { 
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
      
            },
            body: JSON.stringify({event_id: id, user_id: currentUser.id, saved: true, booked: true, seen: false})
            })
            .then (res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return(
        <Div className="card">
            <h3>{title}</h3>
            <img src={image} alt={title} style={{width: "300px"}}/>
              
         <NavLink 
            to={`/events/${id}`}
            exact 
            >Event Page</NavLink>

            <button onClick={handleBooked}>Booked</button>

            <button onClick={handleSeen}>Seen</button>
        </Div>
    )
}

export default ProfileEventCard;