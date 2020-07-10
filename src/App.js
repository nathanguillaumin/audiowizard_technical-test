import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNav from './components/TopNav';
import MainApp from './components/MainApp';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <MainApp />
        <div className='footer'>Made by <a href='https://github.com/nathanguillaumin/audiowizard_technical-test' target='_blank' rel="noopener noreferrer">Nathan Guillaumin ©</a> 2020</div>
      </div>
    </Router>
  );
}

export default App;
