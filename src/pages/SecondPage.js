import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserInfosContext from '../context/UserInfosContext';

const SecondPage = () => {
    const { gender, setGender } = useContext(UserInfosContext)

    const handleChoose = (e) => {
        setGender(e.target.id)
    }

    return (
        <div className='page-container'>
        <div className="card">
            <div className="card-body">
                Peux-tu indiquer son sexe?
            </div>
        </div>

        <form className="input-group flex-nowrap">
            <div className='input-name-container'>
                <button 
                    type="button" 
                    id='man' 
                    className="btn btn-light form-control"
                    onClick={(e) => handleChoose(e)}
                >
                Homme
                </button>

                <button 
                    type="button" 
                    id='woman' 
                    className="btn btn-light form-control"
                    onClick={(e) => handleChoose(e)}
                >
                Femme
                </button>
            </div>
                <NavLink to='/third' className='submit-link'><button type="submit" className="btn btn-primary submit-home-page"><i class="fas fa-arrow-right"></i></button></NavLink>
        </form>
    </div>
    );
};

export default SecondPage;