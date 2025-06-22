import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const [userData, setUserData] = useContext(AuthContext);

    const submitHandler = (e) => {
        e.preventDefault();

        const taskObj = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        // Create a deep copy of userData and update immutably
        const updatedUserData = {
            ...userData,
            employees: userData.employees.map(emp => {
                if (emp.firstName === assignTo) {
                    return {
                        ...emp,
                        tasks: [...emp.tasks, taskObj],
                        taskCount: {
                            ...emp.taskCount,
                            newTask: emp.taskCount.newTask + 1
                        }
                    };
                }
                return emp;
            })
        };

        setUserData(updatedUserData); // This triggers a re-render

        // Optionally update localStorage if you want persistence
        localStorage.setItem('employees', JSON.stringify(updatedUserData.employees));

        // Clear form fields
        setTaskTitle('');
        setCategory('');
        setAssignTo('');
        setTaskDescription('');
        setTaskDate('');
    };

    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form
                onSubmit={submitHandler}
                className='flex flex-wrap w-full items-start justify-between '
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-left ml-15 mb-2 text-sm text-gray-300 '>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={e => setTaskTitle(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder="Enter Task Title"
                        />
                    </div>
                    <div>
                        <h3 className='text-left ml-15 mb-2 text-sm text-gray-300 '>Date</h3>
                        <input
                            value={taskDate}
                            onChange={e => setTaskDate(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className='text-left ml-15 mb-2 text-sm text-gray-300'>Assign To</h3>
                        <input
                            value={assignTo}
                            onChange={e => setAssignTo(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder="Employee"
                        />
                    </div>
                    <div>
                        <h3 className='text-left ml-15 mb-2 text-sm text-gray-300 '>Category</h3>
                        <input
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text"
                            placeholder="design, development, etc"
                        />
                    </div>
                </div>

                <div className="w-2/5 flex flex-col items-start">
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={e => setTaskDescription(e.target.value)}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 '
                        cols="30"
                        rows="10"
                    ></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;


