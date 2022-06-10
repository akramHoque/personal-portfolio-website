import React from 'react';
import './About.css' ;
import Me from  '../../Assests/me2.jpg'
import {FaAward} from 'react-icons/fa' ;
import {TbUsers} from 'react-icons/tb' ;
import {VscNewFolder} from 'react-icons/vsc' ;

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="about-image" />
                    </div>

                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'></FaAward>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className='about__card'>
                            <TbUsers className='about__icon'></TbUsers>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>
                        <article className='about__card'>
                            <VscNewFolder className='about__icon'></VscNewFolder>
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ea nam qui, voluptates placeat consectetur officiis dolore. Reprehenderit, nulla fugiat quasi, magnam repellendus sequi quam mollitia culpa debitis placeat sint.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
       
    );
};

export default About;