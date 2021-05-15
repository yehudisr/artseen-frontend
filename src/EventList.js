import EventCard from './EventCard'
import { Container, Wrap, WrapItem } from "@chakra-ui/react"


function EventList({ events }){

    const displayEvents = events.map(event => 
    <WrapItem boxShadow="dark-lg" borderRadius="lg" borderWidth="1px" h="100%">
      <EventCard key={event.id} event={event} />
    </WrapItem>
     )
    return(
      <Wrap spacing="45px" justify="center">
    {displayEvents}
       </Wrap> 

    )
}

export default EventList;