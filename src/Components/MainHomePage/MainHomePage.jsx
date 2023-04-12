import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from '../Nav/NavHeader';




const MainHomePage = () => {
    return (
        <div>
            <NavHeader></NavHeader>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainHomePage;