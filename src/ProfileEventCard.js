import { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import { Button, ButtonGroup, Box, Image, Badge, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { AddIcon, WarningIcon, DeleteIcon, CheckCircleIcon, CheckIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


function ProfileEventCard({ event, eventListing, onHandleRemove }){
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)
    const [displayComments, setDisplayComments] = useState(false)
    const [descPreview, setDescPreview] = useState("")

    useEffect(() => {
        // console.log(description.substring(0, 100))
         if (event.description === null || undefined) {
          setDescPreview(descPreview => "No Description Available")
        } else if(event.description.length > 200){
          const desc = event.description.substring(0, 100) + "..."
          setDescPreview(descPreview => desc)
        } else {
          setDescPreview(descPreview => event.description)
        }
      }, [])
  

    function handleUpdate(e){

       e.preventDefault()
 
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

    function imagePath(){
        window.location = `/events/${event.id}`
    }

    return(

        <Flex direction="column" w="350px" h="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" justifyContent="center">
           
           
            <Image 
            src={event.image} 
            alt={event.title}
            onClick={imagePath}
            height="200px"
            // fit="fill"
            />
             
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
          {descPreview}
        </Box>

        <Box>
          
            <Flex>
                <Box p="2">
                 {eventListing.booked ? <Button name="booked" value={false} onClick={handleUpdate}>booked</Button> : <Button name="booked" value={true} onClick={handleUpdate}>book it</Button> } 

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
        </Flex>  
    ) 
}

export default ProfileEventCard;