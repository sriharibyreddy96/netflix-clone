import React from 'react'
import './Signup.css'
import Footer from '../../Components/Footer/Footer'
import {Link} from 'react-router-dom'
// import logo from '../../assets/netflix-logo.jpg'

const Signup = () => {
  return (
    <>
    <div className='signup'>
        <div className='logo'>
          <img src='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png' alt='netflix' />
        </div>
        <div className="form">
        <form className='signin-form'>
          <h1>Sign In</h1>
          <input type="email" placeholder='Email or Phone Number' />
          <input type="password" placeholder='Password' />
          <button>SignIn</button>
          <div className='checkbox'>
          <div className="checkbox-1">
          <input type="checkBox" />
          <p>Remember me</p>
          </div>
          <p>Need help?</p>
          </div>

          <div className='signup-links'>
            <h3>New to Netflix? <Link>Signup Now</Link></h3>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/"> Learn more.</a> </p>
          </div>

        </form>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Signup