import React from 'react';
import { NavLink } from 'react-router-dom';
import BurgerButton from './BurgerButton';

const LeftNav = ({ show, handleOpen, handleClose }) => {
    let navClasses = 'nav-menu';
        if (show) {
            navClasses = 'nav-menu open';
        }

    return (
        <div className='leftnav-container'>
            <BurgerButton onClick={handleOpen} />
            <nav className={navClasses}>
                <div className='closing-menu'>
                    <i className='fas fa-times' onClick={handleClose} />
                </div>
                <ul className='menuItems'>
                    <li><NavLink onClick={handleClose} to='/'>Première visite</NavLink></li>
                    <li><NavLink onClick={handleClose} to='/'>Adaptation</NavLink></li>
                    <li><NavLink onClick={handleClose} to='/'>Patients en soin</NavLink></li>
                    <li><NavLink onClick={handleClose} to='/'>Patients appareillés</NavLink></li>
                    <hr/>
                    <li><NavLink onClick={handleClose} to='/'>Autres</NavLink></li>
                    <li><NavLink onClick={handleClose} to='/'>Statistiques</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default LeftNav;