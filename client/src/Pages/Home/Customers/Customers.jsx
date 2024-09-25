import React from 'react';
import customersData from './Customers.json';
import './Customers.scss';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()

const Customers = () => {
    return (
        <div className='Customers'>
            <div className="headings">
                <h1>Our best customers</h1>
            </div>
            <div className="cards">
                {customersData.map((customer, index) => (
                    <div className="card" key={index} data-aos="zoom-in" data-aos-duration="1500">
                        <div className="img">
                            <img src={customer.img} alt="" />
                        </div>
                        <div className="info">
                            <h2>{customer.name}</h2>
                            <p><strong>Phone:</strong> {customer.num}</p>
                            <p><strong>Email:</strong> {customer.mail}</p>
                            <p><strong>Age:</strong> {customer.age}</p>
                            <p><strong>Gender:</strong> {customer.gender}</p>
                            <p><strong>Religion:</strong> {customer.religion}</p>
                            <p><strong>Mother Tongue:</strong> {customer.mothertongue}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Customers;
