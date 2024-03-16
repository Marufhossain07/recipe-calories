
import PropTypes from 'prop-types';
import Cards from './Cards/Cards';
import Sidebar from './sidebar/Sidebar';

const Recipe = ({recipes, handleAddToCook, cooks,handleAddToCooking,cooking,time, calories}) => {
    return (
        <div className='text-center mt-24'>
            <h3 className='text-[40px] mb-6 font-semibold'>Our Recipes</h3>
            <p>Dive into a world of flavor with our diverse collection of tantalizing recipes, crafted with <br /> passion and expertise. Explore culinary inspiration that's sure to impress.</p>
            <div className='flex flex-col-reverse md:flex-row lg:flex-row gap-6 mt-12'>
                <Cards handleAddToCook={handleAddToCook} recipes={recipes}></Cards>
                <Sidebar calories={calories} time={time} cooking={cooking} handleAddToCooking={handleAddToCooking} cooks={cooks}></Sidebar>
            </div>
        </div>

    );
};

Recipe.propTypes = {

};

export default Recipe;