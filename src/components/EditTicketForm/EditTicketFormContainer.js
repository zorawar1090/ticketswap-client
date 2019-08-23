import React from 'react'
import EditTicketForm from './EditTicketForm'
import { editTicket } from '../../actions/tickets'
import { connect } from 'react-redux'

class EditTicketFormContainer extends React.Component {
  state = {
    image: '',
    price: 0,
    description: '',
  }

  onSubmit = event => {
    event.preventDefault()
    const {ticketId} = this.props.match.params
    this.props.editTicket(ticketId, {
      image: this.state.image,
      price: this.state.price,
      description: this.state.description
    })
  }

  onChangePrice = (event) => {
    const { value } = event.target
    this.setState({ price: value })
  }

  onChangeImage = (event) => {
    const { value } = event.target
    this.setState({ eventId: value })
  }

  onChangeDescription = (event) => {
    const { value } = event.target
    this.setState({ description: value })
  }

  render() {
    return <EditTicketForm
      onChangePrice={this.onChangePrice}
      onChangeEventId={this.onChangeEventId}
      onChangeDescription={this.onChangeDescription}
      onSubmit={this.onSubmit}
      value={this.state.name}
    />
  }
}

const mapDispatchToProps = { editTicket }

export default connect(null, mapDispatchToProps)(EditTicketFormContainer)