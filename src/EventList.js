import EventCard from './EventCard'


function EventList({ events, currentUser }){

    const displayEvents = events.map(event => <EventCard key={event.id} event={event} currentUser={currentUser} /> )
    return(
       <div>
    <ul>{displayEvents}</ul>
       </div>   

    )
}

export default EventList;