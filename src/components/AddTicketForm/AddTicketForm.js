import React from 'react'
import Button from '@material-ui/core/Button'

export default function (props) {
  const { onChangeImage, onChangePrice, onChangeDescription, onSubmit, value } = props

  return (
    <div>
      <h3>Create a new ticket</h3>
      <form onSubmit={onSubmit}>

        <p>
          <label for="image">
            <span>Image:</span>
          </label>
          <input type="text" value={value} onChange={onChangeImage} />
        </p>

        <p>
          <label for="price">
            <span>Price:</span>
          </label>
          <input type="number" value={value} onChange={onChangePrice} required />
        </p>

        <p>
          <label for="description">
            <span>Description:</span>
          </label>
          <input type="text" value={value} onChange={onChangeDescription} required />
        </p>

        <p><Button variant="contained" type="submit">Create Ticket</Button></p>
      </form>
    </div>
  )
}