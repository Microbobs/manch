import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
        <NavBar />
      </nav>
        <header className="App-header">
          Hallo Julia!
        </header>
      </div>
    );
  }
}

export default App;
