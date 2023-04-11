import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from '../Nav/NavHeader';
import Header from '../Header/Header';
import JobMain from '../JobMain/JobMain';
import './Home.css'
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <div className='bg'>
            <NavHeader></NavHeader>
            <Header></Header>
            </div>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Home;