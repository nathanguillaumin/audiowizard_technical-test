import React from 'react';
import HomePage from '../pages/HomePage';
import SecondPage from '../pages/SecondPage';
import ThirdPage from '../pages/ThirdPage';
import { Switch, Route } from 'react-router-dom';

const MainApp = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'><HomePage /></Route>
                <Route exact path='/second'><SecondPage /></Route>
                <Route exact path='/third'><ThirdPage /></Route>
            </Switch>
        </>
    );
};

export default MainApp;