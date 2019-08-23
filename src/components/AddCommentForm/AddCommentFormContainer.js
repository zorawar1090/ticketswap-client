import React from 'react'
import AddCommentForm from './AddCommentForm'
import { connect } from 'react-redux'
import {addComment} from '../../actions/comments'

class AddCommentFormContainer extends React.Component{
  state = {text: ''}

  onSubmit = event =>{
    event.preventDefault()
    this.props.addComment({
      author: this.props.user.name,
      text: this.state.text,
      ticketId: this.props.ticketId,
      userId: this.props.user.id
    })
  }

  onChangeText = event => {
    const { value } = event.target
    this.setState({ text: value })
  }

  render(){
    return <AddCommentForm 
      onChangeText={this.onChangeText} 
      onSubmit={this.onSubmit}
      value={this.state.text}
      />
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = {addComment}

export default connect(mapStateToProps, mapDispatchToProps)(AddCommentFormContainer)