import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const FeaturedJobs = ({jobs}) => {
    
    return (
        <div>
            <div className='text-f'>
                <h1>Featured Jobs</h1>
                <p>Featured Jobs badge on a post lets you know that the client is very serious about finding a freelancer for this project.</p>
            </div>
        <Container>
            <Row>
                {
                    jobs.map(job => <Col md={6} sm={12} key={job.id}>
                        <Card style={{}}>
                            <Card.Img  variant="top " src={job.companyLogo} />
                            <Card.Body>
                                <Card.Title>{job.jobTitle}</Card.Title>
                                <h3>
                                    {job.companyName}
                                </h3>
                                <h5>
                                    {
                                        job.isRemote ? 'remote' : 'on-site'
                                    }
                                </h5>
                                <h6>
                                    {
                                        job.jobType
    
                                    }
                                </h6>
                                <h6>
                                    <span>
                                    {
                                        job.location
    
                                    }
                                    </span>
                                    <span>
                                        {job.salary}
                                    </span>
                                </h6>
                                

                            </Card.Body>
                            <Card.Footer>
                          <Link to={`job/${job.id}`}>
                          <Button variant="primary">View Details</Button>{' '}
                          </Link>
                            </Card.Footer>
                        </Card>
                    </Col>)
                }

            </Row>
        </Container>
    </div>
    );
};

export default FeaturedJobs;