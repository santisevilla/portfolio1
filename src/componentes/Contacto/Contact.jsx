import React from 'react'
import "./Contact.css"

const Contact = ({ imageSrc, title, description }) => {
  return (
    <div className="card">
      <img className='imgBackground' src={imageSrc} alt="Card" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Contact