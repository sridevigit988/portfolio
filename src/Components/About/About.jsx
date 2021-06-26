import React from 'react';
import FooterLink from './../FooterLink/FooterLink';
import Header from './../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/aboutme.gif';
import './About.css';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png'; 

const About=()=>{
    return (
        <div className='section-container'>
            <Header
                heading='About Me'
               
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Experience</h3>
                    <p className='about-details'>
                    Experienced Software Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Full Stack .Net Development. Strong engineering professional with a Master’s Degree focused in Computer Science from Sikkim Manipal University.{' '}
                      
                    </p>

                    {/* Sub section 2 */}
                     <h3 className='about-sub-head'>Hobbies</h3>
                    <p className='about-details'>
                       <ul>
                           <li>Tech Enthusiast who likes exploring new technologies</li>
                           <li>Foodie</li>
                           <li>Love to listen music</li>
                       </ul>
                    </p>  

                    {/* Sub section 3 */}
                     <h3 className='about-sub-head'>Language known</h3>
                    <p className='about-details'>
                    <ul>
                           <li>Kannada</li>
                           <li>English</li>
                           <li>Hindi</li>
                       </ul>
                    </p>
                    <h3 className='about-sub-head'>Get in touch</h3>
                    <p className='about-details'>
                    <div>
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
                    </p>  
                </div> 

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            {/* <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            /> */}
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;