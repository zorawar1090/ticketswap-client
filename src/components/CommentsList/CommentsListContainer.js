import React from 'react'
import { connect } from 'react-redux'
import CommentsList from './CommentsList'
import {getComments} from '../../actions/comments'

class CommentsListContainer extends React.Component {
  componentDidMount(){
    this.props.getComments(this.props.ticketId)
  }

  render() {

    return (
      <CommentsList comments={this.props.comments}/>
    )
  }
}

const mapDispatchToProps = { getComments }

const mapStateToProps = state => ({
  comments: state.comments
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListContainer)