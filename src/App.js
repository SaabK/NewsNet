import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import React, { Component } from 'react';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

class App extends Component {

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    });
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar/>

          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />

          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="general" category="general"/></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" category="business"/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science" category="science"/></Route>
            <Route exact path="/gaming"><News setProgress={this.setProgress} key="gaming" category="gaming"/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" category="technology"/></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" category="sports"/></Route>
            <Route exact path="/contact"><News setProgress={this.setProgress} key="contact" category="contact"/></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;