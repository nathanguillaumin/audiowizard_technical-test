import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/pages.css';
import UserInfosContext from '../context/UserInfosContext';

const HomePage = () => {
    const { user, setUser } = useContext(UserInfosContext)

    const handleChangeForm = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className='page-container'>
            <div className="card">
                <div className="card-body">
                    Peux-tu indiquer l'identité du patient?
                </div>
            </div>

            <form className="input-group flex-nowrap">
                <div className='input-name-container'>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder='Nom'
                        value={user.lastName}
                        onChange={(e) => handleChangeForm(e)}
                        aria-label="Username" 
                        aria-describedby="addon-wrapping"
                        name='lastName'
                    />
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder='Prénom'
                        value={user.firstName} 
                        onChange={(e) => handleChangeForm(e)}
                        aria-label="Username" 
                        aria-describedby="addon-wrapping"
                        name='firstName' 
                    />
                </div>
                    <NavLink to='/second' className='submit-link'><button type="submit" className="btn btn-primary submit-home-page"><i className="fas fa-arrow-right"></i></button></NavLink>
            </form>
        </div>
    );
};

export default HomePage;