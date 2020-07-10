import React, { useState } from 'react';
import HomePage from '../pages/HomePage';
import SecondPage from '../pages/SecondPage';
import ThirdPage from '../pages/ThirdPage';
import { Switch, Route } from 'react-router-dom';
import UserInfosContext from '../context/UserInfosContext';

const MainApp = () => {
    return (
        <UserInfosContext.Provider value={{test, setTest}}>
            <Switch>
                <Route exact path='/'><HomePage /></Route>
                <Route exact path='/second'><SecondPage /></Route>
                <Route exact path='/third'><ThirdPage /></Route>
            </Switch>
            </UserInfosContext.Provider>
    );
};

export default MainApp;