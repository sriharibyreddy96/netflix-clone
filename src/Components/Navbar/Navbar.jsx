import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-bar'>
        <img src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt='netflix' />

        <div className="btns">
            <p>UNLIMITED TV SHOWS & MOVIES</p>
            <button>JOIN NOW</button>
            <button>SIGN IN</button>
        </div>
    </nav>
  )
}

export default Navbar