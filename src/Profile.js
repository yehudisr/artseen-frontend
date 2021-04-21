import { useState, useEffect } from 'react';
import EditProfileForm from './EditProfileForm';
// import EventList from './EventList';
import ProfileEventCard from './ProfileEventCard';


function Profile() {
    
    const [events, setEvents] = useState([])
    const getUser = localStorage.getItem('user')
    const currentUser = JSON.parse(getUser)

    useEffect(() => {
        fetch(`http://localhost:3000/profile/${currentUser.id}`)
            .then(res => res.json())
            .then(res => setEvents(res.event_listings))
    }, [])

    console.log(events)

    const displayEvents = events.map(event => <ProfileEventCard event={event.event} />)
    console.log(events)

    return (
        <div className="user-profile">
            <h3>{currentUser.firstname}</h3>
            <ul>{displayEvents}</ul>
        </div>
    )
}

export default Profile;