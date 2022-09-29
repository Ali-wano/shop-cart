import React from 'react';
import { useContext } from 'react';
import "./brand.css"
import {ThemeContext} from "../../context"
function Brands() {
    const Theme = useContext(ThemeContext)
    const darkMode = Theme.state.darkMode
    const brands = [
        {
            id: Math.random() * 300,
            imgSrc: "https://www.softcitygroup.com/welcome/wp-content/uploads/2019/05/nlogosft-1.png"
        },
        {
            id: Math.random() * 300,
            imgSrc: "./img/black-logo-07.png"
        },
        {
            id: Math.random() * 300,
            imgSrc: "https://www.poisenigeria.org/wp-content/uploads/2021/04/poise-nigeria-logo.png"
        },
        {
            id: Math.random() * 300,
            imgSrc: "./img/Asf Web App-07.png"
        },
        {
            id: Math.random() * 300,
            imgSrc: "./img/ishaya-07.png"
        },
        {
            id: Math.random() * 300,
            imgSrc: "./img/palz.png"
        },
    ]
    return(
        <div className="brand" style={{display: darkMode ? "none" : "block"}}>
                <h3>Trusted by companies like</h3>
                <div className="brands">
                    {
                        brands.map(details =>(
                            <img src={details.imgSrc} alt="" />
                        ))
                    }
                </div>
        </div>
    )
}
export default Brands