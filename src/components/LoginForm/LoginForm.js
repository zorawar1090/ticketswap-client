import React from 'react'
import Button from '@material-ui/core/Button'

export default function(props){
  const { onSubmit, onChangeEmail, onChangePassword, value} = props

  return(
    <div>
    <h3>Log In</h3>
        <form onSubmit={onSubmit}>

          <label>Email:</label>
          <input type='text' onChange={onChangeEmail} value={value}  />

          <label>Password:</label>
          <input type='text' onChange={onChangePassword} value={value}  />
          
          <Button variant="contained" type='submit'>Enter</Button>
        </form>
    </div>
  )
}