import React, { Component } from 'react';
import Banner from './bannersLoaders/banner';
import './AppContainer.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Banner/>
        {this.props.children}
      </div>
    );
  }
}


export default App;
