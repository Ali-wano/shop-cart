import React from 'react';
import { useContext } from 'react';
import "./testimonials.css"
import { ThemeContext } from '../../context';
function Testimonials() {
    const Info = [
{
    name:"Foad Vikram",
    imgSc:"./img/foad.png",
    desc:"Wano was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.",
},
{
    name:"Samuel Seniga",
    imgSc:"./img/team-8.jpg",
    desc:"Wano was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.",
},
{
    name:"Samuel Seniga",
    imgSc:"./img/team-8.jpg",
    desc:"Wano was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.",
},
{
    name:"Samuel Seniga",
    imgSc:"./img/team-8.jpg",
    desc:"Wano was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.",
},

    ]
    const Theme = useContext(ThemeContext)
    const darkMode = Theme.state.darkMode
    return(
        <div className="testimonials">
            <div className="t-wrapper">
                <div className="t-left">
                    <h1>Reviews About Me</h1>
                    <div className="border"></div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit corporis magni quod consequuntur odio est omnis facere aut cum accusantium?</p>
                </div>
                <div className="t-right">
                    <div className="t-cards">
                        <div className="t-card">
        {
            Info.map(details =>(
                <>
                <div className="t-card-info" style={{backgroundColor: darkMode ? "#333" : "white"}}>
                <img src={details.imgSc} alt="" />
                <h3>{details.name}</h3>
                <p>{details.desc}</p>
                </div>
                </>
            ))
        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials