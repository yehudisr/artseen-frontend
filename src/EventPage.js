import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Button, ButtonGroup, Box, Image, Badge, Flex, Spacer, WrapItem, Heading, Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

function EventPage(){
    const [event, setEvent] = useState({})
    const { id } = useParams();
   
    useEffect(()=>{
        fetch(`http://localhost:3000/events/${id}`)
            .then(res => res.json())
            .then(setEvent)
    }, [])
    const {title, description, image, date_to_display, link="https://www.artic.edu/"} = event
    
    

   
    return(
        
        <Flex direction="column" className="event-detail" justifyContent="center" alignItems="center" marginBottom="25px" >
             <Heading margin="5"  >{title}</Heading>
            
            
                <Flex direction="column" alignItems="center">
                    <Image src={image} alt={title} style={{width: "300px"}} padding="2" marginLeft="17" />
                    <Flex direction="row">
                    <Link href={link} isExternal>
                     <ExternalLinkIcon mx="2px" />
                </Link>
                    <strong>{date_to_display}</strong>
                     </Flex>
                </Flex>
                <Flex className="description" >
                {/* <Heading margin="5">{title}</Heading> */}
                { description }   
                </Flex>
          
            
        </Flex>
       
    )
}

export default EventPage;