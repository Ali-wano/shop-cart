import React from 'react';
import Portfolio from '../portfolio/portfolio';
import {imageList} from "../../data"
import "./portfolioList.css"
function PortfoilioList() {
    return(
        <div className="portfolio-list">
            <header className="list-header">
                <h1>Create & Inspire It's Wano</h1>
                <p>Wano is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles and a whole lot awaits inside</p>
            </header>
            <div className="productLists">
                {
                    imageList.map((details) =>(
                        <Portfolio image={details.imgSrc} key={details.id} desc={details.projectDsec} link={details.projectLink} projectName={details.projectName} />
                    ))
                }
        
            </div>
        </div>
    )
}
export default PortfoilioList