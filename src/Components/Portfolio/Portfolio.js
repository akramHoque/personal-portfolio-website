import React from 'react';
import './Portfolio.css'
import img1 from '../../Assests/portfolio1.png'
import img2 from '../../Assests/portfolio2.png'
import img3 from '../../Assests/portfolio3.png'
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__image-item">
                        <img src={img3} alt="" />
                    </div>
                    <h3> Organic Fruits Warehouse</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/akramHoque/warehouse-management-website" className='btn'>Client Site</a>
                        <a href="https://github.com/akramHoque/warehouse-management-website-server" className='btn'>Server Site</a>
                        <a href="https://assignment-11-20be0.web.app/" className='btn btn-primary'>Live Site</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__image-item">
                        <img src={img2} alt="" />
                    </div>
                    <h3>  Gym Trainer Website(Independent Service Provider)</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/akramHoque/independent-service-provider" className='btn'>Client Site</a>
                        <a href="https://assignment-10-gym-trainer.web.app/" className='btn btn-primary'>Live Site</a>
                    </div>
                </article>
                <article className='portfolio__item'>
                    <div className="portfolio__image-item">
                        <img src={img1} alt="" />
                    </div>
                    <h3> Zenith Manufacturing Company</h3>
                    <div className='portfolio__item-cta'>
                        <a href="https://github.com/akramHoque/manufacturer-website-client-side" className='btn'>Client Site</a>
                        <a href="https://github.com/akramHoque/manufacturer-website-server" className='btn'>Server Site</a>
                        <a href="https://assignment-12-53a87.web.app/" className='btn btn-primary'>Live Site</a>
                    </div>

                </article>
            </div>
        </section>
    );
};

export default Portfolio;