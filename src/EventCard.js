import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import styled, { ThemeProvider } from "styled-components";
import { Button, ButtonGroup } from "@chakra-ui/react"
const Div = styled.div`
    border: 1px solid;
    `
function EventCard({ event }){
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)
    const {id, title, comments, image} = event
    const [displayComments, setDisplayComments] = useState(false)
    const [saved, setSaved] = useState(false)


    function toggleComments(){
        setDisplayComments(displayComments => !displayComments)
    }
    function handleSave(){
        
        fetch(`http://localhost:3000/event_listings`, { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({  user_id: currentUser.id, event_id: id, saved: true, booked: false, seen: false})
            })
            .then (res => res.json())
            .then(data => {
                if (data.id === null){
                alert("you already saved this event!")
                } else
                {console.log(data)}
            })
           
            // setSaved(true)
    }
    return(
        <Div className="card">
            <h3>{title}</h3>
            <a href={`/events/${id}`}>
            <img src={image} alt={title} style={{width: "300px"}}/></a>
         {/* <NavLink 
            to={`/events/${id}`}
            exact 
            >Event Page</NavLink> */}
            <Button onClick={toggleComments}>show comments</Button>
            {!saved && (<Button bg="blue" onClick={() => handleSave(event)}>Save</Button>)}
           { displayComments && <Comments comments={comments} eventId={id} currentUser={currentUser}/>}
        </Div>
    )
}
export default EventCard;