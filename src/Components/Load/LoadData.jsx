import React from 'react';
import './LoadData.css'
import { Col, Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const LoadData = ({categories}) => {
    console.log(categories);
    return (
        <div>
          <div className='text-f'>
          <h1> Job Category List</h1>
          <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
          <Container className='y'>
                <Row>
                    {
                        categories.map(category => <Col md={3}sm={12} key={category.categoryId}>
                            <Card className='z'>
                                <Card.Img className='cgt-img rounded-circle' variant="top" src={category.categoryLogo} />
                                <Card.Body>
                                    <Card.Title>{category.categoryName}</Card.Title>
                                    <Card.Text>{category.jobsAvailable}  Jobs Available</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }

                </Row>
            </Container>
          
         
        </div>
    );
};

export default LoadData;