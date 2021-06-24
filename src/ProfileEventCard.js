import { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import { Button, ButtonGroup, Box, Image, Badge, Flex, Spacer, IconButton } from "@chakra-ui/react";
import { AddIcon, WarningIcon, DeleteIcon, CheckCircleIcon, CheckIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


function ProfileEventCard({ event, eventListing, onHandleRemove, onHandleUpdate, filter }){
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)
    const [displayComments, setDisplayComments] = useState(false)
    const [descPreview, setDescPreview] = useState("")
    const {id, title, description, image, date, date_to_display, link="https://www.artic.edu/"} = event

    console.log(date, date_to_display)

    useEffect(() => {
        
         if (description === null || undefined) {
          setDescPreview(descPreview => "No Description Available")
        } else if(description.length > 200){
          const desc = description.substring(0, 100) + "..."
          setDescPreview(descPreview => desc)
        } else {
          setDescPreview(descPreview => description)
        }
      }, [])

    function handleUpdateBooked(e){

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
            .then(
              res => {
                onHandleUpdate(res)
                window.open(link, '_blank')
              }
            )
    }

    function handleUpdateSeen(e){

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
           .then(res => onHandleUpdate(res))
   }

    function handleDelete(){

        console.log(eventListing.id)
        
        fetch(`http://localhost:3000/event_listings/${eventListing.id}`, {
             method: 'DELETE'
             })
             .then(data => {onHandleRemove(eventListing.id)})
    }

    function imagePath(){
        window.location = `/events/${id}`
    }

    return(

        <Flex direction="column" w="350px" h="100%" borderWidth="1px" borderRadius="lg" overflow="hidden" justifyContent="center">
           
           
            <Image 
            src={image} 
            alt={title}
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
                {date_to_display}
            </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
           {title}
        </Box>

        <Box>
          {descPreview}
        </Box>

        <Box>
          
            <Flex>
                <Box p="2">
                 {eventListing.booked ? <Button name="booked" value={false} onClick={handleUpdateBooked}>booked</Button> : <Button name="booked" value={true} onClick={handleUpdateBooked}>book it</Button> } 

                </Box>
                  
                <Box p="2">
                 { eventListing.seen ? 
                <Button name="seen" value={false} onClick={handleUpdateSeen}>.<ViewIcon />.</Button> : <Button name="seen" value={true} onClick={handleUpdateSeen} >.<ViewOffIcon/>.</Button>}
                </Box> <Spacer />
               
               { filter == "all" && <Box p="2" >
                 <IconButton icon={<DeleteIcon/>} onClick={handleDelete}/> 
                </Box>}
            </Flex>
            
        </Box>
        </Box>
        </Flex>  
    ) 
}

export default ProfileEventCard;