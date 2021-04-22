import { useState, useEffect } from 'react';
import EditProfileForm from './EditProfileForm';
// import EventList from './EventList';
import ProfileEventCard from './ProfileEventCard';



function Profile() {
    
    const [events, setEvents] = useState([])
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)
    const [filter, setFilter] = useState("all")

    useEffect(() => {
        fetch(`http://localhost:3000/profile/${currentUser.id}`)
            .then(res => res.json())
            .then(res => setEvents(res.event_listings))
    }, [])

    function handleRemove(id){
        const removeItem = events.filter(eventListing => eventListing.id !== id)
        setEvents(removeItem)
    }

    const userEvents = [...events]
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
        <div className="user-profile">
            <h3>{currentUser.firstname}</h3>
            <select onChange={handleSelect}>
                <option value="all">All</option>
                <option value="seen">Seen</option>
                <option value="booked">Booked</option>
            </select>
            <ul>{userEvents}</ul>
        </div>
    )
}

export default Profile;