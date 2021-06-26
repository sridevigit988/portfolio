import React from 'react';
import { Link } from 'react-router-dom';
import homeAnime from './../../assets/home_office.gif';
import './Home.css';

const About=()=>{
    return(
        <div className='home-container'> 
        <div className='header-text'>
            <h1>Welcome to my portfolio!</h1>
            <p>This is Sridevi, a full stack .Net developer and a tech enthusiast</p>
        </div>
        <div className='head-btns'>
            <Link to='/about' className='btn btn-white'>
                <p className='btn-text'>Know more about me</p>
            </Link>
            <Link to='/skills' className='btn btn-transparent'>
                <p className='btn-text'>Know my skills</p>
            </Link>
        </div>
        <div className='splash-image'>
            <img
                src={homeAnime}
                alt='animation'
                className='home-anime'
            />
        </div>
    </div>
);
};

export default About;