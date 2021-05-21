import '../Styles/Technologies.css';

import React, { useState } from 'react';

import Flip from 'react-reveal/Reveal';

import {FaGitAlt, FaCss3Alt, FaReact, FaHtml5, FaJs, FaBootstrap, FaSass, FaNpm, FaMobileAlt} from "react-icons/fa";

const styles= {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    transition:'0.3s'
    
};

const Technologie = () => {

    const [glint, setGlint] = useState(true);

//    setInterval(()=>(setGlint(!glint)),1000); - aplikacja się sypie, czemu?

    setTimeout(function myTimer() {  
    setGlint(!glint)
   setTimeout(setGlint(!glint), 1000); 
 }, 1000);
    
   const glintCheck = glint? 'active' : "something";

    return (
        <div className="technologies" id='technologies'>
            <Flip left>
            <h1 className='technologyHeader'>
                <span className={`glint ${glintCheck}`}>[</span>
                Technologie
                <span className={`glint ${glintCheck}`}>]</span>
            </h1>
            </Flip>
            <nav className='technologyContainer'>
                <ul className='technologyUl'>
                   <li className="html5">
                       <FaHtml5  color='#DF4E26'style={styles}  className='faIcons'/>
                       <p>HTML5</p>
                   </li>
                   <li className="css3">
                       <FaCss3Alt  color='#0C6FB2' style={styles} className='faIcons'/>
                       <p>CSS3</p>
                   </li>
                   <li className="js">
                       <FaJs  color='#EFD81D' style={styles} className='faIcons'/>
                       <p>JavaScript</p>
                   </li>
                   <li className="react">
                       <FaReact  color='#00D1F7'style={styles} className='faIcons'/>
                       <p>React</p>
                   </li>
                   <li className="git">
                       <FaGitAlt  color='#E84D31'style={styles} className='faIcons'/>
                       <p>Git</p>
                   </li>
                   <li className="bootstrap">
                       <FaBootstrap  color='#58407E' style={styles} className='faIcons'/>
                       <p>Bootstrap</p>
                   </li>
                   <li className="sass">
                       <FaSass  color='#C96195' style={styles} className='faIcons'/>
                       <p>Sass</p>
                   </li>
                   <li className="npm">
                       <FaNpm  color='#C53635'style={styles} className='faIcons'/>
                       <p>npm</p>
                   </li>
                   <li className="rwd">
                       <FaMobileAlt color='##000000'style={styles} className='faIcons'/>
                       <p>RWD</p>
                   </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Technologie;