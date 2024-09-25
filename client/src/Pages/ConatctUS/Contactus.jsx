import React from 'react'
import man from "./man.png"
import "./Contactus.scss"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()

const Contactus = () => {
    return (
        <div className='Contactus'>
            <div className="Contactus-top" data-aos="fade-right" data-aos-duration="2000">
                <img src={man} alt="" />
            </div>
            <div className="Contactus-bottom">
                <div className="text">
                    <h3>Contact form</h3>
                </div>
                <form action="">
                    <input type="text"
                        placeholder='Enater your name ' />
                    <input type="email"
                        placeholder='Enter your email' />
                    <label htmlFor="">Enter your message</label>
                    <textarea id="" name="" rows="4" cols="50">
                        Enter your message here
                    </textarea>

                    <input type="submit" value="Submit" className='popup' />
                </form>
            </div>
        </div>
    )
}

export default Contactus