import React from 'react'
import "./Home.scss"
import Main from './Main/Main'
import Steps from './Steps/Steps'
import Customers from "./Customers/Customers"

const Home = () => {
    return (
        <div className='Home'>
            <Main />
            <Steps />
            <Customers />
        </div>
    )
}

export default Home