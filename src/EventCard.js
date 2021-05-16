import { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import styled, { ThemeProvider } from "styled-components";
import { Button, ButtonGroup, Box, Image, Badge, Flex, Spacer, WrapItem } from "@chakra-ui/react";
import { AddIcon, WarningIcon, DeleteIcon, CheckCircleIcon, CheckIcon } from '@chakra-ui/icons';


function EventCard({ event }){
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)
    const {id, title, comments, image, date_to_display, description} = event
    const [displayComments, setDisplayComments] = useState(false)
    const [saved, setSaved] = useState(false)
    const [descPreview, setDescPreview] = useState("")


    useEffect(() => {
      // console.log(description.substring(0, 100))
       if (description === null || undefined) {
        setDescPreview(descPreview => "No Description Available")
      } else if(description.length > 200){
        const desc = description.substring(0, 100) + "..."
        setDescPreview(descPreview => desc)
      } else {
        setDescPreview(descPreview => description)
      }
    }, [])

    
 
    function toggleComments(){
        setDisplayComments(displayComments => !displayComments)
    }
    function handleSave(){
        
        fetch(`http://localhost:3000/event_listings`, { 
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({  user_id: currentUser.id, event_id: id, saved: true, booked: false, seen: false})
            })
            .then (res => res.json())
            .then(data => {
                if (data.id === null){
                alert("you already saved this event!")
                } else
                {console.log(data)}
            })
           
            // setSaved(true)
    }

    function imagePath(){
      window.location = `/events/${id}`
    }

    return(
      <Flex direction="column" w="100%" h="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
          
            {/* <a href={`/events/${id}`}> */}
            <Image 
            src={image} 
            alt={title}
            onClick={imagePath}
             />
             {/* </a> */}
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
                    {!saved && (<Button size="sm" variant="ghost" borderRadius="md" onClick={() => handleSave(event)}><AddIcon w={6} h={6} /></Button>)}
                </Box>
                    <Spacer />
                <Box p="2">
                <Button borderRadius="md" onClick={toggleComments}>Comments</Button>
                </Box>
            </Flex>
            <Box >
                { displayComments && <Comments comments={comments} eventId={id} currentUser={currentUser}/>}
            </Box>
        </Box>

        {/* <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box> */}
      </Box>
    </Flex>
      
          
       
    )
}
export default EventCard;