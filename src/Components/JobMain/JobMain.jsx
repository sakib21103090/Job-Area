import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LoadData from '../Load/LoadData';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';


const JobMain = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <LoadData categories={data.categories} />
            
            <div>
            {/* <FeaturedJobs jobs={data.jobs} /> */}
            </div>
        </div>
    );
};

export default JobMain;