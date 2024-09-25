import React from 'react'
import "./Steps.scss"
import signup from "./assets/signup.gif"
import interact from "./assets/Interact.gif"
import connect from "./assets/connect.gif"
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()

const Steps = () => {
    return (
        <div className='Steps'>
            <div className="heading">
                <svg>
                    <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                        Find Special
                    </text>
                </svg>
            </div>
            <div className="followSteps" data-aos="zoom-in" data-aos-duration="1500">
                <div className="card " >
                    <div className="icon">
                        <img src={signup} alt="" />
                    </div>
                    <div className="text">
                        <h5>Sign up </h5>
                        <p>Register for free & put up your Matrimony Profile</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={connect} alt="" />
                    </div>
                    <div className="text">
                        <h5>Connect</h5>
                        <p>Select & Connect with Matches you like</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={interact} alt="" />
                    </div>
                    <div className="text">
                        <h5>Interact</h5>
                        <p>Become a Premium Member & Start a Conversation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps