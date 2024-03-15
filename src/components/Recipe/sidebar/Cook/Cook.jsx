
import PropTypes from 'prop-types';

const Cook = () => {
    return (
        <div>
            <h3 className='text-2xl font-semibold'>Want to cook: 01</h3>
            <hr className='bg-[#28282826] mx-auto w-[350px] mt-4' />
            <div className="overflow-x-auto mt-6">
                <table className='table'>
                    {/* head */}
                    <thead className='font-medium'>
                        <tr className='fira text-base text-[#878787] '>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody className='fira bg-[#28282808] text-base text-[#282828B2]'>

                        <tr>
                            <th>1</th>
                            <td className=''>Chicken Stir Fry</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                            <td><button className="btn bg-[#0BE58A]  rounded-l-full text-black rounded-r-full text-base font-medium p-4 flex-nowrap border-none">Preparing</button></td>
                        </tr>

                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

Cook.propTypes = {

};

export default Cook;