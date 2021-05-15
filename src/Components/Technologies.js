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

   let timer = setTimeout(function myTimer() {  
    setGlint(!glint)
    timer = setTimeout(setGlint(!glint), 1000); 
 }, 1000);
    
   const glintCheck = glint? 'active' : "something";

    return (
        <div className="technologies">
            <Flip left>
            <h1 className='technologyHeader'>
                <span className={`glint ${glintCheck}`}>[</span>
                Technologie
                <span className={`glint ${glintCheck}`}>]</span>
            </h1>
            </Flip>
            <nav className='technologyContainer'>
                <ul>
                   <li className="html5">
                       <div className="wrapperIcon">
                       <FaHtml5 size='5em' color='#DF4E26'style={styles} />
                       </div>
                       <p>HTML5</p>
                   </li>
                   <li className="css3">
                       <FaCss3Alt size='5em' color='#0C6FB2' style={styles}/>
                       <p>CSS3</p>
                   </li>
                   <li className="js">
                       <FaJs size='5em' color='#EFD81D' style={styles}/>
                       <p>JavaScript</p>
                   </li>
                   <li className="react">
                       <FaReact size='5em' color='#00D1F7'style={styles}/>
                       <p>React</p>
                   </li>
                   <li className="git">
                       <FaGitAlt size='5em' color='#E84D31'style={styles}/>
                       <p>Git</p>
                   </li>
                   <li className="bootstrap">
                       <FaBootstrap size='5em' color='#58407E' style={styles}/>
                       <p>Bootstrap</p>
                   </li>
                   <li className="sass">
                       <FaSass size='5em' color='#C96195' style={styles}/>
                       <p>Sass</p>
                   </li>
                   <li className="npm">
                       <FaNpm size='5em' color='#C53635'style={styles}/>
                       <p>npm</p>
                   </li>
                   <li className="rwd">
                       <FaMobileAlt size='5em' color='##000000'style={styles}/>
                       <p>RWD</p>
                   </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Technologie;