import React from 'react'
import { Link } from 'react-router-dom'

export default function (props) {
  const { fraudRiskCalculator, eventName, ticket, user } = props

  return (
    <div>
      <h2>Ticket for {eventName}</h2>
      <p>Author: {ticket.author}</p>
      <p>Image: {ticket.image}</p>
      <p>Price: {ticket.price}</p>
      <p>Description: {ticket.description}</p>
      {
        fraudRiskCalculator(ticket) >= 70
          ? <p className="risk-high">We calculated that the risk of this ticket being a fraud is {fraudRiskCalculator(ticket)}%</p>
          : null
      }
      {
        fraudRiskCalculator(ticket) < 70 && fraudRiskCalculator(ticket) >= 40
          ? <p className="risk-medium">We calculated that the risk of this ticket being a fraud is {fraudRiskCalculator(ticket)}%</p>
          : null
      }
      {
        fraudRiskCalculator(ticket) < 40
          ? <p className="risk-low">We calculated that the risk of this ticket being a fraud is {fraudRiskCalculator(ticket)}%</p>
          : null
      }
      {
        user.id === ticket.userId
          ? <Link to={`/edit-ticket/${ticket.id}`}>Edit</Link>
          : null
      }
    </div>
  )
}