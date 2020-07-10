import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TopNav from './components/TopNav';
import MainApp from './components/MainApp';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <MainApp />
        <div className='footer'>Made by Nathan Guillaumin © 2020</div>
      </div>
    </Router>
  );
}

export default App;
