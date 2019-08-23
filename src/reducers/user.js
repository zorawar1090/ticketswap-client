import {LOGIN_SUCCESS} from '../actions/user'

export default function (state = '', action ={}){
  switch(action.type){
    case LOGIN_SUCCESS:
      return action.user
    default:
      return state
  }
}