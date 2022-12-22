import React from 'react'
import image from "../assets/nasaLogo.png"
function HeaderNasa() {
  return (
   <div>
    <div className="nasa_header">
          <div className="name">
            <img src={image} alt="logo" />
           <span>@B D Kiran Kumar</span>
          </div>
          <div>
            <h3>Astronomy picture of the day</h3>
          </div>
        </div>
   </div>
  )
}

export default HeaderNasa