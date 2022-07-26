import React from 'react';
import "./portfolio.css"
function Portfolio({image, desc, link, projectName}) {
    return(
        <div className="portfolio">
           <div className="portfolio-browser">
               <div className="p-browser"></div>
               <div className="p-browser"></div>
               <div className="p-browser"></div>
           </div>
           <div className="overlay">
                       {/* <img src={image} alt="" className="p-Img" /> */}

           <h2>{projectName}</h2>
            <p>{desc}</p>
            <a href={link} target="_blank" rel="noreferrer">Visit Site</a>
           </div>
        </div>
    )
}
export default Portfolio