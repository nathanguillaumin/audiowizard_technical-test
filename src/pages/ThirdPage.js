import React, { useContext } from 'react';
import UserInfosContext from '../context/UserInfosContext';
import '../styles/pages.css';

const ThirdPage = () => {
    const { user, gender } = useContext(UserInfosContext)

    return (
        <div className='page-container'>
            <h3>
                {gender ==='man' && 'Monsieur '}
                {gender ==='woman' && 'Madame '}
                {user.firstName} {user.lastName}
            </h3>
        </div>
    );
};

export default ThirdPage;