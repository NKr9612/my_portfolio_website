import '../Styles/Projects.css';
import React, { useState } from 'react';
import Flip from 'react-reveal/Reveal';

const Projects = () => {

    const [glint, setGlint] = useState(true);

    let timer = setTimeout(function myTimer() {  
        setGlint(!glint)
        timer = setTimeout(setGlint(!glint), 1000); 
     }, 1000);

     const glintCheck = glint? 'active' : "something";

    return ( 
        <div className="projectsContainer">
          <Flip left>
            <h1 className='projectsHeader'>
                <span className={`glint ${glintCheck}`}>[</span>
                Projekty
                <span className={`glint ${glintCheck}`}>]</span>
            </h1>
            </Flip>

            
        </div>
     );
}
 
export default Projects;