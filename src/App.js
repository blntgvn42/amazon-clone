import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import Header from './components/Header';
import pages from './static/pages';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router >
      <div className="app">
        <Switch>
          <Route path={pages.checkout}>
            <Header />
            <Checkout />
          </Route>
          <Route path={pages.home}>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
