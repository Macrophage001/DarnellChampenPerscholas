import React, { Component } from 'react'
import './App.css';

class DivThree extends Component {
  state = {
    tardis: {
      name: 'Time and Relative Dimension in Space',
      caps: false,
    }
  }

  changeIt = (text) => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      });
    }
  }

  render() {
    return (
      <div onClick={() => this.changeIt(this.state.tardis.name)}>
        <h3>{this.state.tardis.name}</h3>
      </div>
    )
  }
}

class DivTwo extends Component {
  render() {
    return (
      <div>
        <DivThree />
        <DivThree />
      </div>
    )
  }
}

class DivOne extends Component {
  render() {
    return (
      <div>
        <DivTwo />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <DivOne />
      </div>
    )
  }
}

export default App;
