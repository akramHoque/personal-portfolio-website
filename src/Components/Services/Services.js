import React from 'react';
import './Services.css' ;
import {BsCheck} from 'react-icons/bs' ;

const Services = () => {
    return (
       <section id='services'>
        <h5>What I Offer</h5>
        <h2>My Services</h2>
        <div className="container services__container">
            <article className='service'>
                <div className="service__head">
                    <h3>UI/UX Design</h3>
                </div>
                <ul className='service__list'>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>Basic Part of Web Design</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>The major Of an Web Browser HTML</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>The HTML5 For Website and UI Design</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>Casscading Style Sheet(CSS)</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>Desgin With CSS5.</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>Responsive Design With Bootstrap</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>Responsive Design With Tailwind CSS.</p>
                    </li>
                </ul>
            </article>
            <article className='service'>
                <div className="service__head">
                    <h3>Web Development</h3>
                </div>
                <ul className='service__list'>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>Core Javascript For Web Development.</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>React Js For Website Development.</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>React Roueter For SPA.</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>React Firebase Hooks.</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>Firebase Authentication.</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>React Form With Validation.</p>
                    </li>
                    <li>
                    <BsCheck className='service__list-icon'></BsCheck>
                    <p>React Bootstrap For Responsive Design</p>
                    </li>
                </ul>
            </article>
        </div>
       </section>
    );
};

export default Services;