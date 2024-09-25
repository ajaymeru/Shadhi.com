import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="group">
                <div className='logo'>
                    <h1><Link to="/">Shadhi.com</Link></h1>
                    <p>Its Your choice</p>
                </div>
            </div>
            <div className="group">
                <h4>Need Help?</h4>
                <p>About us</p>
                <p>Conatct us </p>
                <p>Careers</p>
            </div>
            <div className="group">
                <div className="subscribe">
                    <h4>Sunscribe for updates</h4>
                    <input type="email" name="" id="" placeholder='Enter ypur email' />

                    <div className="links">
                        <p><FaLinkedin /></p>
                        <p><GrInstagram /></p>
                        <p><FaTwitterSquare /></p>
                        <p><FaGithubSquare /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer