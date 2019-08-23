import React from 'react'
import AddTicketForm from './AddTicketForm'
import { connect } from 'react-redux'
import { addTicket } from '../../actions/tickets'

class AddTicketFormContainer extends React.Component {
  state = {
    image: '',
    price: 0,
    description: '',
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.addTicket({
      author: this.props.user.name,
      image: this.state.image,
      price: this.state.price,
      eventId: this.props.eventId,
      description: this.state.description,
      userId: this.props.user.id
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
    return <AddTicketForm
      onChangePrice={this.onChangePrice}
      onChangeImage={this.onChangeImage}
      onChangeDescription={this.onChangeDescription}
      onSubmit={this.onSubmit}
      value={this.state.name}
    />
  }
}

const mapDispatchToProps = { addTicket }

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTicketFormContainer)

