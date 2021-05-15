import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Button, ButtonGroup, Box, Image, Badge, Flex, Spacer, WrapItem, Heading, Text } from "@chakra-ui/react";

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
        
        <Flex direction="column" className="event-detail" justifyContent="center">
             <Heading margin="5">{title}</Heading>
            
            <Flex>
                <Image src={image} alt={title} style={{width: "300px"}} padding="2" />
                <strong>{date_to_display}</strong>
                <Text>{description}</Text>
            </Flex>
            
        </Flex>
       
    )
}

export default EventPage;