import EventCard from './EventCard'
import { Container, Wrap, WrapItem, Center } from "@chakra-ui/react"


function EventList({ events }){

    const displayEvents = events.map(event => 
    <WrapItem >
      <Center  w="350px" ><EventCard key={event.id} event={event} /></Center>
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