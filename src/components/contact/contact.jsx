import React, { useRef, useContext } from 'react';
import { ThemeContext } from '../../context';
import "./contact.css"
function Contact() {
    const formRef = useRef()
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const Theme = useContext(ThemeContext)
  const darkMode = Theme.state.darkMode
    return(
        <div className="contact">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1>Let's Discuss your Project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <span>
                                
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<p>+2348145535109</p>
                            </span>
                            <span>
                                
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
<p>aliwano37@gmail.com</p>
                            </span>
                            <span>
                                
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokewidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
No 7 1969 Beach Lafiaji Eleganza lekki Ajah
                            </span>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc"><b>What's your story ?</b>Get in touch. Always available for freelancing if the right project comes along.</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="Name..."  style={{backgroundColor: darkMode ? "#333" : "white"}} />
                        <input type="email" name="email" placeholder="Email Address" style={{backgroundColor: darkMode ? "#333" : "white"}} />
                        <input type="text" name="subject" placeholder="subject" style={{backgroundColor: darkMode ? "#333" : "white"}} />
                        <textarea name="messgae" placeholder="Message" cols="30" rows="5" style={{backgroundColor: darkMode ? "#333" : "white"}}></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
           
        </div>
    )
}
export default Contact