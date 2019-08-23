import {GET_COMMENTS_SUCCESS, ADD_COMMENT_SUCCESS} from '../actions/comments'

export default function (state = [], action = {}) {
  switch(action.type){
    case ADD_COMMENT_SUCCESS:
      return [...state, action.comment]
    case GET_COMMENTS_SUCCESS:
      return action.comments
    default: 
      return state
  }
}