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
      </div>
    </Router>
  );
}

export default App;
