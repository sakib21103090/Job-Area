import React, { useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import JobFilter from './JobFilter';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';



const AppliedJobs = () => {
    const appliedItems = JSON.parse(localStorage.getItem('applied'))
    const dataA = useLoaderData();
    
    const appliedJobs = dataA?.jobs?.filter(job=>appliedItems?.includes(job.id.toString())) || [];
    const [allJobs,setAllJobs] = useState(appliedJobs)
    const [filteredJobs,setFilteredJobs] = useState(appliedJobs)
    
    return (
        <Container className='pt-5'>
            <JobFilter 
            allJobs={allJobs}
            setFilteredJobs={setFilteredJobs}
            />
            <Row className=' '>
            {
                filteredJobs.map(job=><Col 
                key={job.id} 
                sm={12}
                className='border my-3 rounded'
                >
                <div className='d-flex'>
                <div>
                    <img className='img-size' src={job.companyLogo} alt="" />
                </div>
                <div className='d-flex align-items-center '>
                <div className='m-style'>
                <h3>{job.jobTitle}</h3> 
                <h3>{job.companyName}</h3> 
                <h4>{job.isRemote?'Remote':'On-site'}</h4> 
                <h4>{job.jobType}</h4>
                <p> <FontAwesomeIcon icon={faAddressBook} /> <strong>Address:</strong> {job.Address} </p>
                </div>
                <div className='m-style  align-items-center '>
                <Button variant="info">View Details</Button>{' '}
                </div>
                </div>
                </div>
                 
                </Col>)
            }
            </Row>
            
        </Container>
    );
};

export default AppliedJobs;