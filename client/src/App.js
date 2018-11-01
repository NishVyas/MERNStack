import React, { Component } from 'react';
// Below i bring in the navbar i created from my components folder
import AppNavbar from './components/AppNavbar';

import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
