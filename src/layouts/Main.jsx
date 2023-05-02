import React from 'react';
import Header from '../pages/Home/Home/Shared/Header/Header';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;