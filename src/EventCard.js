
import { NavLink} from 'react-router-dom'
import Comments from './Comments'
import styled, { ThemeProvider } from "styled-components";

const Div = styled.div`
    border: 1px solid;
    `


function EventCard({ event }){


    const {title, id, comments, image} = event
    // const displayComments = comments.map(comment => <p>{comment.content}</p>
    // )

    function handleSave(){
        fetch("http://localhost:3000/event_listings")
    }

    return(
        <Div className="card">
            <h3>{title}</h3>
            <img src={image} alt={title} style={{width: "300px"}}/>
              
         <NavLink 
            to={`/events/${id}`}
            exact 
            >Event Page</NavLink>

            <button onClick={handleSave}>Save</button>


            <Comments comments={comments} />
        </Div>
    )
}

export default EventCard;