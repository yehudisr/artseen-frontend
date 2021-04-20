import { useState } from 'react';
import EditProfileForm from './EditProfileForm';
import EventList from './EventList';


function Profile({currentUser}){
    const {firstname, events} = currentUser
    const [userEvents, setUserEvents] = useState(events)
    console.log(currentUser)
    
    return(
    <h1>{firstname}</h1>
    
    )
}

export default Profile;