import {EVENTS_FETCHED, ADD_EVENT_SUCCESS} from '../actions/events'

export default function (state = [], action = {}){
  switch(action.type){
    case EVENTS_FETCHED:
      return action.events
    case ADD_EVENT_SUCCESS:
      return [...state, action.event]
    default: 
      return state
  }
}