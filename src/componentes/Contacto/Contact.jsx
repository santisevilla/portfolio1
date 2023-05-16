import React from 'react'
import "./Contact.css"
import Telefono from "../../imagenes/telefono.png"

const Contact = () => {
  return (
    <div className='card-containter'>
      <div className='card'>
        <img src={Telefono} alt="img" />
        <h2>Teléfono</h2>
        <h3>2612574104</h3>
      </div>
      {/* <div className='card'>
        <img src={Telefono} alt="img" />
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
      <div className='card'>
        <img src={Telefono} alt="img" />
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
      <div className='card'>
        <img src={Telefono} alt="img" />
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div> */}
    </div>
  )
}

export default Contact