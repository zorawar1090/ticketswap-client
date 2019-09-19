import React from 'react'
import Button from '@material-ui/core/Button'

export default function (props) {
  const { onChangeImage, onChangePrice, onChangeDescription, onSubmit, value } = props

  return (
    <div>
      <h3>Edit ticket</h3>
      <form onSubmit={onSubmit}>

        <label>Image:</label>
        <input type="text" value={value} onChange={onChangeImage} />

        <label>Price:</label>
        <input type="number" value={value} onChange={onChangePrice} />

        <label>Description:</label>
        <input type="text" value={value} onChange={onChangeDescription} />

        <Button variant="contained" type="submit">Edit</Button>
      </form>
    </div>
  )
}