import request from 'superagent'
import baseUrl from '../constants'

export const EVENTS_FETCHED = 'EVENTS_FETCHED'

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events: events.events
})

export const loadEvents = limit => dispatch => {
  request(`${baseUrl}/event?limit=${limit}`)
    .then(res => {
      dispatch(eventsFetched(res.body))
    })
    .catch(console.error)
}

export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS'

const addEventSuccess = event => ({
  type: ADD_EVENT_SUCCESS,
  event
})

export const addEvent = event => (dispatch, getState) => {
  const state = getState()
  const{user} = state

  request
    .post(`${baseUrl}/event`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(event)
    .then(res => {
      dispatch(addEventSuccess(res.body))
    })
    .catch(console.error)
}
