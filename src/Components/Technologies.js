import '../Styles/Technologies.css';

import {FaGitAlt, FaCss3Alt, FaReact, FaHtml5, FaJs, FaBootstrap, FaSass, FaNpm} from "react-icons/fa";

const styles= {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    transition:'0.3s'
    
};

const Technologie = () => {
    return (
        <div className="technologies">
            <h1 className='technologyHeader'>
                <span className='glint'>[</span>
                Technologie
                <span className='glint'>]</span>
            </h1>
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
                </ul>
            </nav>
        </div>
     );
}
 
export default Technologie;