import {TICKETS_FETCHED, ADD_TICKET_SUCCESS, EDIT_TICKET_SUCCESS} from '../actions/tickets'

export default function (state = [], action = {}){
  switch(action.type){
    case TICKETS_FETCHED:
      return action.tickets
    case ADD_TICKET_SUCCESS:
      return [...state, action.ticket]
    case EDIT_TICKET_SUCCESS:
      return state.map((ticket, index) => {
        if(index !== action.ticket.id){
          return ticket
        }else{
          return {...ticket, ...action.ticket}
        }
      })
    default: 
      return state
  }
}