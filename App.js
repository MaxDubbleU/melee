import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import CardItem from './components/Cards'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path={['/http:', '/https:']} component={props => {
  window.location.replace(props.location.pathname.substr(1)) // substr(1) removes the preceding '/'
  return null
}}/>
        <Route path='/about' component={About} />
        
      </Switch>
      </Router>
    </>
  );
}

export default App;
