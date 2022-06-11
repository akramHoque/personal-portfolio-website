import React from 'react';
import CTA from '../CTA/CTA';
import ME from '../../Assests/akram.png';
import HeaderSocial from '../HeaderSocials/HeaderSocial';
import './Header.css';

const Header = () => {
    return (
       <header>
           <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Orinius Akram</h1>
            <h5 className='text-light'>Front End Developer</h5>
            <CTA></CTA>
            <HeaderSocial></HeaderSocial>
           <div className='me'>
               <img src={ME} alt='me'/>
           </div>
           <a href='#contact' className='scroll__down'>Scroll Down</a>
           </div>
       </header>
    );
};

export default Header;