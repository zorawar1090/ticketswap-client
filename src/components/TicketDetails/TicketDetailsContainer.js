import React from 'react'
import { connect } from 'react-redux'
import TicketDetails from './TicketDetails'
import AddCommentFormContainer from '../AddCommentForm/AddCommentFormContainer';
import CommentsListContainer from '../CommentsList/CommentsListContainer'
import { Link } from 'react-router-dom'

class TicketDetailsContainer extends React.Component {
  ticket = this.props.tickets.find(ticket => ticket.id === parseInt(this.props.match.params.ticketId))
  event = this.props.events.find(event => event.id === this.ticket.eventId)

  fraudRiskCalculator = (ticket) => {
    let risk = 0

    const newDate = new Date(ticket.createdAt)
    const hours = newDate.getHours()

    const noOfTickets = this.props.tickets.length

    const sumOfTickets = this.props.tickets.reduce((acc, currentTicket) => acc + currentTicket.price, 0)

    const averageOfTickets = sumOfTickets / noOfTickets

    if (hours >= 9 && hours < 17) {
      risk = risk - 10
    } else {
      risk = risk + 10
    }

    if (ticket.price > averageOfTickets) {
      if (ticket.price - averageOfTickets > 10) {
        risk = risk - 10
      }
      else {
        risk = risk - (ticket.price - averageOfTickets)
      }
    }
    else {
      risk = risk + (averageOfTickets - ticket.price)
    }

    if(this.props.comments.length > 3){
      risk = risk + 5
    }

    if (risk < 5) {
      risk = 5
    }
    else if (risk > 95) {
      risk = 95
    }

    return risk
  }

  render() {
    return <div>
      <TicketDetails
        fraudRiskCalculator={this.fraudRiskCalculator}
        eventName={this.event.name}
        ticket={this.ticket}
        user={this.props.user}
      />
      <CommentsListContainer ticketId={this.ticket.id} />
      {
        !this.props.user
          ? <p><Link to='/'>Log In</Link> to add comments.</p>
          : <AddCommentFormContainer ticketId={this.ticket.id} />
      }
    </div>
  }
}

const mapStateToProps = state => ({
  events: state.events,
  tickets: state.tickets,
  user: state.user,
  comments: state.comments
})


export default connect(mapStateToProps, null)(TicketDetailsContainer)