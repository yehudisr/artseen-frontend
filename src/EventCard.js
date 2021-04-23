import { useState } from 'react';
import { NavLink} from 'react-router-dom';
import Comments from './Comments';
import styled, { ThemeProvider } from "styled-components";
import { Button, ButtonGroup, Box, Image, Badge, Flex, Spacer, Text } from "@chakra-ui/react";
import { AddIcon, WarningIcon, DeleteIcon, CheckCircleIcon, CheckIcon } from '@chakra-ui/icons';


function EventCard({ event }){
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)
    const {id, title, comments, image, date_to_display} = event
    const [displayComments, setDisplayComments] = useState(false)
    const [saved, setSaved] = useState(false)

 
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
    }

    return(
      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
          
            <a href={`/events/${id}`}>
            <Image src={image} alt={title} maxH="150px"/>
             </a>
               <Box p="6">
        <Box d="flex" alignItems="baseline">
          {/* <Badge borderRadius="full" px="1" colorScheme="teal">
            Featured
          </Badge> */}
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
          <Text fontSize="sm">description logic goes here</Text>
        </Box>

        <Box>
          
            <Flex>
                <Box p="2">
                    {!saved && (<Button size="sm" variant="ghost" borderRadius="md" onClick={() => handleSave(event)}><AddIcon w={6} h={6} /></Button>)}
                </Box>
                    <Spacer />
                <Box p="2">
                <Button size="sm" borderRadius="md" onClick={toggleComments}>Comments</Button>
                </Box>
            </Flex>
            <Box >
                { displayComments && <Comments comments={comments} eventId={id} currentUser={currentUser}/>}
            </Box>
        </Box>

      </Box>
    </Box>
      
          
       
    )
}
export default EventCard;