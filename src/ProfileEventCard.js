import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import { Button, ButtonGroup, Box, Image, Badge, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { AddIcon, WarningIcon, DeleteIcon, CheckCircleIcon, CheckIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


function ProfileEventCard({ event, eventListing, onHandleRemove }){
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)

    // const [curEvent, setCurEvent] = useState(event)
    const [displayComments, setDisplayComments] = useState(false)
    // const [booked, setBooked] = useState(eventListing.booked)
    // const [seen, setSeen] = useState(eventListing.saved)

    function handleUpdate(e){

       e.preventDefault()

        // if (e.target.value === "booked"){
        //     setBooked(booked => !booked)
        // } else if (e.target.value === "seen"){
        //     setSeen(seen => !seen)
        // }
       console.log(e)
        console.log(e.target.name)
        console.log(e.target.value)
 
        fetch(`http://localhost:3000/event_listings/${eventListing.id}`, {
             method: 'PATCH',
             headers: {
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             },
             body: JSON.stringify({[e.target.name]: e.target.value})
         })
            .then(res => res.json())
            .then(console.log)
    }

    function handleDelete(){

        console.log(eventListing.id)
        
        fetch(`http://localhost:3000/event_listings/${eventListing.id}`, {
             method: 'DELETE'
             })
             .then(data => {onHandleRemove(eventListing.id)})
    }

    return(

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
           
            <a href={`/events/${event.id}`}>
            <Image src={event.image} alt={event.title}/>
             </a>
               <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                     New
                    </Badge>
                 <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
                >
                {event.date_to_display}
            </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
           {event.title}
        </Box>

        <Box>
          description logic goes here
        </Box>

        <Box>
          
            <Flex>
                <Box p="2">
                 {eventListing.booked ? <Button name="booked" value={false} onClick={handleUpdate}>already booked</Button> : <Button name="booked" value={true} onClick={handleUpdate}>book it</Button> } 

                </Box>
                  
                <Box p="2">
                { 
                eventListing.seen ? 
                <Button name="seen" value={false} onClick={handleUpdate}>seen</Button> : <Button name="seen" value={true} onClick={handleUpdate} > Not seen</Button>}
                </Box> <Spacer />
               
               <Box p="2" >
                 <IconButton icon={<DeleteIcon/>} onClick={handleDelete}/>
                </Box>
            </Flex>
            
        </Box>
        </Box>
        </Box>  
    ) 
}

export default ProfileEventCard;