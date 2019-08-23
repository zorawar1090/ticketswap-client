import React from 'react'
import AddEventForm from './AddEventForm'
import { connect } from 'react-redux'
import { addEvent } from '../../actions/events'

class AddEventFormContainer extends React.Component {
  state = {
    name: '',
    logo: '',
    startDate: '',
    endDate: '',
    description: ''
  }

  onSubmit = event => {
    event.preventDefault()
    this.props.addEvent({
      name: this.state.name,
      logo: this.state.logo,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      description: this.state.description
    })
  }

  onChangeName = (event) => {
    const { value } = event.target
    this.setState({ name: value })
  }

  onChangeLogo = (event) => {
    const { value } = event.target
    this.setState({ logo: value })
  }

  onChangeStartDate = (event) => {
    const { value } = event.target
    this.setState({ startDate: value })
  }

  onChangeEndDate = (event) => {
    const { value } = event.target
    this.setState({ endDate: value })
  }

  onChangeDescription = (event) => {
    const { value } = event.target
    this.setState({ description: value })
  }

  render() {
    return <AddEventForm
      onChangeName={this.onChangeName}
      onChangeLogo={this.onChangeLogo}
      onChangeStartDate={this.onChangeStartDate}
      onChangeEndDate={this.onChangeEndDate}
      onChangeDescription={this.onChangeDescription}
      onSubmit={this.onSubmit}
    />
  }
}

const mapDispatchToProps = { addEvent }

export default connect(null, mapDispatchToProps)(AddEventFormContainer)

