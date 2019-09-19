import React from 'react'
import Button from '@material-ui/core/Button'

export default function (props) {
  const { onChangeName, onChangeLogo, onChangeStartDate, onChangeEndDate, onChangeDescription, onSubmit, value } = props

  return (
    <div>
      <h3>Create a new event</h3>
      <form onSubmit={onSubmit}>

        <p>
          <label for="name">
            <span>Name:</span>
          </label>
          <input type='text' value={value} onChange={onChangeName} required />
        </p>

        <p>
          <label for="logo">
            <span>Image/Logo:</span>
          </label>
          <input type='text' value={value} onChange={onChangeLogo} />
        </p>

        <p>
          <label for="start-date">
            <span>Start Date:</span>
          </label>
          <input type='date' value={value} onChange={onChangeStartDate} required />
        </p>

        <p>
          <label for="end-date">
            <span>End Date:</span>
          </label>
          <input type='date' value={value} onChange={onChangeEndDate} required />
        </p>

        <p>
          <label for="description">
            <span>Description:</span>
          </label>
          <input type='text' value={value} onChange={onChangeDescription} required />
        </p>

        <p>
          <Button variant="contained" type='submit'>Create Event</Button>
        </p>

      </form>
    </div>
  )
}