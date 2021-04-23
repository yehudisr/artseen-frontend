import { useState, useEffect } from 'react';
import { Container, Select, Box, SimpleGrid, Text } from "@chakra-ui/react"
import ProfileEventCard from './ProfileEventCard';




function Profile() {
    
    const [events, setEvents] = useState([])
    const [filter, setFilter] = useState("all")

    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)
    console.log(events)
    useEffect(() => {
        fetch(`http://localhost:3000/profile/${currentUser.id}`)
            .then(res => res.json())
            .then(res => setEvents(res.event_listings))
    }, [])

    function handleRemove(id){
        const removeItem = events.filter(eventListing => eventListing.id !== id)
        setEvents(removeItem)
    }

    const userEvents = events
    .filter(eventListing => {
        if (filter === "seen"){
            return eventListing.seen === true
        } else if (filter === "booked"){
            return eventListing.booked === true
        } else {
            return eventListing
        }
    })
    .map(eventlisting => <ProfileEventCard key={eventlisting.id} event={eventlisting.event} eventListing={eventlisting} onHandleRemove={handleRemove} />)


    function handleSelect(e){
        setFilter(filter => e.target.value)
        console.log(e.target.value) 
    }


    return (
        <Container >
            <Box padding="4">
            <Text fontSize="4xl">Hello, {currentUser.firstname}</Text>
             </Box>
            <Box padding="4">
            <Select onChange={handleSelect}>
                <option value="all">All</option>
                <option value="seen">Seen</option>
                <option value="booked">Booked</option>
            </Select>
            </Box>
            <SimpleGrid  minChildWidth="180px" spacing="75px">
             {userEvents}
            </SimpleGrid>
        </Container >
    )
}

export default Profile;