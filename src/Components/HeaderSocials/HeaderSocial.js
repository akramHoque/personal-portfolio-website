import React from 'react';
import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';

const HeaderSocial = () => {
    return (
        <div className='header__social'>
           <a href="https://www.linkedin.com/" target="_blank"><AiFillLinkedin></AiFillLinkedin></a>
           <a href="https://www.github.com/" target='_blank'><BsGithub></BsGithub></a>
        </div>
    );
};

export default HeaderSocial;