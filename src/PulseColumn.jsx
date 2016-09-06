import React, { Component, PropTypes } from 'react';

export default class PulseColumn extends Component {
  static propTypes() {
    name: PropTypes.string.isRequired
    tempo: PropTypes.number.isRequired
    crotchetMultiple: PropTypes.number.isRequired
    changeTempo: PropTypes.func.isRequired
  };

  constructor() {
    super()

    this.state = {
      active: false
    }
  }

  handleToggleActive(event) {
    this.setState({
      active: !this.state.active
    })
  }

  handleTempoChange(event) {
    this.props.changeTempo(this.props.crotchetMultiple * event.target.value)
  }

  handleIOIChange(event) {
    this.props.changeTempo(this.props.crotchetMultiple * (60 / event.target.value))
  }

  render() {
    return (
      <div className="four wide column">
        <h1>{this.props.name}</h1>
        <div>
          Active:
          <input
            type="checkbox"
            value={this.state.active}
            onChange={::this.handleToggleActive}
          />
        </div>

        <div>
          Tempo (MM):
          <input
            type="text"
            disabled={!this.state.active}
            value={this.props.tempo * this.props.crotchetMultiple}
            onChange={::this.handleTempoChange}
          />
        </div>

        <div>
          IOI (s):
          <input
            type="text"
            value={60 / (this.props.tempo * this.props.crotchetMultiple)}
            disabled={!this.state.active}
            onChange={::this.handleIOIChange}
          />
        </div>
      </div>
    );
  }
}
