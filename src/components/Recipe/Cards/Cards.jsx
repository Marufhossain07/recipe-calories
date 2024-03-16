
import PropTypes from 'prop-types';
import Card from './Card/Card';

const Cards = ({recipes, handleAddToCook}) => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            {
                recipes.map((recipe, idx)=> <Card key={idx} handleAddToCook={handleAddToCook} recipe={recipe}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    recipes: PropTypes.array.isRequired
};

export default Cards;