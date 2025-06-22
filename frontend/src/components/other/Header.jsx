import React, { useState, useEffect } from 'react';

const Header = ({ changeUser, data }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (!data) {
            setUsername("Admin");
        } else {
            setUsername(data.firstName);
        }
    }, [data]);

    const logOut = () => {
        localStorage.setItem('loggedInUser', '');
        if (typeof changeUser === 'function') {
            changeUser(null);
        }
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