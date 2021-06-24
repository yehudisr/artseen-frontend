import {useEffect, useState} from 'react'
import EventCard from './EventCard'
import { Container, Wrap, WrapItem, Center } from "@chakra-ui/react"


function EventList({ events }){

  const getUser = localStorage.getItem('user')
  const currentUser = JSON.parse(getUser)
  const [savedArray, setSavedArray] = useState([])

  useEffect(() => {
      fetch(`http://localhost:3000/profile/${currentUser.id}`)
          .then(res => res.json())
          .then(res => {
            console.log(res.event_listings)
            let allSaved = res.event_listings.map(listing => listing.event.id)
            setSavedArray(savedArray => allSaved)
          })
  }, [])

    const displayEvents = events.map(event => 
    <WrapItem >
      <Center  w="350px" ><EventCard key={event.id} event={event} savedArray={savedArray}/></Center>
    </WrapItem>
     )
    return(
      <Wrap spacing="45px" 
      // justify="center" 
      // direction="column"
      
      >
    {displayEvents}
       </Wrap> 

    )
}

export default EventList;