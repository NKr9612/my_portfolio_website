import '../Styles/Home.css';

import FallingLetters from '../HelperComponents/FallingLetters';
import FrontendName from '../HelperComponents/FrontendName';
import StarSky from '../HelperComponents/StarSky';

const Home = () => {

     

    return ( 
        <div className="homeWrapper">
        <FallingLetters />
        <FrontendName />
        <StarSky />
        </div>
     );
}
 
export default Home;