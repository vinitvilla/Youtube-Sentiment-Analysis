import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/home' component={Home}></Route>
          {/* <Route exact path='/about' component={About}></Route>]
          <Route exact path='/contact' component={Contact}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
