import './App.css';
import { useState } from "react";
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />

        <LoadingBar color='#f11946' progress={progress} />

        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key="general" category="general" /></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" category="business" /></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" category="science" /></Route>
          <Route exact path="/gaming"><News setProgress={setProgress} key="gaming" category="gaming" /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" category="technology" /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" category="sports" /></Route>
          <Route exact path="/contact"><News setProgress={setProgress} key="contact" category="contact" /></Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;