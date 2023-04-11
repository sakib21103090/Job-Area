import React from 'react';
import head from '../Header/head.jpg'
import './Header.css'
import Button from 'react-bootstrap/Button';


const Header = () => {
    return (
        <div className='style-header'>
            <div className='style-text fw-bold' >
               <h1>Success is <br /> what motivates me <br /> <span className='text-c'> to do a good job.</span></h1>
               <div className='tt'>
               <h5> hard work and perseverance will help me achieve greater professional success is what keeps me going. I feel that aligning the company's vision and values with my own is one way to achieve that</h5>
               </div>
               
               <button className='Get-Started rounded'>Get Started</button>
            </div>
            <div>
                <img className='image-style img-fluid' src={head} alt="" />
            </div>
        </div>
    );
};

export default Header;