import React from "react"
import "./banner.css"
function Intro(){
    return(
        <div className="intro">
           <div className="intro-left">
               <div className="intro-left-wrapper">
        <h2>Hello My Name Is</h2>
        <h1>Ali Wano</h1>
        <div className="intro-title">
            <div className="intro-title-wrapper">
                <div className="intro-item">React Developer</div>
                <div className="intro-item">Ui Ux Designer</div>
                <div className="intro-item">Digital Artist</div>
                <div className="intro-item">Web Developer</div>
                <div className="intro-item">Graphic Designer</div>
            </div>
        </div>
        <div className="intro-desc">
            I design and develop services for customers of all sizes,
             specializing in creating stylish, modern websites, web
            services and online stores
        </div>
        

               </div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
           </div>
           <div className="intro-right">
               <div className="intro-bg"></div>
               {/* <img src="./img/wano.png" alt="" /> */}
           </div>
        </div>
    )
}

export default Intro