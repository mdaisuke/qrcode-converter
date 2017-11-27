import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';

class App extends Component {
  constructor() {
    super()
    this.state = {
      url: "http://matome.gesu.jp"
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <input value={this.state.url} onChange={e => this.setState({url: e.target.value})} />

        <br />

        <QRCodeCanvas url={this.state.url} />
      </div>
    );
  }
}

export default App;
