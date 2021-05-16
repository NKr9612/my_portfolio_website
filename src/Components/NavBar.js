import '../Styles/NavBar.css';

import {Link} from 'react-scroll';
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
                <Link  key = {index +1}
                to={item.url}
                 activeClass="active"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={500}
                delay={100}
                isDynamic={true}>
                 <li key={index}>{item.name}<span></span></li>
                 </Link>
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