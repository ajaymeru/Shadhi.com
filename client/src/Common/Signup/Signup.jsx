import React, { useState } from 'react';
import "./Signup.scss";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()

const Signup = () => {
    const [formData, setFormData] = useState({
        // gender: '',
        // firstName: '',
        // lastName: '',
        name: "",
        email: '',
        number: '',
        // dob: '',
        // religion: '',
        password: ''
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:4000/api/v1/users/signup", formData)

            if (response.status === 201) {
                console.log("created succesfully", response.data);

                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    password: ""
                })
            }
            navigate("/login");
        }
        catch (err) {
            const msg = err.message
            // alert(msg)
            console.log(msg);

        }
    };

    return (
        <div className='Signup'>
            <div className="form" data-aos="fade-right" data-aos-duration="1500">
                <h5>Signup </h5>
                <form onSubmit={handleSubmit}>
                    {/* <div className="form-group ">
                        <label>Gender</label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={handleChange}
                        /> Male
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={handleChange}
                        /> Female
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="name"> Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder='Enter your  name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name='lastName'
                            placeholder='Enter your last name'
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter your Email'
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">Number</label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            placeholder='Enter your number'
                            value={formData.number}
                            onChange={handleChange}
                        />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="dob">DOB</label>
                        <input
                            type="date"
                            name="dob"
                            id="dob"
                            placeholder='Enter your DOB'
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div> */}
                    {/* <div className="form-group">
                        <label htmlFor="religion">Religion</label>
                        <input
                            type="text"
                            name='religion'
                            value={formData.religion}
                            onChange={handleChange}
                        />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <input className='frmbtn popup' type="submit" value="Sign Up" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>

            <div className="welcomeimg" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src={"https://i.pinimg.com/736x/fd/26/a4/fd26a42294c2d5d6a27d8f307f9db28d.jpg"} alt="" />
            </div>
        </div>
    );
};

export default Signup;
