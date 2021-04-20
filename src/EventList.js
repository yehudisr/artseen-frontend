import EventCard from './EventCard'


function EventList({ events }){
   console.log(events)

    const displayEvents = events.map(event => <EventCard key={event.id} event={event} /> )
    return(
       <div>
    <ul>{displayEvents}</ul>
       </div>   

    )
}

export default EventList;