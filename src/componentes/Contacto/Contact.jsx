import React from 'react'
import "./Contact.css"

const Contact = ({ imageSrc, title, description }) => {
  return (
    <div className="card-container">
      <div className='cardd'>
        <img className='imgBackground' src={imageSrc} alt="Card" />
        <div className="card">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact