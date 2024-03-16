
import PropTypes from 'prop-types';
import Cook from './Cook/Cook';
import Cooking from './Cooking/Cooking';
import { useState } from 'react';

const Sidebar = ({cooks,handleAddToCooking,cooking,time,calories}) => {

    return (
        <div className='pt-8 border border-[#28282833] rounded-2xl'>
            <Cook handleAddToCooking={handleAddToCooking} cooks={cooks}></Cook>
            <Cooking calories={calories} time={time} cooking={cooking}></Cooking>
        </div>
    );
};

Sidebar.propTypes = {
    
};

export default Sidebar;