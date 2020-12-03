
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Experience1 from "./components/pages/Experience1";
import Experience2 from './components/pages/Experience2'
function App() {
  return (
  <>
  <Router>
    <Navbar />
      <Switch>
          <Route path = {process.env.PUBLIC_URL+'/'} exact component = {Home}/>
          <Route path = {process.env.PUBLIC_URL+'/Experience1'} component = {Experience1}/>
          <Route path = {process.env.PUBLIC_URL+'/Experience2'} component = {Experience2}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
