import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import ListBox from './ListBox';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Wednesday</h1>
          <h2 className="App-subtitle">Workout Tracker</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ListBox />
      </div>
    );
  }
}

export default App;
