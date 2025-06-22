import React from 'react'

const CompleteTask =({data})=>{
	return (
			<div className='flex-shrink-0 p-5 h-full w-[300px] bg-yellow-400 rounded-xl  '>
				<div className='flex justify-between items-center'>
					<h3 className='bg-red-500 text-small px-3 py-1 rounded'>{data.category}</h3>
					<h4 className="text-sm">{data.date}</h4>
				</div>
				<h2 className='mt-5 text-left text-xl font-semibold'>{data.tile}</h2>
				<p className='mt-3 text-sm text-left'>{data.description}</p>
				<div className='mt-2'>
					<button className=' bg-green-600 px-3 py-1 mt-3'>Complete</button>

				</div>

			</div>
	)
}
export default CompleteTask