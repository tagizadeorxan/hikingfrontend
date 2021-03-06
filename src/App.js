import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Trail from './Trails/eachTrail.js';
import Header from './Header';
import Home from './Home';



function App() {
  return (
    <Router>
      <Header />
    
      <Route exact path="/" component={Home}/>
      <Route exact path="/trails" component={Home}/>
      <Route exact path='/trails/:id' component={Trail} />
    </Router>

  );
}

export default App;
