import '../Styles/Contact.css';
import React, { useState } from 'react';
import Flip from 'react-reveal/Reveal';

import {FaArrowRight, FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa';


const Contact = () => {

  const [glint, setGlint] = useState(true);
  const [becomeJedi, setBecomeJedi] = useState(false);

    setTimeout(function myTimer() {  
        setGlint(!glint)
      setTimeout(setGlint(!glint), 1000); 
     }, 1000);

     const glintCheck = glint? 'active' : "something";

     const whatSide = becomeJedi? 'becomeJedi' : null;

     const handleLightsaber = () =>{
         setBecomeJedi(!becomeJedi);
    }

    return (
        <div className="contactContainer" id='contact'>
          <Flip left>
            <h1 className='contactHeader'>
                <span className={`glint ${glintCheck}`}>[</span>
                Kontakt
                <span className={`glint ${glintCheck}`}>]</span>
            </h1>
            </Flip>

        <p className='arrowToLightsaber'>Kliknij w    <FaArrowRight /></p>

        <div className="lightsaber">
        <div id="blade" className={`${whatSide}`}></div>
        <button className='hilt' onClick={handleLightsaber}></button>
        </div>
           <nav className={`contactMe ${whatSide}`}>
             <p><FaEnvelope color='#616161' /><span>toftnqr@gmail.com</span></p>
             <p><FaGithub /><span>github.com/NKr9612</span></p>
             <p><FaLinkedin color='#0073B1'/><span>linkedin.com/in/norbert-krupa/</span></p>
           </nav>
        
        </div>
      );
}
 
export default Contact;