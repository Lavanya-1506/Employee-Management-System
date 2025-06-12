import React from 'react';

const TaskList=() =>{
	return (
		<div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start flex-nowrap gap-5 w-full py-5 mt-10'>
			<div className='flex-shrink-0 p-5 h-full w-[300px] bg-red-400 rounded-xl  '>
				<div className='flex justify-between items-center'>
					<h3 className='bg-red-500 text-small px-3 py-1 rounded'>High</h3>
					<h4 className="text-sm">12 June 2025</h4>
				</div>
				<h2 className='mt-5 text-left text-xl font-semibold'>Make a promotional video</h2>
				<p className='mt-3 text-sm text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet consectetur saepe quisquam beatae iusto.</p>

			</div>
				<div className='flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-xl  '>
				<div className='flex justify-between items-center'>
					<h3 className='bg-red-500 text-small px-3 py-1 rounded'>High</h3>
					<h4 className="text-sm">12 June 2025</h4>
				</div>
				<h2 className='mt-5 text-left text-xl font-semibold'>Make a promotional video</h2>
				<p className='mt-3 text-sm text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet consectetur saepe quisquam beatae iusto.</p>

			</div>
				<div className='flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl  '>
				<div className='flex justify-between items-center'>
					<h3 className='bg-red-500 text-small px-3 py-1 rounded'>High</h3>
					<h4 className="text-sm">12 June 2025</h4>
				</div>
				<h2 className='mt-5 text-left text-xl font-semibold'>Make a promotional video</h2>
				<p className='mt-3 text-sm text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet consectetur saepe quisquam beatae iusto.</p>

			</div>
		
				<div className='flex-shrink-0 p-5 h-full w-[300px] bg-green-400 rounded-xl  '>
				<div className='flex justify-between items-center'>
					<h3 className='bg-red-500 text-small px-3 py-1 rounded'>High</h3>
					<h4 className="text-sm">12 June 2025</h4>
				</div>
				<h2 className='mt-5 text-left text-xl font-semibold'>Make a promotional video</h2>
				<p className='mt-3 text-sm text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet consectetur saepe quisquam beatae iusto.</p>

			</div>
	

		</div>

	)

}

export default TaskList;