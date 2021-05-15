import '../Styles/FrontendName.css';

import React, {useEffect, useState} from 'react';



const FrontendName = () => {
    const [trueAfterSeconds, setTrueAfterSeconds] = useState(false);

    const ifTrueAfterSeconds = trueAfterSeconds ? 'activeName' : null;
     
    
    useEffect( () => (
    setTimeout(()=>{
      setTrueAfterSeconds(!trueAfterSeconds)
    },3000)
    ),[])
    return ( 
        <h3 className='frontendName' id={ ifTrueAfterSeconds}>Frontend_Developer</h3>
     );
}
 
export default FrontendName;