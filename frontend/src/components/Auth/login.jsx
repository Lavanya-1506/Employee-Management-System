import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Login= ()=>{

	const [email, setEmail] = useState('');
	const[password, setPassword] = useState('')


	const submitHandler=(e)=>{
		e.preventDefault();         //pass event e and set the event to prevent the default behaviour of the form submission
		// Here you can handle the form submission, e.g., send data to the server
		console.log('Email is:',email);
		console.log('Password is:',password);

		setEmail('');          //After submission, reset the email and password fields
		setPassword('');
	}
	return(
		<div className='flex min-h-screen items-center justify-center'>
			<div className='border-2 bg-[#1c1b1b] rounded-xl border-emerald-600 p-20'>
				<form 
				onSubmit={(e)=>{                       //Created a submit handler to handle form submission
					submitHandler(e);
				}}
				className='flex flex-col items-center justify-center '>
					<input 
					value={email}
					onChange={(e)=>{
						setEmail(e.target.value);
					}}
					required className='text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
					<input
					value={password}
					onChange={(e)=>{
						setPassword(e.target.value);

					}}
					 required className='mt-5 text-black outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type= "password" placeholder="Enter your password"/>
					<button className='mt-5 text-white outline-none  bg-emerald-600 py-3 px-5 rounded-full placeholder:text-white'>Log in</button>

				</form>
			</div>
		</div>
	)

} 

export default Login;