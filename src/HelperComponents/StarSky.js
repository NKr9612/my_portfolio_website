import React from 'react';
import Sky from 'react-sky';

import '../Styles/StarSky.css';

import myImage from '../Imgs/coding.png';
import bracket1 from '../Imgs/bracket1.png';
import bracket from '../Imgs/brackets.png';

const StarSky = () => {
    return ( 
        <div className="starSkyCanvas">
 <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            // 0: "https://linkToYourImage0",  /* You can pass as many images as you want */
            // 1: "https://linkToYourImage1",
            0: myImage,
            1:bracket,
            2:bracket1, /* you can pass images in any form: link, imported via webpack... */
            /* 3: your other image... */
            /* 4: your other image... */
            /* 5: your other image... */
            /* ... */
          }}
          how={80} /* Pass the number of images Sky will render chosing randomly */
          time={80} /* time of animation */
          size={'60px'} /* size of the rendered images */
          background={'white'} /* color of background */
        />

        </div>
     );
}
 
export default StarSky;