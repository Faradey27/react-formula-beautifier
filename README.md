# react-formula-beautifier

React wrapper for mathjax

[Demo](http://faradey27.github.io/react-formula-beautifier/)

[Sources of demo](https://github.com/Faradey27/react-formula-beautifier/tree/master/examples/FormulaPainter)

# Quickstart: How to use?

### (a) Install library
    npm install react-formula-beautifier --save
# (b) Add mathjax for your current project(add script tag to your index.html file)
      <script
        type="text/javascript"
        src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML-full">
      </script>

### (c) Done you are awesome!

## Example Usage

```js

import { Component } from 'react';
import TeX from 'react-formula-beautifier';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFormula: props.defaultFormula || 'x_1 + (x_2)^2'
    };
  }

  updateCurrentFormula = (e) => this.setState({currentFormula: e.target.value});

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
```

### You can also find more examples here [EXAMPLE](https://github.com/Faradey27/react-formula-beautifier/tree/master/examples/FormulaPainter)
### Feel free to open issues [ISSUES](https://github.com/Faradey27/react-formula-beautifier/issues)

### Note:

instead of adding mathjax to index.html file you can also use imports-loader in your React Component

```js
  import 'imports?this=>window!script!mathjax/MathJax.js';
```
