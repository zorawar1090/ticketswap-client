import React from 'react'
import Button from '@material-ui/core/Button'

export default function(props){
  const { onChangeName, onChangeLogo, onChangeStartDate, onChangeEndDate, onChangeDescription, onSubmit, value} = props

  return(
    <div>
    <h3>Create a new event</h3>
        <form onSubmit={onSubmit}>

          <label>Name:</label>
          <input type='text' value={value} onChange={onChangeName} required/>

          <label>Image/Logo:</label>
          <input type='text' value={value} onChange={onChangeLogo} />

          <label>StartDate:</label>
          <input type='date' value={value} onChange={onChangeStartDate} required/>

          <label>EndDate:</label>
          <input type='date' value={value} onChange={onChangeEndDate} required/>

          <label>Description:</label>
          <input type='text' value={value} onChange={onChangeDescription} required/>
          
          <Button variant="contained" type='submit'>Create Event</Button>
        </form>
    </div>
  )
}