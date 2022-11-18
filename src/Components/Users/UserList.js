import React from 'react';
import Cart from '../UI/Cart';
import './UserList.css';
const UserList = (props) => {
    return (
        <Cart >
            <div className='users'>
                <ul>
                    {
                        props.users.map(user => (
                            <li key={user.id}>
                                {user.name} ({user.age} years old)
                            </li>
                        ))}
                </ul>
            </div>
        </Cart>
    );
};

export default UserList;