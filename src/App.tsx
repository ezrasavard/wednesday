import * as React from 'react';
import './App.css';

// import logo from './logo.svg';
import ListBox from './ListBox';
import DateNavBar from './DateNavBar';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Wednesday</h1>
          <h2 className="App-subtitle">Workout Tracker</h2>
        </header>
        <div className="MainColumn">
          <DateNavBar />
          <ListBox />
        </div>
      </div>
    );
  }
}

export default App;
