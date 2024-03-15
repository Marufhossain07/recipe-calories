
import PropTypes from 'prop-types';

const Cooking = () => {
    return (
        <div className='mt-8'>
        <h3 className='text-2xl font-semibold'>Currently cooking: 02</h3>
        <hr className='bg-[#28282826] mx-auto w-[350px] mt-4' />
        <div className="overflow-x-auto mt-6">
            <table className='table'>
                {/* head */}
                <thead>
                    <tr className='fira text-base text-[#878787] font-medium'>
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
                    </tr>
                  
                </tbody>
                <tfoot className='text-base font-medium text-[#282828CC]'>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total Time = <br />
                                45 minutes</td>
                            <td>Total Calories = <br />
                                1050 calories</td>
                        </tr>
                    </tfoot>
            </table>
        </div>
    </div>
    );
};

Cooking.propTypes = {
    
};

export default Cooking;