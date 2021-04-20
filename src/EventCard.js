
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

    return(
        <Div className="card">
            <h3>{title}</h3>
            <img src={image} alt={title} style={{width: "300px"}}/>
              
         <NavLink 
            to={`/events/${id}`}
            exact 
            >Event Page</NavLink>


            <Comments comments={comments} />
        </Div>
    )
}

export default EventCard;