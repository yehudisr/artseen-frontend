import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

function EventPage(){
    const [event, setEvent] = useState({})
    const { id } = useParams();
    console.log(id)
    useEffect(()=>{
        fetch(`http://localhost:3000/events/${id}`)
            .then(res => res.json())
            .then(setEvent)
    }, [])
    const {title, description, image, date_to_display} = event
    console.log(event)
    return(
        
        <div className="event-detail">
             <h1>{title}</h1>
            <img src={image} alt={title} style={{width: "300px"}}/>
            <strong>{date_to_display}</strong>
            <p>{description}</p>
            {/* <link href={link}>Event Site</link> */}
        </div>
       
    )
}

export default EventPage;