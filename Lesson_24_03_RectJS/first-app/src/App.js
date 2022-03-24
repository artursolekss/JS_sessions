import logo from './logo.svg';
import './App.css';
import React from 'react';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>{Date()}</h1>
      </div>
    )
  }
}

export default App;
