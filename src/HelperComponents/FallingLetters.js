import * as React from "react";
import '../Styles/FallingLetters.css';


// customowy hook
import {useDencrypt} from 'use-dencrypt-effect';

const values = ["Norbert__Krupa", "Norbert__Krupa"];

const FallingLetters = () => {

  const { result, dencrypt } = useDencrypt();


 
  React.useEffect(() => {
    let i = 0;
 
    const action = setInterval(() => {
      dencrypt(values[i]);
 
      i = i === values.length - 1 ? 0 : i + 1;
    }, 1500);
 
    return () => clearInterval(action);
  }, [dencrypt]);

  
 
  return( 
  <div className='fullName'>{result}</div> 
  
  );
}
 
export default FallingLetters;