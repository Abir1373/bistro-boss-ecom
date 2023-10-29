import React from 'react';
import Footer from '../pages/shared/footer/Footer';
import Navbar from '../pages/shared/navbar/Navbar';


const layout = ({children}) => {
    return (
        <div className='mx-auto container max-w-screen-xl'>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default layout;