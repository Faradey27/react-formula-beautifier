/* eslint-disable new-cap */

import React from 'react'; // we require this to have correct build of component(without error React is not defined)
const { Component, PropTypes } = React;

export default class TeX extends Component {
  static propTypes = {
    className: PropTypes.string,
    showMathMenu: PropTypes.bool,
    showMathMenuMSIE: PropTypes.bool,
    style: PropTypes.object,
    tex2jax: PropTypes.object,
    value: PropTypes.string,
  }

  static defaultProps = {
    showMathMenu: false,
    showMathMenuMSIE: false,
    tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] },
  }

  constructor(props) {
    super(props);

    MathJax.Hub.Config({
      tex2jax: props.tex2jax,
      showMathMenu: props.showMathMenu,
      showMathMenuMSIE: props.showMathMenuMSIE,
    });
  }

  componentDidMount() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.node]);
  }

  componentDidUpdate() {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, this.node]);
  }

  setNode = (node) => {
    this.node = node;
  }

  render() {
    return (
      <div
        className={this.props.className}
        id="MathJax-TeX"
        ref={this.setNode}
        style={this.props.style}
      >
        {`$${this.props.value}$`}
      </div>
    );
  }
}
