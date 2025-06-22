import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    // Guard clause: show nothing or a loader if data is not ready
    // if (!authData || !authData.employees) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className='bg-[#3d3d3d6b] p-5 rounded mt-5 h-95 '>
            <div className=' py-3 mb-2 px-5 flex justify-between rounded'>
                <h2 className=' text-xl font-bold w-1/5 py-2 bg-red-500 '>Employee Name</h2>
                <h3 className='text-xl font-bold w-1/5 py-2 bg-red-500 '>New Task</h3>
                <h5 className='text-xl font-bold w-1/5 py-2 bg-red-500'>Active Task</h5>
                <h5 className='text-xl font-bold w-1/5 py-2 bg-red-500'>Completed</h5>
                <h5 className='text-xl font-bold w-1/5 py-2 bg-red-500'>Failed</h5>
            </div>
            <div id='alltask' className='h-[80%] '>
                {userData.employees.map(function (elem, idx){
                    return (
                        <div key={idx} className='bg-emerald-700 py-2 mb-2 px-4 flex justify-between rounded'>
                            <h2 className='text-xl font-medium w-1/5  '>{elem.firstName}</h2>
                            <h3 className='text-xl font-medium w-1/5 text-blue-400 '>{elem.taskCount.newTask}</h3>
                            <h5 className='text-xl font-medium w-1/5 text-yellow-500'>{elem.taskCount.active}</h5>
                            <h5 className='text-xl font-medium w-1/5 text-green-600'>{elem.taskCount.completed}</h5>
                            <h5 className='text-xl font-medium w-1/5 text-red-500'>{elem.taskCount.failed}</h5>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllTask;