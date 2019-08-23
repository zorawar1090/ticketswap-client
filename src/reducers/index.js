import { combineReducers } from 'redux'
import events from './events'
import tickets from './tickets'
import user from './user'
import comments from './comments'

export default combineReducers({
  events, tickets, user, comments
})