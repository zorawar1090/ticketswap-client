import React from 'react'

export default function (props) {
  const { onSubmit, onChangeName, onChangeEmail, onChangePassword, value } = props

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={onSubmit}>

        <label>Name:</label>
        <input type='text' onChange={onChangeName} value={value} />

        <label>Email:</label>
        <input type='text' onChange={onChangeEmail} value={value} />

        <label>Password:</label>
        <input type='text' onChange={onChangePassword} value={value} />

        <button type='submit'>Enter</button>
      </form>
    </div>
  )
}