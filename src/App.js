import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import React, { Component } from 'react';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/"><News key="general" category="general"/></Route>
            <Route exact path="/business"><News key="business" category="business"/></Route>
            <Route exact path="/science"><News key="science" category="science"/></Route>
            <Route exact path="/gaming"><News key="gaming" category="gaming"/></Route>
            <Route exact path="/technology"><News key="technology" category="technology"/></Route>
            <Route exact path="/sports"><News key="sports" category="sports"/></Route>
            <Route exact path="/contact"><News key="contact" category="contact"/></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;