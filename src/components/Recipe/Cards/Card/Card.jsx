import { LuClock3 } from "react-icons/lu";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';

const Card = ({recipe, handleAddToCook}) => {
    const {name , description,ingredients ,pretime, calories , img} = recipe;
   
    return (
        <div className="border text-left   p-6 border-[#28282833] rounded-2xl flex flex-col justify-between">
        <div className=' '>
            <img className='w-full h-[200px] rounded-2xl' src={img} alt="" />
            <h3 className='text-xl pt-6 font-semibold'>{name}</h3>
            <p className='fira pt-4 text-[#878787]'>{description}</p>
            <div className=' border-t py-4 mt-4  border-b border-[#2828281A]'>
                <h3 className='text-lg font-medium'>Ingredients: {ingredients.length}</h3>
                <ul className='fira pt-4 text-lg text-[#878787]'>
                   {
                    ingredients.map((i,idx)=> <li key={idx}>{i}</li>)
                   }
                </ul>
            </div>
            <div className="flex gap-4 py-6">
                <p className="flex items-center gap-2 text-[#282828CC]"><LuClock3 className="text-2xl"/>{pretime}</p>
                <p className="flex items-center gap-2 text-[#282828CC]"><AiOutlineFire className="text-2xl"/>{calories}</p>
            </div>
        </div>
        <button onClick={()=> handleAddToCook(recipe)} className="btn bg-[#0BE58A]  rounded-l-full text-black rounded-r-full text-lg mr-6 font-medium w-1/2 flex-nowrap border-none">Want to Cook</button>
        </div>
    );
};

Card.propTypes = {
    
};

export default Card;