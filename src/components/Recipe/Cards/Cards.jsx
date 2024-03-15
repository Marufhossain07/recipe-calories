
import PropTypes from 'prop-types';
import Card from './Card/Card';

const Cards = ({recipes}) => {
    console.log(recipes)
    return (
        <div className='grid grid-cols-2 gap-6'>
            {
                recipes.map((recipe, idx)=> <Card key={idx} recipe={recipe}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    recipes: PropTypes.array.isRequired
};

export default Cards;