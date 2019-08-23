import React from 'react'
import { Link } from 'react-router-dom'

// export default class EventList extends React.Component {
//   renderEvent(event) {
//     return (
//       <li key={event.id}>
//         <Link to={`/events/${event.id}`}>{event.name}</Link>
//       </li>
//     )
//   }

//   render(){
//     const events = this.props.events
//     return (
//     <ul>
//       {!events
//         ? 'Loading...'
//         : events.map((event) => this.renderEvent(event))}
//     </ul>
//   )
//   }
// }

export default function (props) {
  const { events } = props
  
  return (
    <div>
      <h2>Events</h2>
      <ul>
        {!events
          ? 'Loading...'
          : events.map(event => <li key={event.id}><Link to={`events/${event.id}`}>{event.name}</Link></li>)}
      </ul>
    </div>
  )
}