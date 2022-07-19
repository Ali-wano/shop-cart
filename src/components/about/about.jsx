import React from 'react';
import "./about.css";

function About() {
    return(
        <div className="about">
            <div className="about-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="./img/me.jpg" alt="" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="a-title">About Me</h1>
                    <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non labore quod<br/> nobis nemo hic iure, maiores.</p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis exercitationem molestias debitis explicabo, quos optio voluptatem, incidunt perferendis aliquam sequi in placeat eos minus enim id deleniti? Consequuntur, facilis nobis.
            </p>
            <div className="a-award">
                <img src="./img/Certificate.png" alt="" />
                <div className="award-text">
                    <h4>Web Developer 2021</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit. Cumque, optio.</p>
                </div>
            </div>
            </div>
        </div>
    );
}
export default About;