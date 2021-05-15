import '../Styles/NavBar.css';


import React, { useState } from 'react';

import {MenuLi} from '../HelperComponents/MenuLi';
import MenuIcon from '../Imgs/menu.png';
import CloseIcon from '../Imgs/cancel.png';

const NavBar = () => {

    const [ifClicked, setIfClicked] = useState(true);

   const handleOpenMenu =()=>{
       setIfClicked(false);
   }
   const handleCloseMenu =() =>{
       setIfClicked(true);
   }

   const openMenu = ifClicked?  null: 'active';

    return ( 
        <nav className='navbarMine' >


          <ul className={`navUl ${openMenu}`}>
              {MenuLi.map((item, index)=>(
                 <li key={index}>{item.name}<span></span></li>
              ))}
         
          </ul>
          { ifClicked ?
          <img src={MenuIcon} alt="menu" className="menuOrClose" onClick={handleOpenMenu}/> :
          <img src={CloseIcon} alt="close" className="menuOrClose" onClick={handleCloseMenu} />
          }
          </nav>
     );
}
 
export default NavBar;