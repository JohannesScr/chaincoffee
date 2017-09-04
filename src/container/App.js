import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route } from 'react-router-dom';

// All app components
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import Contact from '../components/Contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
        <Header />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
