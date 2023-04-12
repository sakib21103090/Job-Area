import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const JobFilter = ({setFilteredJobs,allJobs}) => {
    const [select,setSelect] = useState('')
const handleChange = filterName=>{
if(filterName==='Remote'){
    const filtered = allJobs.filter(job=>job.isRemote);
    setFilteredJobs([...filtered])
}
else{
    const filtered = allJobs.filter(job=>job.jobType);
    setFilteredJobs([...filtered])
}
}   
 return (
        <div className='d-flex justify-content-end py-3'>
            <Form.Select onChange={(e)=>handleChange(e.target.value)} className='w-25' aria-label="Default select example">
      <option>Filter</option>
      <option value="Remote">Remote</option>
      <option value="Full-time">Full-Time</option> 
    </Form.Select>
        </div>
    );
};

export default JobFilter;