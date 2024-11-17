
import PropTypes from 'prop-types';

const Cook = ({ cooks, handleAddToCooking }) => {

    return (
        <div>
            <h3 className='text-2xl font-semibold'>Want to cook: {cooks.length}</h3>
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
                        {
                            cooks.map((cook, idx) =>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td className=''>{cook.name}</td>
                                    <td>{cook?.pretime} min</td>
                                    <td>{cook?.calories} calories</td>
                                    <td><button onClick={() => handleAddToCooking(cook, cook.id, cook.pretime, cook.calories)} className="btn bg-[#0BE58A]  rounded-l-full text-black rounded-r-full text-base font-medium p-4 flex-nowrap border-none">Preparing</button></td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

Cook.propTypes = {
    cooks: PropTypes.array.isRequired,
    handleAddToCooking: PropTypes.func.isRequired
};

export default Cook;