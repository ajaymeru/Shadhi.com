import React, { useState } from 'react';
import "./Signup.scss";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init()

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
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
            const response = await axios.post("http://localhost:4000/api/v1/users/login", formData);

            if (response.status === 200) {
                console.log(response.data);
                navigate('/');
                alert(formData.email, "logined ")
            } else {
                console.log('Login failed.');
            }
        } catch (err) {
            console.error(err.message);
        }
    };


    return (
        <div className='Signup'>
            <div className="form" data-aos="fade-right" data-aos-duration="1500">
                <h5>Login </h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" >
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
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter your password'
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <input className='frmbtn popup' type="submit" value="Login" />
                </form>
                <p>Don't have an account? <Link to="/signup">Signup</Link></p>
            </div>
            <div className="welcomeimg" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <img src={"https://i.pinimg.com/736x/fd/26/a4/fd26a42294c2d5d6a27d8f307f9db28d.jpg"} alt="" />
            </div>
        </div>
    )
}

export default Login