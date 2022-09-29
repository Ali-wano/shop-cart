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
                    <p className="a-sub">I am a Computer Science Grad Student at Ekobits Academy. I enjoy problem<br/>-solving and coding Always strive to bring 100% to the work I do. </p>
            <p className="a-desc" style={{lineHeight: "2rem"}}>
            I have worked on technologies like PHP, React, Bootstrap, MySQL, Wordpress, HTML5, CSS, Figma, Adobe photoshop, illustrator during my training. I have 4+ years of professional work experience which helped me strengthen my experience in React, Javascript, and Css. I am passionate about developing complex applications that solve real-world problems impacting millions of users.            </p>
            <div className="a-award">
                <img src="./img/Certificate.png" alt="" />
                <div className="award-text">
                    <h4>Web Developer 2018</h4>
                    <p>Certified frontend web developer<br/> in the year 2018.</p>
                </div>
            </div>
            </div>
        </div>
    );
}
export default About;