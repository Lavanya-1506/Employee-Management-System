import React from 'react';
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber'; // adjust path as needed
import TaskList from '../TaskList/TaskList';


const EmployeeDashboard = () => {
  return (
    <div className="p-10 h-screen">
        <Header />
		<TaskListNumber />
		<TaskList/>
    </div>
  );
};

export default EmployeeDashboard;

