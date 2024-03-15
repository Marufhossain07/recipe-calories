
import PropTypes from 'prop-types';
import Cards from './Cards/Cards';
import Sidebar from './sidebar/Sidebar';

const Recipe = ({recipes}) => {
    return (
        <div className='text-center mt-24'>
            <h3 className='text-[40px] mb-6 font-semibold'>Our Recipes</h3>
            <p>Dive into a world of flavor with our diverse collection of tantalizing recipes, crafted with <br /> passion and expertise. Explore culinary inspiration that's sure to impress.</p>
            <div className='flex gap-6 mt-12'>
                <Cards recipes={recipes}></Cards>
                <Sidebar></Sidebar>
            </div>
        </div>

    );
};

Recipe.propTypes = {

};

export default Recipe;