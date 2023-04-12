import React from 'react';
import head from '../Header/head.jpg'
import './Header.css'
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';


const Header = () => {
    return (
            <div>
            <Container className='pt-5'>
                <Row className='align-items-center'>
                <Col md={6} className=' fw-bold d-flex justify-content-center' >
                    <div className="
                    
                    ">
                        <h1>Success is<br /> what motivates me  <br /> <span className='text-c'>to do a good job</span></h1>
                    <div className='tt'>
                        <h5> hard work and perseverance will help me achieve greater professional success is what keeps me going. I feel that aligning the company's vision and values with my own is one way to achieve that</h5>
                    </div>

                    <button className='Get-Started rounded'>Get Started</button>
                    </div>
                </Col>
                <Col md={6}>
                    <img className=' img-fluid' src={head} alt="" />
                </Col>
                </Row>
            </Container>
            </div>
        

        
    );
};

export default Header;