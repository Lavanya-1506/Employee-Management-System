import React from 'react';


const Header = () =>{
	return (
		<div className='flex items-end justify-between  '>
			<h1 className='text-2xl'>
				Hello <br/><span className='text-3xl'> Lavanya </span>
			</h1>
				<button className='bg-red-500 text-lg font-medium rounded-sm  text-white px-5 py-2'>Logout</button>
		</div>
	)
}
export default Header;