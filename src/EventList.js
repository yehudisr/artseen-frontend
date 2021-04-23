import EventCard from './EventCard'
import { Container } from "@chakra-ui/react"


function EventList({ events }){

    const displayEvents = events.map(event => <EventCard key={event.id} event={event} /> )
    return(
      <Container>
    <ul>{displayEvents}</ul>
       </Container> 

    )
}

export default EventList;