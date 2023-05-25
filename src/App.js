import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Navbar from './Navbar';
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';



function App() {
  return (
    <Router>
      
      <Welcome/>
      {/* Other components and routes */}
    </Router>
  );
}

export default App;