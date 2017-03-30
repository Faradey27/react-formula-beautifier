/* eslint-disable */

import { Component } from 'react';
import TeX from 'react-formula-beautifier';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFormula: props.defaultFormula || 'x_1 + (x_2)^2'
    };
  }

  updateCurrentFormula = (e) => this.setState({ currentFormula: e.target.value });

  render() {
    return (
      <div className="formula-block">
        <input
          defaultValue={this.state.currentFormula}
          placeholder="Enter formula"
          onChange={this.updateCurrentFormula}
        />
        <TeX value={this.state.currentFormula} />
      </div>
    );
  }
}

export default App;
