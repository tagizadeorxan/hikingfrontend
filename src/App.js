import React from 'react';
import './App.css';
import Trails from './Trails';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Trail from './Trails/eachTrail.js';
import Header from './Header';
import Home from './Home';



function App() {
  return (
    <Router>
      <Header />
    
      <Route path="/" component={Home}/>
      <Route  component={Trails} path={`/:pageNumber`}/>
      <Route exact path='/trails/:id' component={Trail} />
    </Router>

  );
}

export default App;
