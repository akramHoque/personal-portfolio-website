import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <section id='blog'>
            <h2>My Blogs</h2>
            <div className='blog'>
            <div  className='portfolio__item'>
            <article>
                    <h3 className='blog-head'> Comming Soon</h3>
            </article>
            </div>
            <div className='portfolio__item'>
            <article>
                    <h3 className='blog-head'> Comming Soon</h3>
            </article>
            </div>
            <div className='portfolio__item'>
            <article>
                    <h3 className='blog-head'> Comming Soon</h3>
                </article>
            </div>
            </div>
        </section>
    );
};

export default Blogs;