
import PropTypes from 'prop-types';
import Cook from './Cook/Cook';
import Cooking from './Cooking/Cooking';

const Sidebar = () => {
    return (
        <div className='pt-8 border border-[#28282833] rounded-2xl'>
            <Cook></Cook>
            <Cooking></Cooking>
        </div>
    );
};

Sidebar.propTypes = {
    
};

export default Sidebar;