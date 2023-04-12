import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../Utilits/addToDb';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'




const JobDetail = () => {
    const [detail,setDetail]=useState([]);
    const {id}= useParams()
    useEffect(()=>{
        fetch('/fakedata1.json')
        .then(res=>res.json())
        .then(data=>setDetail(data.jobs))
    },[])
    const data = detail.find(item=>item.id==id)
 
 const handleApply=()=>{
    addToDb(id)
 }
    return (
        <div className='d-flex'>
            
            <div className='style-card w-50'>
              <p> <strong>Job Description:</strong>{data?.jobDescription}</p>
              <p><strong>Job Responsibility:</strong> {data?.jobResponsibility}</p>
              <p><strong>Educational Requirments:</strong>{data?.education}</p>
             <p><strong>Experiences:</strong> {data?.exeperiances}</p>
             </div>
            <div className='style-card'>
          
            <Card border="success" style={{ width: '26rem'}&&{height:'29rem'}}>
        <Card.Header className='text-center'> <strong> Job Details</strong></Card.Header>
        <Card.Body>
          <Card.Text>
          <p> <FontAwesomeIcon icon={faDollar} /> <strong>salary:</strong> {data?.salary} </p>
          </Card.Text>
          <Card.Text>
            
          <p> <FontAwesomeIcon icon={faUser} /> <strong>Job Title:</strong> {data?.jobTitle} </p>
          <h4>Contact Information</h4>
          <hr style={{ borderTop: '1px solid black' }} />
          </Card.Text>
          <Card.Text>
          <p> <FontAwesomeIcon icon={faPhone} /> <strong>phone:</strong> {data?.phone} </p>
          </Card.Text>
          <Card.Text>
          <p> <FontAwesomeIcon icon={faVoicemail} /> <strong>email:</strong> {data?.email} </p>
          </Card.Text>
          <Card.Text>
          <p> <FontAwesomeIcon icon={faAddressBook} /> <strong>Address:</strong> {data?.Address} </p>
          </Card.Text>
        </Card.Body>
       
        <Button  onClick={handleApply} variant="success"> Apply Now</Button>
      </Card>
            </div>
          
        </div>
    );
};

export default JobDetail;