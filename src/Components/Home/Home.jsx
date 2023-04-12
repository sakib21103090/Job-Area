import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import LoadData from '../Load/LoadData';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className='bg'>
            
            <Header></Header>
            </div>
             <div>
            
            <LoadData categories={data.categories} />
            
            
            <div>
            <FeaturedJobs jobs={data.jobs} />
            </div>
        </div>
           
        </div>
    );
};

export default Home;