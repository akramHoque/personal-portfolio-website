import React from 'react';
import './Contact.css' ;
import {AiOutlineMail} from 'react-icons/ai' ;
import {BsFacebook} from 'react-icons/bs' ;
import {BsWhatsapp} from 'react-icons/bs' 
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qz83oxz', 'template_3hl5dqb', form.current, 'Y_pgWMVO2-dL2AeYP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <AiOutlineMail className='contact__option-icon'></AiOutlineMail>
                        <h4>Email</h4>
                        <h5>oriniusakram511@gmail.com</h5>
                        <a href="mailto:oriniusakram511@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                       <BsFacebook className='contact__option-icon'></BsFacebook>
                        <h4>Facebook</h4>
                        <h5>Orinius Akram</h5>
                        <a href="https://www.facebook.com/akram.sharif.756/" target="_blank">Send a message</a>
                    </article>
                    <article className='contact__option'>
                       <BsWhatsapp className='contact__option-icon'></BsWhatsapp>
                        <h4>WhatsApp</h4>
                        <h5>+8801855888511</h5>
                        <a href="https://web.whatsapp.com/send?phone+8801855888511">Send a message</a>
                    </article>
                </div>
                <form ref ={form} onSubmit= {sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;