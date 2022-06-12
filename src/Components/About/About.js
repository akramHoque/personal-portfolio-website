import React from 'react';
import './About.css' ;
import Me from  '../../Assests/akram2.png'
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
                    <p>This is Md. Akramul Hoque and I have been working on web design and web development last one year and I have appreciated all the great experiences while working in this sector. Currently learning more new programing technology and I have fallen in love with programing technology. I have been working for a long time with great success on how to handle projects with clients, leadership skills, communication skills etc.  </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
       
    );
};

export default About;