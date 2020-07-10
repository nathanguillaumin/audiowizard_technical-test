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
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Thibaut Gressier
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">Mon compte</a>
                    <a className="dropdown-item" href="/">Mon profil</a>
                    <a className="dropdown-item" href="/">Se déconnecter</a>
                </div>
            </div>
        </div>
    );
};

export default TopNav;