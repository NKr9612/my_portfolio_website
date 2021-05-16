import React, { useState } from 'react';
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa';

// import swipeArray from './swipeArray';
import ImgTetris from '../Imgs/imgTetris.png';
import ImgPortfolio from '../Imgs/imgPortfolio.png';
import ImgRouter from '../Imgs/imgReactRouter.png'

const swipeArray = [


    {
        urlImg: ImgTetris,
        urlCode:'https://github.com/NKr9612/TetrisReactJS',
        urlDemo:'https://nkr9612.github.io/TetrisReactJS/',
        contextH1:'Tetris w ReactJS',
    },
    {
        urlImg: ImgPortfolio,
        urlCode:'https://github.com/NKr9612/my_portfolio_website',
        urlDemo:'#',
        contextH1:'Wizytówka',
    },
    {
        urlImg: ImgRouter,
        urlCode:'https://github.com/NKr9612/ReactRouter_SPA',
        urlDemo:'https://nkr9612.github.io/ReactRouter_SPA/',
        contextH1:'Strona z ReactRouter ',
    },
]

const SwipeEffect = () => {

    const [indexOfSwipe, setIndexOfSwipe] = useState(0);

    const handleLeftSwipe = () => {
       indexOfSwipe > 0 && setIndexOfSwipe(indexOfSwipe -1);
    }

    const handleRightSwipe = () =>{
    indexOfSwipe < swipeArray.length - 1 && setIndexOfSwipe(indexOfSwipe + 1);
    }

    return ( 
        <>
        <span className='left' onClick={handleLeftSwipe}> <FaAngleLeft size='10x' /> </span>
        <div className="carousel">
            <img src={`${swipeArray[indexOfSwipe].urlImg}`} alt="tetris" />
            <h1 className='carouselH1'>{swipeArray[indexOfSwipe].contextH1}</h1>
            <button className='code'><a href={`${swipeArray[indexOfSwipe].urlCode}`}>View Code</a></button>
            <button className = 'demo'><a href={`${swipeArray[indexOfSwipe].urlDemo}`}>Demo</a></button>

            
      </div>
      <span className='right' onClick={handleRightSwipe}><FaAngleRight size='10x'/></span>
      </>
     );
}
 
export default SwipeEffect;