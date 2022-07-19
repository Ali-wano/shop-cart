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
            imgSrc: "./img/campany-1.png"
        },
        {
            id: Math.random() * 300,
            imgSrc: "./img/campany-2.png"
        },
        {
            id: Math.random() * 300,
            imgSrc: "./img/campany-3.png"
        },
        {
            id: Math.random() * 300,
            imgSrc: "./img/campany-4.png"
        },
        {
            id: Math.random() * 300,
            imgSrc: "./img/campany-5.png"
        },
        {
            id: Math.random() * 300,
            imgSrc: "./img/campany-6.png"
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