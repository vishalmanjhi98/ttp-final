import React from 'react'
import './Button.css';

const Button = () => {
    
  return (
    <div>
        
        <button className='btn' style={{ background: "linear-gradient(90deg, #5EE2FF 0%, #2898FF 100%)", margin: "70px 40px 70px 40px", fontSize:"48px", fontWeight:"600", lineHeight:"126%", textTransform:"uppercase" }} type="button" class="btn btn-lg btn-primary" disabled>
            Our Mission Is To Help You
            </button>
            
    </div>
  )
}

export default Button