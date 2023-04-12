import React, { useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const FeaturedJobs = ({jobs}) => {

    const [seeAll,setSeeAll]=useState(false);
    let allJobs = jobs;
    if(!seeAll){
        allJobs = jobs.slice(0,4)
    } 
    const handleSeeMore=()=>{
        setSeeAll(!seeAll)
    }

    
    return (
        <div>
            <div className='text-f' >
                <h1>Featured Jobs</h1>
                <p>Featured Jobs badge on a post lets you know that the client is very serious about finding a freelancer for this project.</p>
            </div>
        <Container>
            <Row>
                {
                    allJobs.map(job => <Col md={6} sm={12} key={job.id}
                    className='p=3'
                    >
                        
                        <Card>
                            <Card.Img  variant="top " height ={240} src={job.companyLogo}
                            className='p-2' />
                            <Card.Body>
                                <Card.Title>{job.jobTitle}</Card.Title>
                                <h3>{job.companyName} </h3>
                                <h5>  {  job.isRemote ? 'remote' : 'on-site' }</h5>
                                <h6> {job.jobType}</h6>
                                <h6> <span> { job.location }</span><span>{job.salary} </span></h6>
                             </Card.Body>
                            <Card.Footer>
                          <Link to={`job/${job.id}`}>
                          <Button variant="info">View Details</Button>{' '}
                          </Link>
                            </Card.Footer>
                        </Card>
                    </Col>)
                }

            </Row>
            <div className="text-center">
                <Button variant="info" className='text-center mx-auto '
                onClick={handleSeeMore}
                >{!seeAll?'See All Jobs':'See Less'}</Button>
                </div>
        </Container>
    </div>
    );
};

export default FeaturedJobs;