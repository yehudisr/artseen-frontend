import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Spacer, Container } from "@chakra-ui/react";

function EventPage(){
    const [event, setEvent] = useState({})
    const { id } = useParams();
   
    useEffect(()=>{
        fetch(`http://localhost:3000/events/${id}`)
            .then(res => res.json())
            .then(setEvent)
    }, [])
    const {title, description, image, date_to_display} = event
   
    return(
        
       <Container maxW="container.sm" centerContent>
          <Box padding="4">
         
            <img src={image} alt={title} style={{width: "300px"}}/>

             <Box padding="4"><h1>{title}</h1></Box>
            <strong>{date_to_display}</strong>
            <p>{description}</p>
       </Box>
    </Container>
       
    )
}

export default EventPage;