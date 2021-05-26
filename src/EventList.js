import EventCard from './EventCard'
import { Container, Wrap, WrapItem, Center } from "@chakra-ui/react"


function EventList({ events }){

    const displayEvents = events.map(event => 
    <WrapItem boxShadow="dark-lg" borderRadius="lg" borderWidth="1px" h="100%" >
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