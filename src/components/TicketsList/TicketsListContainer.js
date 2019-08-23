import React from 'react'
import { loadTickets } from '../../actions/tickets'
import { connect } from 'react-redux'
import TicketsList from './TicketsList'
import AddTicketFormContainer from '../AddTicketForm/AddTicketFormContainer'
import { Link } from 'react-router-dom'

class TicketsListContainer extends React.Component {
  baseUrl = 'http://localhost:4000'

  state = { noOfTickets: 0 }

  componentDidMount() {
    const { eventId } = this.props.match.params
    this.props.loadTickets(eventId)
  }

  render() {
    return (
      <div>
        <TicketsList
          tickets={this.props.tickets}
        />
        {!this.props.user
          ? <p><Link to='/'>Log In</Link> to create a new ticket</p>
          : <AddTicketFormContainer eventId={this.props.match.params.eventId} />
        }
      </div>
    )
  }
}

const mapDispatchToProps = { loadTickets }

const mapStateToProps = state => {
  return ({
    tickets: state.tickets,
    user: state.user
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsListContainer)
