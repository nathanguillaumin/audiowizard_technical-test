import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/pages.css'

const HomePage = () => {
    return (
        <div className='page-container'>
            <div className="card">
                <div className="card-body">
                    Peux-tu indiquer l'identité du patient?
                </div>
            </div>

            <form className="input-group flex-nowrap">
                <div className='input-name-container'>
                    <input type="text" className="form-control" placeholder="Nom" aria-label="Username" aria-describedby="addon-wrapping" />
                    <input type="text" className="form-control" placeholder="Prénom" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                    <NavLink to='/second' className='submit-link'><button type="submit" className="btn btn-primary submit-home-page"><i class="fas fa-arrow-right"></i></button></NavLink>
            </form>
        </div>
    );
};

export default HomePage;