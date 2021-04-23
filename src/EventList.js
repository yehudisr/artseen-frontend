import EventCard from './EventCard'
import { SimpleGrid, Container, Grid, GridItem } from "@chakra-ui/react"


function EventList({ events }){

    const displayEvents = events.map(event => <EventCard key={event.id} event={event} /> )
    return(
      <SimpleGrid  minChildWidth="160px" spacing="40px">
        {displayEvents}
       </SimpleGrid > 

    )
}

export default EventList;