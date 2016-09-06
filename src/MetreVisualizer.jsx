import React, { Component } from 'react';
import PulseColumn from './PulseColumn';

export default class MetreVisualizer extends Component {
  constructor() {
    super();

    this.state = {
      tempo: 100,
    }
  }

  changeTempo(newTempo) {
    this.setState({
      tempo: newTempo
    })
  }

  render() {
    const tempo = this.state.tempo
    const pulseColumns = [
      {
        name: 'Quaver',
        crotchetMultiple: 0.5
      },
      {
        name: 'Crotchet',
        crotchetMultiple: 1
      },
      {
        name: 'Minim',
        crotchetMultiple: 2
      },
    ].map((entry,i) => <PulseColumn
        key={i}
        tempo={tempo}
        changeTempo={::this.changeTempo}
        {...entry}
      />
    );
    return (
      <div className="ui container">
        <div className="ui grid">
          {pulseColumns}
        </div>

        <div className="ui divider"></div>

        <div>
          Meter profile: TODO
        </div>

        <div>
          Values: <input type="text" ref="value" value="TODO" disabled />
        </div>
      </div>
    );
  }
}
