import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import styled, { ThemeProvider } from "styled-components";

const Div = styled.div`
    border: 1px solid;
    `


function EventCard({ event, currentUser }){


    const {title, id, comments, image} = event
    const [displayComments, setDisplayComments] = useState(false)

    function toggleComments(){
        setDisplayComments(displayComments => !displayComments)
    }

    function handleSave(){
      
       
        fetch(`http://localhost:3000/users/${currentUser.id}/events`, { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
      
            },
            body: JSON.stringify({event_id: id, user_id: currentUser.id, saved: true})
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

            <button onClick={toggleComments}>show comments</button>

            <button onClick={handleSave}>Save</button>


           { displayComments && <Comments comments={comments} eventId={id} currentUser={currentUser}/>}
        </Div>
    )
}

export default EventCard;