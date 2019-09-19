import React from 'react'
import Button from '@material-ui/core/Button'

export default function (props) {
  const { onSubmit, onChangeEmail, onChangePassword, value } = props

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={onSubmit}>

        <p>
          <label for="email">
            <span>Email:</span>
          </label>
          <input type='text' onChange={onChangeEmail} value={value} />
        </p>

        <p>
          <label for="password">
            <span>Password:</span>
          </label>
          <input type='text' onChange={onChangePassword} value={value} />
        </p>

        <p><Button variant="contained" type='submit'>Enter</Button></p>
      </form>
    </div>
  )
}