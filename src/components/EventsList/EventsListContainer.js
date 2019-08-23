import React from 'react'
import { loadEvents } from '../../actions/events'
import { connect } from 'react-redux'
import EventsList from './EventsList'
import AddEventFormContainer from '../AddEventForm/AddEventFormContainer'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

class EventsListContainer extends React.Component {
  state = { showAllEvents: false, showEvents: false }

  onClickShow = () => {
    this.setState({ showEvents: true })
    this.props.loadEvents(9)
  }

  onClickNext = () => {
    this.setState({ showAllEvents: true })
    this.props.loadEvents(99999)
  }

  render() {
    return (
      <div>
        {!this.state.showEvents
          ? <Button variant="contained" onClick={this.onClickShow}>Show Events</Button>
          : <EventsList showAllEvents={this.state.onClickNext} events={this.props.events} />
        }
        {!this.state.showAllEvents && this.state.showEvents
          ? <Button variant="contained" onClick={this.onClickNext}>Next</Button>
          : null
        }
        {!this.props.user
          ? <p><Link to='/'>Log In</Link> to create events.</p>
          :<AddEventFormContainer />
        }
      </div>
    )
  }
}

const mapDispatchToProps = { loadEvents }

const mapStateToProps = state => ({
  events: state.events,
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer)