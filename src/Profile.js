import { useState, useEffect } from 'react';
import { Container, Select, Box, Wrap, WrapItem, Flex, Heading } from "@chakra-ui/react"
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

    function handleUpdate(event){
        console.log(event)
        const updateItem = events.map(eventListing => {
            if(eventListing.id !== event.id){
                return eventListing
            } else {
                return event
            }
        })
        setEvents(events => updateItem)
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
    .map(eventlisting =>
    <WrapItem>
        <ProfileEventCard key={eventlisting.id} event={eventlisting.event} eventListing={eventlisting} onHandleRemove={handleRemove} onHandleUpdate={handleUpdate} filter={filter} />
    </WrapItem> )


    function handleSelect(e){
        setFilter(filter => e.target.value)
        console.log(e.target.value) 
    }

    return (
        <Flex direction="column" margin="25px" >
            <Heading>Hello, {currentUser.firstname}</Heading>
    
            <Select margin="7" w="150px" onChange={handleSelect}>
                <option value="all">All</option>
                <option value="seen">Seen</option>
                <option value="booked">Booked</option>
            </Select>
          
        
            <Wrap spacing="30px">{userEvents}</Wrap>
        </Flex >
    )
}

export default Profile;