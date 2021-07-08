import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/pages/Menu';
import Reservation from './components/pages/Reservation';
import Subscribe from './components/pages/Subscribe';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' component={Menu} />
          <Route path='/reservation' component={Reservation} />
          <Route path='/sign-up' component={Subscribe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
