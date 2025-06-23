import React, { useState, useEffect } from 'react';
import { setLocalStorage } from '../../utils/localStorage';

const Header = (props) => {
    const [username, setUsername] = useState('');
    const data = props.data;

    useEffect(() => {
        if (!data) {
            setUsername("Admin");
        } else {
            setUsername(data.firstName);
        }
    }, []);

    const logOut = () => {
        localStorage.setItem('loggedInUser', '');
        props.changeUser('')
        // window.location.reload(); // Uncomment if you want a hard reload
    };

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl'>
                Hello <br /><span className='text-3xl'>{username}</span>
            </h1>
            <button
                onClick={logOut}
                className='bg-red-500 text-lg font-medium rounded-sm text-white px-5 py-2'
            >
                Logout
            </button>
        </div>
    );
};

export default Header;