import React from 'react';
import './Footer.css' ;
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>ORINIUS</a>
            <ul className='links'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#blog">Blogs</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://www.facebook.com/"><BsFacebook></BsFacebook></a>
                <a href="https://www.linkedin.com/"><BsLinkedin></BsLinkedin></a> 
            </div>
            <div className="footer__copyright">
                <small>&copy; Orinius Akram. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;