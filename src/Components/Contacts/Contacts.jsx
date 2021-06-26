import React from 'react'; 
import Header from '../Header/Header';
import './Contacts.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png'; 

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch and know more about me' 
            />

            {/* Form section */}
            

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/sridevigit988/' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/n-sridevi-7a7284112'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
               
            </div>
 
            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;