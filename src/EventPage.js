import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Button, ButtonGroup, Box, Image, Badge, Flex, Spacer, WrapItem, Heading, Text } from "@chakra-ui/react";
import NoDescriptionAvailable from './NoDescriptionAvailable'

function EventPage(){
    const [event, setEvent] = useState({})
    const { id } = useParams();
   
    useEffect(()=>{
        fetch(`http://localhost:3000/events/${id}`)
            .then(res => res.json())
            .then(setEvent)
    }, [])
    const {title, description, image, date_to_display} = event

    console.log(description)
    console.log(date_to_display)
   
    return(
        
        <Flex direction="column" className="event-detail" justifyContent="center">
             <Heading margin="5">{title}</Heading>
            
            <Flex>
                <Flex direction="column">
                    <Image src={image} alt={title} style={{width: "300px"}} padding="2" marginLeft="17" />
                    
                    <strong>{date_to_display}</strong>
            
                </Flex>
                { description ? <Text>{description}</Text> : <NoDescriptionAvailable/>}
            </Flex>
            
        </Flex>
       
    )
}

export default EventPage;