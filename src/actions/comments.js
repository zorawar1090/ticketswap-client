import request from 'superagent'
import baseUrl from '../constants'

export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'

const addCommentSuccess = comment => ({
  type: ADD_COMMENT_SUCCESS,
  comment
})

export const addComment = comment => (dispatch, getState) => {
  const state = getState()
  const { user } = state

  request
    .post(`${baseUrl}/comment`)
    .set('Authorization', `Bearer ${user.jwt}`)
    .send(comment)
    .then(res => {
      dispatch(addCommentSuccess(res.body))
    })
    .catch(console.error)
}

export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS'

const getCommentsSuccess = comments => ({
  type: GET_COMMENTS_SUCCESS,
  comments
})

export const getComments = ticketId => dispatch => {
  request(`${baseUrl}/comment/${ticketId}`)
    .then(res => {
      dispatch(getCommentsSuccess(res.body))
    })
    .catch(console.error)
}

