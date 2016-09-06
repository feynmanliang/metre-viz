import React, { Component } from 'react';
import MetreVisualizer from './MetreVisualizer';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="ui text container">
          <h1 className="ui dividing header">Metre Dissonance Visualizer</h1>
        </div>
        <MetreVisualizer />
      </div>
    );
  }
}
