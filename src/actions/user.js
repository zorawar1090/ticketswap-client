import request from 'superagent'

const baseUrl = 'http://localhost:4000'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const loginSuccess = jwt => ({
  type: LOGIN_SUCCESS,
  user: jwt
}) 

export const loginUser = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({email: email, password: password})
    .then(res => {
      dispatch(loginSuccess(res.body))
    })
    .catch(console.error)
}