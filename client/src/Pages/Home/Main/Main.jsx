import React from 'react';
import Slider from 'react-slick';
import './Main.scss';
import imagesData from './Main.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false
    };

    return (
        <div className="main">
            <Slider {...settings}>
                {imagesData.images.map((image) => (
                    <div key={image.id} className="bgimg">
                        <img src={image.src} alt={`Image ${image.id}`} />
                    </div>
                ))}
            </Slider>

            <div className="mainForm">
                <h1>Trusted Matrimony & Matchmaking Service</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="gender">Looking for</label>
                        <select id="gender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age</label>
                        <select id="age">
                            <option value="18-25">18-25</option>
                            <option value="26-35">26-35</option>
                            <option value="36-45">36-45</option>
                            <option value="46-60">46-60</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="religion">Religion</label>
                        <select id="religion">
                            <option value="christianity">Christianity</option>
                            <option value="islam">Islam</option>
                            <option value="hinduism">Hinduism</option>
                            <option value="sikhism">Sikhism</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="motherTongue">Mother Tongue</label>
                        <select id="motherTongue">
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                            <option value="telugu">Spanish</option>
                            <option value="tamil">Tamil</option>
                            <option value="telugu">Telugu</option>
                        </select>
                    </div>
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Main;
