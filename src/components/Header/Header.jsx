import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;