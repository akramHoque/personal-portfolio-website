import React from 'react';
import {RiHome2Line} from 'react-icons/ri' ;
import {AiOutlineUser} from 'react-icons/ai' ;
import {BsBookmarkPlus} from 'react-icons/bs' ;
import {MdOutlineLocalLaundryService} from 'react-icons/md' ;
import {BiMessage} from 'react-icons/bi' ;
import './Nav.css';
import { useState } from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className= {activeNav === '#' ? 'active': ''} ><RiHome2Line></RiHome2Line></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active': ''}><AiOutlineUser></AiOutlineUser></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active': ''}><BsBookmarkPlus></BsBookmarkPlus></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className= {activeNav === '#services' ? 'active': ''}><MdOutlineLocalLaundryService></MdOutlineLocalLaundryService></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active': ''}><BiMessage></BiMessage></a>
        </nav>
    );
};

export default Nav;