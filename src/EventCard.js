import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import styled, { ThemeProvider } from "styled-components";

const Div = styled.div`
    border: 1px solid;
    `


function EventCard({ event }){


    const {title, id, comments, image} = event
    const [displayComments, setDisplayComments] = useState(false)

    function toggleComments(){
        setDisplayComments(displayComments => !displayComments)
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

           { displayComments && <Comments comments={comments} eventId={id}/>}
        </Div>
    )
}

export default EventCard;