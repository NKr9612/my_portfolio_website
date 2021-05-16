import '../Styles/Projects.css';
import React, { useState } from 'react';
import Flip from 'react-reveal/Reveal';

import SwipeEffect from '../HelperComponents/SwipeEffect';




const Projects = () => {

    const [glint, setGlint] = useState(true);

    setTimeout(function myTimer() {  
        setGlint(!glint)
      setTimeout(setGlint(!glint), 1000); 
     }, 1000);

     const glintCheck = glint? 'active' : "something";

    return ( 
        <div className="projectsContainer" id='projects'>
          <Flip left>
            <h1 className='projectsHeader'>
                <span className={`glint ${glintCheck}`}>[</span>
                Projekty
                <span className={`glint ${glintCheck}`}>]</span>
            </h1>
            </Flip>

            <main className="projectsMain">
                
                <SwipeEffect />
            
            </main>

            
        </div>
     );
}
 
export default Projects;