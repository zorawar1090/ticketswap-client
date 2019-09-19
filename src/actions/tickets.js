import request from 'superagent'
import baseUrl from '../constants'

export const TICKETS_FETCHED = 'TICKETS_FETCHED'

const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  tickets: tickets
})

export const loadTickets = eventId => dispatch => {
  request(`${baseUrl}/ticket/${eventId}`)
    .then(res => {
      dispatch(ticketsFetched(res.body))
    })
    .catch(console.error)
}

export const ADD_TICKET_SUCCESS = 'ADD_TICKET_SUCCESS'

const addTicketSuccess = ticket => ({
  type: ADD_TICKET_SUCCESS,
  ticket
})

export const addTicket = ticket => (dispatch, getState) => {
  const state = getState()
  const { user } = state

  request
    .post(`${baseUrl}/ticket`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(ticket)
    .then(res => {
      dispatch(addTicketSuccess(res.body))
    })
    .catch(console.error)
}

export const EDIT_TICKET_SUCCESS = 'EDIT_TICKET_SUCCESS'

const editTicketSuccess = ticket => ({
  type: EDIT_TICKET_SUCCESS,
  ticket
})

export const editTicket = (ticketId, ticketData) => (dispatch, getState) => {
  const state = getState()
  const { user } = state

  request
    .put(`${baseUrl}/ticket/${ticketId}`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(ticketData)
    .then(res => {
      dispatch(editTicketSuccess(res.body))
    })
    .catch(console.error)
}

