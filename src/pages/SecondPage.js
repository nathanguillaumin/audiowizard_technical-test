import React from 'react';
import { NavLink } from 'react-router-dom';

const SecondPage = () => {
    return (
        <div className='page-container'>
        <div className="card">
            <div className="card-body">
                Peux-tu indiquer son sexe?
            </div>
        </div>

        <form className="input-group flex-nowrap">
            <div className='input-name-container'>
                <button type="button" className="btn btn-light form-control">Homme</button>
                <button type="button" className="btn btn-light form-control">Femme</button>
            </div>
                <NavLink to='/third' className='submit-link'><button type="submit" className="btn btn-primary submit-home-page"><i class="fas fa-arrow-right"></i></button></NavLink>
        </form>
    </div>
    );
};

export default SecondPage;