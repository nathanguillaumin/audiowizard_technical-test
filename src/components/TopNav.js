import React, { useState } from 'react';
import LeftNav from './LeftNav';
import '../styles/topnav.css';
import { Link } from 'react-router-dom';

const TopNav = () => {
    const [openBurger, setOpenBurger] = useState(false);

    const openBurgerMenu = () => {
      setOpenBurger(true);
    };
  
    const closeBurgerMenu = () => {
      setOpenBurger(false);
    };

    return (
        <div className='topnav-container'>
            <LeftNav handleOpen={openBurgerMenu} handleClose={closeBurgerMenu} show={openBurger} />
            <div className='logo-container'>
                <Link to='/'><img className='logo-audiowizard' src={require('../images/logo_audiowizard.png')} alt='logo AudioWizard' /></Link>
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Thibaut Gressier
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Mon compte</a>
                    <a class="dropdown-item" href="#">Mon profil</a>
                    <a class="dropdown-item" href="#">Se déconnecter</a>
                </div>
            </div>
        </div>
    );
};

export default TopNav;