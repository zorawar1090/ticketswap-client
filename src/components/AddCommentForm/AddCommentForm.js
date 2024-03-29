import React from 'react'
import Button from '@material-ui/core/Button'

export default function (props) {
  const { onChangeText, onSubmit, value } = props

  return (
    <div>
      <h3>Create a new comment</h3>
      <form onSubmit={onSubmit}>
        <p>
          <label>Text:</label>
          <input type='text' value={value} onChange={onChangeText} />
        </p>

        <p><Button variant="contained" type='submit'>Add Comment</Button></p>
      </form>
    </div>
  )
}