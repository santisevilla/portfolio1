import React from 'react'
import "./Contact.css"

const Contact = ({ title, description }) => {
  return (
    <div className='card-containter'>
      <div className='card'>
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  )
}

export default Contact