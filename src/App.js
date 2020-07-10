import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/'><HomePage /></Route>
        <Route exact path='/second'><SecondPage /></Route>
        <Route exact path='/third'><ThirdPage /></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
