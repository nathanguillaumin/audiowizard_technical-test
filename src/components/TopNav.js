import React from 'react';
import '../styles/topnav.css'

const TopNav = () => {
    return (
        <div className='topnav-container'>
            <div className='logo-container'>
                <img className='logo-audiowizard' src={require('../images/logo_audiowizard.png')} alt='logo AudioWizard' />
            </div>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Thibaut Gressier
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
        </div>
    );
};

export default TopNav;