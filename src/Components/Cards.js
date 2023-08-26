import React from 'react'
import './Cards.css';

const Cards = () => {
  return (
    <div>
        <div className="card-row-container">
      <div className="card">
        <h1 style={{fontSize: "38.957px"}}>Emergency Care</h1>
        <p>Clinical Excellence Must Be The Priority For Any Health Care Service Provider.</p>
        <button id='btn'>Read More</button>
      </div>
      <div  className="card" style={{background: "#5DB2FF"}}>
        <h1 style={{fontSize: "38.957px"}}>Hospitality</h1>
        <p>Clinical Excellence Must Be The Priority For Any Health Care Service Provider.</p>
        <button id='btn' >+91 9876543210</button>
      </div>
      <div className="card">
        <h1 style={{fontSize: "38.957px"}}>Advanced Technology</h1>
        <p>Clinical Excellence Must Be The Priority For Any Health Care Service Provider.</p>
        <button  id='btn' >Make An Appointment</button>
      </div>
    </div>
    </div>
  )
}

export default Cards