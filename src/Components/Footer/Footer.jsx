import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <a href="/">Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.</a>
        <p>Questions? Contact us.</p>
        <div className="footer-content">
            <div className="content-1">
                <p>FAQ</p>
                <p>Invester Relation</p>
                <p>Privacy</p>
                <p>Speed Test</p>
            </div>
            <div className="content-1">
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
                <p>Legal Notices</p>
            </div>
            <div className="content-1">
                <p>Account</p>
                <p>Ways to Watch</p>
                <p>Corporate Information</p>
                <p>Only on NetFlix</p>
            </div>
            <div className="content-1">
                <p>Media Centre</p>
                <p>terms of use</p>
                <p>Contact us</p>
                <p>Speed Test</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer