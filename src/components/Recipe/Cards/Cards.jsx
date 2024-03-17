
import PropTypes from 'prop-types';
import Card from './Card/Card';

const Cards = ({recipes, handleAddToCook}) => {

    return (
        <div className='grid p-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6'>
            {
                recipes.map((recipe, idx)=> <Card key={idx} handleAddToCook={handleAddToCook} recipe={recipe}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    recipes: PropTypes.array.isRequired,
    handleAddToCook: PropTypes.func.isRequired
};

export default Cards;